import profile from "./profile";
import type { LinkDefinition } from "./types";

/**
 * Copy for the two public kb-sync pages (`/kb-sync`, `/kb-sync/privacy`). Google requires
 * an app home page and a privacy policy before the kb-sync OAuth app can go to production.
 * Neither page is linked from the main navigation.
 *
 * A paragraph is a list of segments: plain text, or a link rendered as `<a>`.
 */
export type Paragraph = (string | LinkDefinition)[];

export interface PolicySection {
  heading: string;
  body: Paragraph;
}

export const kbSyncHome = {
  title: "kb-sync",
  description:
    "kb-sync is a personal, single-user tool that reads Google Drive folders into a private knowledge base.",
  paragraphs: [
    [
      "kb-sync is a personal, single-user tool that Lee Sinclair wrote and runs for his own use. It is not offered to the public, and no one else can sign in to it.",
    ],
    [
      "It reads documents from Google Drive folders the owner chooses, using read-only access, and adds them to a private knowledge base that runs on the owner's own computer. It never creates, edits, moves or deletes anything in Google Drive.",
    ],
    [
      "How kb-sync handles Google data is set out in the ",
      { href: "/kb-sync/privacy", label: "kb-sync privacy policy" },
      ".",
    ],
  ] satisfies Paragraph[],
};

export const kbSyncPrivacy = {
  title: "kb-sync privacy policy",
  description:
    "How kb-sync, a personal Google Drive tool used only by Lee Sinclair, accesses, stores and shares Google user data.",
  effectiveDate: new Date("2026-11-21"),
  sections: [
    {
      heading: "Who",
      body: [
        "kb-sync is a personal tool used only by its developer, Lee Sinclair, with his own Google account.",
      ],
    },
    {
      heading: "Data accessed",
      body: [
        "kb-sync uses the Google Drive read-only scope (drive.readonly). With it, kb-sync reads file names, metadata and the content of files in Drive folders the owner selects. It requests no other Google data.",
      ],
    },
    {
      heading: "How it is used",
      body: [
        "This data is used only to build and update a searchable knowledge base for the owner's personal use.",
      ],
    },
    {
      heading: "Storage",
      body: [
        "Copies of the content and the sign-in token are stored only on the owner's own computer. They are not uploaded to any server run by the developer.",
      ],
    },
    {
      heading: "Sharing",
      body: [
        "Google user data is not sold or used for advertising. It is not shared with third parties except when the owner asks his knowledge base a question: short passages may be sent to Anthropic's Claude API.",
      ],
    },
    {
      heading: "Retention and deletion",
      body: [
        "Data is kept until the owner deletes it from his computer. Files removed from Drive are removed from the knowledge base on the next sync.",
      ],
    },
    {
      heading: "Revoking access",
      body: [
        "Access can be revoked at any time at ",
        {
          href: "https://myaccount.google.com/permissions",
          label: "https://myaccount.google.com/permissions",
        },
        ".",
      ],
    },
    {
      heading: "Google API policy",
      body: [
        "kb-sync's use and transfer of information received from Google APIs will adhere to the ",
        {
          href: "https://developers.google.com/terms/api-services-user-data-policy",
          label: "Google API Services User Data Policy",
        },
        ", including the Limited Use requirements.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Contact Lee Sinclair on ",
        { href: profile.linkedInUrl, label: "LinkedIn" },
        ".",
      ],
    },
  ] satisfies PolicySection[],
};
