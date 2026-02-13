import { Command } from "cmdk";
import { useCallback, useEffect, useRef, useState } from "react";

/* ── Types ──────────────────────────────────────────── */

interface PostEntry {
  id: string;
  url: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
}

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/* ── Scoring ────────────────────────────────────────── */

const WEIGHTS = {
  title: 10,
  tag: 6,
  author: 4,
  description: 2,
} as const;

function scorePost(post: PostEntry, query: string): number {
  if (!query) return 1;

  const q = query.toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  let score = 0;

  for (const term of terms) {
    if (post.title.toLowerCase().includes(term)) score += WEIGHTS.title;
    if (post.tags.some((t) => t.toLowerCase().includes(term)))
      score += WEIGHTS.tag;
    if (post.author.toLowerCase().includes(term)) score += WEIGHTS.author;
    if (post.description.toLowerCase().includes(term))
      score += WEIGHTS.description;
  }

  if (post.title.toLowerCase() === q) score += 20;
  if (post.title.toLowerCase().startsWith(q)) score += 5;

  return score;
}

/* ── Date formatting ────────────────────────────────── */

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ── Base path helper ──────────────────────────────── */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
function withBase(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/* ── Navigation items with chord shortcuts ──────────── */

const NAV_ITEMS = [
  { label: "Go to Home", href: withBase("/"), icon: HomeIcon, chord: "H" },
  { label: "Go to Blog", href: withBase("/blog"), icon: BlogIcon, chord: "B" },
  { label: "Go to Tags", href: withBase("/tags"), icon: TagIcon, chord: "T" },
  { label: "Go to RSS Feed", href: withBase("/rss.xml"), icon: RssIcon, chord: "R" },
] as const;

/* ── Component ──────────────────────────────────────── */

const MAX_VISIBLE_POSTS = 8;
const CHORD_TIMEOUT = 400;

const ALL_SHORTCUTS = [
  { keys: ["⌘", "K"], label: "Open command palette" },
  { keys: ["G", "H"], label: "Go to Home" },
  { keys: ["G", "B"], label: "Go to Blog" },
  { keys: ["G", "T"], label: "Go to Tags" },
  { keys: ["G", "R"], label: "Go to RSS" },
  { keys: ["?"], label: "Show keyboard shortcuts" },
] as const;

export default function CommandPalette({ open: controlledOpen, onOpenChange }: Props) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<PostEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const fetchedRef = useRef(false);
  const chordRef = useRef<number | null>(null);
  const pendingChordRef = useRef(false);

  const open = controlledOpen ?? internalOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      setInternalOpen(value);
      onOpenChange?.(value);
    },
    [onOpenChange],
  );

  // Listen for custom events from Astro
  useEffect(() => {
    function handleToggle() {
      setShowShortcuts(false);
      setOpen(true);
    }
    function handleShowShortcuts() {
      setShowShortcuts(true);
      setOpen(true);
    }
    document.addEventListener("toggle-command-palette", handleToggle);
    document.addEventListener("show-keyboard-shortcuts", handleShowShortcuts);
    return () => {
      document.removeEventListener("toggle-command-palette", handleToggle);
      document.removeEventListener("show-keyboard-shortcuts", handleShowShortcuts);
    };
  }, [setOpen]);

  // Global keyboard shortcuts: Cmd+K and G→{key} chords
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Don't intercept when typing in an input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable;

      // Cmd+K / Ctrl+K — always works
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(!open);
        return;
      }

      // Chord shortcuts only work when palette is closed and not in an input
      if (open || isInput) return;

      if (pendingChordRef.current) {
        // Second key of chord
        pendingChordRef.current = false;
        if (chordRef.current) {
          clearTimeout(chordRef.current);
          chordRef.current = null;
        }
        const key = e.key.toLowerCase();
        const target = NAV_ITEMS.find((item) => item.chord.toLowerCase() === key);
        if (target) {
          e.preventDefault();
          window.location.href = target.href;
        }
        return;
      }

      // ? opens shortcuts panel
      if (e.key === "?" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setShowShortcuts(true);
        setOpen(true);
        return;
      }

      if (e.key === "g" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        // First key of chord — start waiting
        pendingChordRef.current = true;
        chordRef.current = window.setTimeout(() => {
          pendingChordRef.current = false;
          chordRef.current = null;
        }, CHORD_TIMEOUT);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  // Fetch search index on first open
  useEffect(() => {
    if (!open || fetchedRef.current) return;
    fetchedRef.current = true;
    setLoading(true);

    fetch(withBase("/search-index.json"))
      .then((res) => res.json())
      .then((data: PostEntry[]) => setPosts(data))
      .catch((err) => console.error("Failed to load search index:", err))
      .finally(() => setLoading(false));
  }, [open]);

  // Reset state when closing
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setQuery("");
        setShowShortcuts(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Filter and score posts
  const scoredPosts = posts
    .map((post) => ({ post, score: scorePost(post, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  const visiblePosts = scoredPosts.slice(0, MAX_VISIBLE_POSTS);
  const remainingCount = scoredPosts.length - visiblePosts.length;

  function navigate(href: string) {
    setOpen(false);
    window.location.href = href;
  }

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
    setOpen(false);
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      shouldFilter={false}
    >
      {showShortcuts ? (
        /* ── Keyboard shortcuts panel (no search input) ── */
        <div className="cmdk-shortcuts-panel">
          <div className="cmdk-shortcuts-header">
            <span>Keyboard Shortcuts</span>
            <button
              className="cmdk-shortcuts-close"
              onClick={() => { setShowShortcuts(false); setOpen(false); }}
              aria-label="Close"
            >
              <kbd className="cmdk-kbd-sm">Esc</kbd>
            </button>
          </div>
          <div className="cmdk-shortcuts-list">
            {ALL_SHORTCUTS.map(({ keys, label }) => (
              <div key={label} className="cmdk-shortcut-row">
                <span className="cmdk-shortcut-label">{label}</span>
                <span className="cmdk-shortcut-keys">
                  {keys.map((k, i) => (
                    <span key={i}>
                      {i > 0 && <span className="cmdk-chord-then">then</span>}
                      <kbd className="cmdk-kbd-sm">{k}</kbd>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ── Normal command palette ───────────────────── */
        <>
          <div style={{ position: "relative" }}>
            <div className="cmdk-search-icon" aria-hidden="true">
              <SearchIcon />
            </div>
            <Command.Input
              value={query}
              onValueChange={setQuery}
              placeholder="Search posts, tags, authors..."
            />
          </div>
          <Command.List>
            {loading && (
              <Command.Loading>
                <div className="cmdk-loading">Loading search index...</div>
              </Command.Loading>
            )}

            <Command.Empty>No results found.</Command.Empty>

            {/* Posts group */}
            {visiblePosts.length > 0 && (
              <Command.Group heading="Posts">
                {visiblePosts.map(({ post }) => (
                  <Command.Item
                    key={post.id}
                    value={`post-${post.id}`}
                    onSelect={() => navigate(withBase(post.url))}
                  >
                    <div className="cmdk-post-icon" aria-hidden="true">
                      <ArticleIcon />
                    </div>
                    <div className="cmdk-post-content">
                      <span className="cmdk-post-title">{post.title}</span>
                      <span className="cmdk-post-meta">
                        <span>{post.author}</span>
                        <span className="cmdk-meta-sep" aria-hidden="true">·</span>
                        <span>{formatDate(post.date)}</span>
                        {post.tags.length > 0 && (
                          <>
                            <span className="cmdk-meta-sep" aria-hidden="true">·</span>
                            <span className="cmdk-post-tags">{post.tags.slice(0, 3).join(", ")}</span>
                          </>
                        )}
                      </span>
                    </div>
                  </Command.Item>
                ))}
                {remainingCount > 0 && (
                  <div className="cmdk-more-results">
                    {remainingCount} more result{remainingCount !== 1 ? "s" : ""}...
                  </div>
                )}
              </Command.Group>
            )}

            {/* Navigation group */}
            <Command.Group heading="Go to">
              {NAV_ITEMS.map(({ label, href, icon: Icon, chord }) => (
                <Command.Item
                  key={href}
                  value={`nav-${label.toLowerCase()}`}
                  onSelect={() => navigate(href)}
                >
                  <div className="cmdk-nav-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <span>{label}</span>
                  <span className="cmdk-chord" aria-label={`Shortcut: G then ${chord}`}>
                    <kbd className="cmdk-kbd-sm">G</kbd>
                    <span className="cmdk-chord-then">then</span>
                    <kbd className="cmdk-kbd-sm">{chord}</kbd>
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Actions group */}
            <Command.Group heading="Actions">
              <Command.Item value="action-toggle-dark-mode" onSelect={toggleDarkMode}>
                <div className="cmdk-nav-icon" aria-hidden="true">
                  <ThemeIcon />
                </div>
                <span>Toggle dark mode</span>
              </Command.Item>
              <Command.Item
                value="action-keyboard-shortcuts"
                onSelect={() => setShowShortcuts(true)}
              >
                <div className="cmdk-nav-icon" aria-hidden="true">
                  <ShortcutIcon />
                </div>
                <span>Keyboard shortcuts</span>
                <span className="cmdk-chord">
                  <kbd className="cmdk-kbd-sm">?</kbd>
                </span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="cmdk-footer">
            <div className="cmdk-footer-hints">
              <span className="cmdk-footer-hint">
                <kbd className="cmdk-kbd-sm">&uarr;&darr;</kbd>
                <span>Navigate</span>
              </span>
              <span className="cmdk-footer-hint">
                <kbd className="cmdk-kbd-sm">&crarr;</kbd>
                <span>Open</span>
              </span>
              <span className="cmdk-footer-hint">
                <kbd className="cmdk-kbd-sm">Esc</kbd>
                <span>Close</span>
              </span>
            </div>
          </div>
        </>
      )}
    </Command.Dialog>
  );
}

/* ── Icons ──────────────────────────────────────────── */

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ArticleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function RssIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.18 15.64a2.18 2.18 0 012.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 012.18-2.18zM4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44zM4 10.1a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z" />
    </svg>
  );
}

function ShortcutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10" />
    </svg>
  );
}

function ThemeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
