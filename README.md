# ReelForge 🚀
> **"Input an idea. Get a video. Publish on every platform — automatically."**

ReelForge is an advanced, AI-powered content automation platform designed to streamline the entire short-form video creation and distribution pipeline. By converting simple text concepts into high-quality, publish-ready videos with zero manual input, ReelForge unifies trend scraping, AI voiceover generation, contextual media sourcing, and multi-platform scheduling into a single cohesive software ecosystem.

---

## 🛠️ Product Architecture Overview
ReelForge eliminates the friction of managing 5+ disconnected tools by handling the complete content loop:
* **Content Intelligence:** Automated trend scraping (Reddit, YouTube, Google Trends) paired with AI script generation.
* **Video Creation Engine:** Smart stock footage sourcing (Pexels/Pixabay), text-to-speech audio synthesis, dynamic subtitle burn-in, and automatic multi-aspect ratio rendering (9:16, 16:9, 1:1).
* **Multi-Platform Publisher:** One-click bulk scheduling and publishing across 8 major social networks via unified API hubs.

---

## 👥 The Engineering Team & Roles
ReelForge is built and maintained by a dedicated 4-person team dividing tasks between core AI automation and web infrastructure:

* **Raheel Ahmed** – *Group Lead & Lead Full-Stack Developer* (MERN & Architecture)
* **Muneeb** – *Full-Stack Developer* (MERN & Third-Party Publishing APIs)
* **Sameel** – *AI Engineer* (Scripting pipelines, LLM integration, and Audio synthesis)
* **Zayab** – *AI Engineer* (Media sourcing, Rendering pipelines, and Video composition)

---

## 🚦 Project Progress & Current Roadmap
We are running a phased development lifecycle ensuring stability at every milestone:

### Current Milestone: 🏗️ Proof of Concept (PoC) Development
We are actively building the **Proof of Concept (PoC)** to validate the core vertical automation loop. The current sprint focuses on:
- [ ] Setting up the Node.js/Express backend service to bridge communication with the AI engine.
- [ ] Engineering a unified Python script to handle script generation, Pexels API clip fetching, and `moviepy`/`ffmpeg` canvas rendering.
- [ ] Validating programmatic video publishing via YouTube Data API and Meta Graph API test sandboxes.

---

## 💻 Technical Stack
* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js, Redis (Job Queues), MongoDB
* **AI & Multimedia Processing:** Python, MoviePy / FFmpeg, FastAPI
* **Models in Scope:** Qwen 3.5/DeepSeek (Text), Kokoro-82M/Chatterbox (Audio), FLUX.1/Wan 2.2 (Generative Media)
* **Infrastructure:** Wasabi/Backblaze S3 Storage, Cloudflare CDN, Cloud GPU Compute Nodes

---
*For internal team documentation, reference the full architectural document: `ReelForge_Blueprint (1).docx`.*
