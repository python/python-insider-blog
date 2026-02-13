import { config, fields, collection } from "@keystatic/core";
import { inline } from "@keystatic/core/content-components";

const knownAuthors = [
  "Thomas Wouters",
  "Hugo",
  "Pablo Galindo",
  "Łukasz Langa",
  "Ned Deily",
  "Larry Hastings",
  "Benjamin Peterson",
  "Brian Curtin",
  "Ee Durbin",
  "Paul Moore",
  "A.M. Kuchling",
  "Sumana Harihareswara",
  "Doug Hellmann",
  "Georg Brandl",
  "Antoine P.",
  "Davidmh",
  "haypo",
  "Mathieu Leduc-Hamel",
  "Michael Markert",
  "Mike Driscoll",
  "Philip Jenvey",
];

const knownTags = [
  "releases",
  "pypi",
  "pip",
  "3",
  "platforms",
  "mercurial",
  "ironpython",
  "docs",
  "contributors",
  "buildbot",
];

const referenceComponents = {
  Pep: inline({
    label: "PEP Reference",
    schema: {
      number: fields.integer({
        label: "PEP Number",
        validation: { isRequired: true, min: 0 },
      }),
    },
  }),
  Docs: inline({
    label: "Python Docs",
    schema: {
      path: fields.text({
        label: "Path (e.g. 3/library/asyncio.html)",
        validation: { isRequired: true },
      }),
      label: fields.text({ label: "Display Label" }),
    },
  }),
  PyPi: inline({
    label: "PyPI Package",
    schema: {
      name: fields.text({
        label: "Package Name",
        validation: { isRequired: true },
      }),
    },
  }),
  GhRepo: inline({
    label: "GitHub Repo",
    schema: {
      repo: fields.text({
        label: "owner/repo",
        validation: { isRequired: true },
      }),
    },
  }),
  GhUser: inline({
    label: "GitHub User",
    schema: {
      name: fields.text({
        label: "Username",
        validation: { isRequired: true },
      }),
    },
  }),
};

export default config({
  storage:
    process.env.NODE_ENV === "development"
      ? { kind: "local" }
      : {
          kind: "github",
          repo: { owner: "JacobCoffee", name: "python-insider-blog" },
          branchPrefix: "keystatic/",
        },
  collections: {
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "content/authors/*",
      format: "json",
      columns: ["name", "featured"],
      schema: {
        name: fields.text({ label: "Name", validation: { isRequired: true } }),
        bio: fields.text({ label: "Bio", multiline: true }),
        github: fields.text({ label: "GitHub Username" }),
        avatar: fields.url({ label: "Avatar URL" }),
        twitter: fields.url({ label: "Twitter/X" }),
        bluesky: fields.url({ label: "Bluesky" }),
        mastodon: fields.url({ label: "Mastodon" }),
        website: fields.url({ label: "Website" }),
        featured: fields.checkbox({ label: "Featured", defaultValue: false }),
      },
    }),
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*/",
      format: { contentField: "content" },
      columns: ["publishDate", "author"],
      entryLayout: "content",
      // previewUrl requires computed year/month — not supported by Keystatic template syntax
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishDate: fields.date({ label: "Publish Date", validation: { isRequired: true } }),
        updatedDate: fields.date({ label: "Updated Date" }),
        author: fields.text({
          label: "Author",
          description: `Known authors: ${knownAuthors.join(", ")}`,
          validation: { isRequired: true },
        }),
        description: fields.text({ label: "Description", multiline: true }),
        tags: fields.multiselect({
          label: "Tags",
          options: knownTags.map((t) => ({ label: t, value: t })),
        }),
        published: fields.checkbox({ label: "Published", defaultValue: true }),
        legacyUrl: fields.text({ label: "Legacy Blogger URL" }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          components: referenceComponents,
        }),
      },
    }),
  },
});
