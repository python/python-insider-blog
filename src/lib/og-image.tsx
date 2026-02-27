import type { ReactNode } from "react";

interface OgImageProps {
  title: string;
  author: string;
  date: string;
  tags: string[];
}

export function OgImage({ title, author, date, tags }: OgImageProps): ReactNode {
  // Truncate title if too long
  const displayTitle = title.length > 100 ? title.slice(0, 97) + "…" : title;
  const displayTags = tags.slice(0, 4);

  return (
    <div
      style={{
        width: "1200",
        height: "630",
        display: "flex",
        flexDirection: "column",
        background: "#0f1117",
        fontFamily: "Inter",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle geometric pattern — diagonal lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, #ffd43b 40px, #ffd43b 41px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          display: "flex",
          height: "4",
          background: "linear-gradient(to right, #306998, #ffd43b)",
          width: "100%",
          flexShrink: 0,
        }}
      />

      {/* Content area */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "56px 64px 48px",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Python logo watermark */}
        <div
          style={{
            position: "absolute",
            right: "-30",
            bottom: "-40",
            width: "320",
            height: "320",
            display: "flex",
            opacity: 0.06,
          }}
        >
          <svg
            viewBox="0 0 256 255"
            width="320"
            height="320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
              fill="#306998"
            />
            <path
              d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
              fill="#ffd43b"
            />
          </svg>
        </div>

        {/* Top section: site name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10",
            }}
          >
            <div
              style={{
                width: "32",
                height: "32",
                borderRadius: "8",
                background: "linear-gradient(135deg, #306998, #4B8BBE)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 256 255"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                  fill="white"
                />
                <path
                  d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                  fill="rgba(255,255,255,0.6)"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: "20",
                fontWeight: 600,
                color: "#a1a1aa",
                letterSpacing: "-0.01em",
              }}
            >
              Python Insider
            </span>
          </div>
        </div>

        {/* Middle section: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            marginTop: "-16",
          }}
        >
          <div
            style={{
              fontSize: displayTitle.length > 60 ? "40" : "52",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "900",
            }}
          >
            {displayTitle}
          </div>
        </div>

        {/* Bottom section: author, date, tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16",
            }}
          >
            <span
              style={{
                fontSize: "18",
                fontWeight: 600,
                color: "#ffd43b",
              }}
            >
              {author}
            </span>
            <span style={{ fontSize: "18", color: "#52525b" }}>·</span>
            <span
              style={{
                fontSize: "18",
                color: "#71717a",
              }}
            >
              {date}
            </span>
          </div>

          {displayTags.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "8",
              }}
            >
              {displayTags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: "14",
                    fontWeight: 500,
                    color: "#a1a1aa",
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "6",
                    padding: "4px 12px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
