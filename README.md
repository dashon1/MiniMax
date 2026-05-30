# MiniMax AI Agent Workspace

Portfolio of AI-powered marketing sites and tools. This is a workspace for AI agent-driven web projects — each sub-directory is an independent site or product built and iterated on by the MiniMax AI agent operating within this workspace.

## Sub-Directories

### Web Site Projects (numbered)

| Directory | Description |
|-----------|-------------|
| `01-ai-workflow-site` | Marketing landing page for an AI workflow automation product — built with React + Vite + Tailwind, pnpm-managed |
| `02-inbox-zero-site` | Marketing site for the Inbox Zero AI email management product — React + Vite + Tailwind, pnpm-managed |
| `03-validation-site` | Idea validation funnel site; contains `validation-blueprint-site` sub-project |
| `04-content-machine-site` | Landing page / sales funnel for the Content Machine AI content creation product |
| `05-onboarding-site` | AI-powered onboarding autopilot site and flow |
| `06-ops-os-site` | AI Ops OS — operational systems and automation landing page |
| `07-lead-gen-site` | Lead Gen OS — AI-powered lead generation system marketing site |
| `08-agency-starter` | Agency Starter Kit — white-label AI marketing agency starter pack |
| `09-viral-script` | Viral Video Script System — AI video script generation tool and landing page |
| `digital-product-empire` | Digital product empire meta-project (contains `pro` sub-directory) |

### Agent Workspace Files

| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent operating instructions — session startup protocol, memory rules, safety rules |
| `IDENTITY.md` | Agent identity configuration (name, vibe, avatar) — fill in on first run |
| `SOUL.md` | Agent personality and values definition |
| `USER.md` | Profile of the human this agent assists |
| `MEMORY.md` | Long-term curated agent memory (main session only) |
| `HEARTBEAT.md` | Periodic checklist for proactive agent tasks |
| `TOOLS.md` | Local tool and integration notes (API keys, camera names, etc.) |
| `BOOTSTRAP.md` | First-run birth certificate (delete after reading) |
| `TOMORROW_CHECKLIST.md` | Daily carry-forward task list |
| `COPY_PASTE_LAUNCH_GUIDE.md` | Quick launch reference for deploying sites |

### Product Bundles

| Directory | Description |
|-----------|-------------|
| `product_01_ai_workflow` through `product_09_video_script` | Packaged product bundles for each of the 9 core products |
| `inbox-zero-kit` | Standalone Inbox Zero product kit |
| `landing-page` | Reusable landing page template |
| `store` | Store / checkout integration files |
| `marketing` | Marketing copy, email sequences, and campaign assets |
| `seo` | SEO content and keyword research files |
| `thumbnails` | Video/product thumbnail assets |
| `videos` | Video content and scripts |
| `scripts` | Automation and utility scripts |
| `skills` | Agent skill modules |

## Setup

Each numbered site (`01-*` through `09-*`) is a standalone React + Vite project managed with **pnpm**. To set up any sub-site:

```bash
cd 01-ai-workflow-site   # or any numbered directory
pnpm install
pnpm dev                 # local dev server
pnpm build               # production build
```

All sub-sites use the same stack: React 18, Vite 6, Tailwind CSS 3, TypeScript, shadcn/ui (Radix UI components).

> Note: The scripts use `pnpm install --prefer-offline` by default. Run `pnpm install` once with internet access to populate the local store, then subsequent runs work offline.

## Workspace Purpose

This workspace is operated by the MiniMax AI agent. The agent reads `AGENTS.md` each session for instructions, maintains memory in `MEMORY.md` and `memory/YYYY-MM-DD.md` daily logs, and uses the heartbeat system for proactive background work. Each site is built, iterated, and deployed autonomously under direction from the workspace owner.
