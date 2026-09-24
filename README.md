# Varun S · Personal Developer & Data Portfolio

Personal developer and data analytics portfolio website of **Varun S**. Designed with a stark, modern dark-mode aesthetic inspired by developer-centric platforms like Vercel, styled with **Tailwind CSS v4**, and built on **Astro.js v6** with **React 19** client islands.

---

## 🛠️ Architecture & Technology Stack

- **Framework:** [Astro.js v6](https://astro.build/) (Static Site Generation for fast load times and clean routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration using `@tailwindcss/vite` plugin)
- **Runtime Interactivity:** [React v19](https://react.dev/) (Client islands hydrated only where interactivity is required)
- **Animations & Effects:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), and custom CSS animations
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms Handling:** Direct `mailto:` client integration with direct LinkedIn and GitHub connection paths
- **Interactive Cursor:** Canvas-based sparkle particle cursor effect

---

## 🚀 Key Highlights & Portfolio Sections

### 1. Hero & Profile Overview
- **Interactive Grid Background:** Reactive canvas grid that tracks cursor movement and drifts smoothly when idle.
- **Looping Words Signature:** Dynamic title cycling across key specialties: *Data Analytics*, *Applied AI*, *Cybersecurity*, *Power BI & DAX*, *Ethical Hacking*, and *SQL & Python*.
- **Quick Statistics:** Verified public GitHub repositories fetched dynamically via the GitHub REST API, BCA qualification, and Post-Graduate qualification in Data Science & AI.

### 2. Analytics Workflow & Featured Projects
- **End-to-End Analytics Pipeline:** Structured 7-stage interactive breakdown:
  1. Raw Data (CSV, Excel, APIs, DBs)
  2. Data Cleaning (Power Query, Pandas)
  3. Exploratory Analysis & EDA (Seaborn, Matplotlib, SQL)
  4. Transformation (DAX Measures, Feature Scaling)
  5. SQL / Python Engine (Window Functions, Scikit-learn)
  6. Interactive BI (Power BI, Slicers, Dashboards)
  7. Decision Making (Executive KPIs)
- **Cybersafe Shield (Signature Project):** Machine Learning and NLP-based cyberbullying detection system featuring SVM text classification, Joblib serialization, Flask API server, and SQLite event logging.
- **Data Analytics & BI Projects:** HR Store Sales Data Analysis, Hospital Management Analytics, Anime Dataset Analytics, SQL Analytics Lab, Machine Learning Experiments, and FinGuard-AI Concept.

### 3. Cybersecurity & Threat Defense
- **Interactive Security Architecture:** Visual simulation of threat analysis, network concepts, and machine learning models for proactive cyberbullying defense.

### 4. Technical Skills Ecosystem
- Categorized skill grid covering:
  - **Data Analytics & BI:** Power BI, Advanced Excel, Power Query, DAX, SQL, Data Visualization, Statistics, EDA, Business Analytics
  - **Data Science & AI / ML:** Python, Machine Learning, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, NLP, Applied AI, Generative AI, Prompt Engineering
  - **Cybersecurity & Online Safety:** Cybersecurity, Ethical Hacking, Online Safety, Cyberbullying Detection, Digital Threat Analysis
  - **Programming & Web Frameworks:** Java, JavaScript, HTML, CSS, Flask, SQLite, MySQL, MongoDB
  - **Developer Tools & Platforms:** Git, GitHub, Jupyter, Google Colab, Kaggle, VS Code

### 5. Live GitHub Integration & Timeline
- **Live GitHub Repository Browser:** Real-time repository showcase synced dynamically with [github.com/senpaivarun2004](https://github.com/senpaivarun2004) with search, filter tabs, and stats.
- **Education & Experience Timeline:** Academic progression including BCA Graduate at Soundarya Institute of Management & Science and PGDM in Data Science & Analytics with Applied AI from Imarticus Learning (Completed — 30 June 2026).

---

## 📁 Directory Layout

```text
/
├── public/                 # Static assets (favicons, fonts, certificates, icons)
├── src/
│   ├── assets/             # Vector icons and project media
│   ├── components/         # Astro layout components and React client islands
│   │   ├── Projects/       # Project cards, featured showcase (Cybersafe Shield)
│   │   ├── Hero.astro      # Main hero section with interactive grid
│   │   ├── About.astro     # Bio and profile summary
│   │   ├── Skills.astro    # Technical toolkit ecosystem
│   │   └── ...             # Other section components
│   ├── data/               # Static dataset definitions (projects.ts, skills.ts)
│   ├── layouts/            # Base HTML wrapper and SEO meta tags (BaseLayout.astro)
│   ├── pages/              # Astro routing controllers (/, /404, /projects/...)
│   └── styles/             # Global Tailwind v4 CSS and design tokens
├── astro.config.mjs        # Astro configuration with Tailwind Vite plugin
├── package.json            # Scripts and project dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🧞 Local Development & Build Commands

Run all commands from the project root:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Launches local development server at `http://localhost:4321/` |
| `npm run build` | Compiles production-ready static files into `./dist/` |
| `npm run preview` | Previews the compiled build locally |

> [!TIP]
> For a complete setup walkthrough, prerequisites, troubleshooting, and deployment tips, check out the [HOW_TO_RUN.md](file:///c:/Users/senpq/Downloads/VarunS-portfolio-main/VarunS-portfolio-main/HOW_TO_RUN.md) guide.

---

## 📬 Contact & Profiles

- **GitHub:** [@senpaivarun2004](https://github.com/senpaivarun2004)
- **LinkedIn:** [Varun S](https://www.linkedin.com/in/varun-s-95b7b8252)
- **HackerRank:** [@senpaivarun](https://www.hackerrank.com/profile/senpaivarun)

---

## 📄 License

Licensed under the [MIT License](LICENSE) · Copyright © 2026 Varun S.
