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


## Setup of Google Authentication and Authorization
## Step 1
on go to google and search google `cloude console` 

there are two options on cloude console switch account and second is agree and continue Click agree and continue and you will shift to dashboard

select project and then window open to click on create project

## Step 2
click on three dot and then click on api & service `OAuth consent screen` and put info select `external`

then click OAuth 2.0 select app type and name then you will found client ID save it on env file

## Then define scope mean which data of user you want to get from google
when you created` OAuth 2.0` then come on OAuth consent Screen where you have found `Data Access` click on it then `Add or remove scope` click on it and save 

## Step 3 
copy client ID and Client Secret from client put it into .env install pakage `npm i passport` and 
`npm i passport-google-oauth20`

## step 4
Go to project and create a file passport.js in config folder 





## Implement the Github Login 

## Step 1

go github click on --> `profile icon` then navigation open to click on --> `settings` 

## Step 2
then left side bar open in last click on --> `developer` your will redirect to `OAuth app` 
## Step 3
create new and give your Web info name of web and url and callback URL donot check the `device manage`
## Step 4
Now you have a `Client ID` and generate `CLient Secret`


## Session Managent

First of all we have to create a `createSession` function in the `utils` and `deviceInfo` by using ua-parser-js package when ever we create them then create a session Schema where we have keys `user, os, browser, device, refreshToken, and user-agent` then call createSession on login and Update accesToken in refreshToken  










