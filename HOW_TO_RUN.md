# 🚀 How to Run This Project

A step-by-step guide for setting up, running, building, and troubleshooting the **Varun S Portfolio** locally.

---

## 📋 Prerequisites

Before getting started, make sure you have the following installed on your machine:

1. **Node.js**: `v22.12.0` or higher (recommended: Node.js 22 LTS or newer)
   - Verify installation:
     ```bash
     node -v
     ```
2. **npm** (comes bundled with Node.js):
   - Verify installation:
     ```bash
     npm -v
     ```

---

## 🛠️ Step 1: Open the Project Directory

Open your terminal or command prompt (PowerShell, Command Prompt, or Bash) and navigate into the project directory:

```bash
cd VarunS-portfolio-main
```

> [!NOTE]
> Make sure you are in the folder containing `package.json` and `astro.config.mjs`.

---

## 📦 Step 2: Install Dependencies

Install all necessary project packages by running:

```bash
npm install
```

This will install Astro v6, React 19, Tailwind CSS v4, Framer Motion, GSAP, and all supporting packages.

---

## 💻 Step 3: Run the Development Server

To start the local live development server with hot module reloading (HMR):

```bash
npm run dev
```

Once started, open your web browser and visit:
👉 **[http://localhost:4321](http://localhost:4321)**

Any changes made to the files in `src/` will instantly update in the browser.

To stop the server, press `Ctrl + C` in your terminal.

---

## 🏗️ Step 4: Build for Production

To create an optimized, static production build:

```bash
npm run build
```

- This will compile all Astro routes, React components, and styles into the `./dist/` folder.
- The build outputs static HTML, CSS, and client-side JavaScript ready for deployment to any web host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

---

## 🔍 Step 5: Preview Production Build Locally

To test and preview the production build locally before deploying:

```bash
npm run preview
```

The preview server will launch at:
👉 **[http://localhost:4321](http://localhost:4321)**

---

## 📜 All Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server at `http://localhost:4321` |
| `npm run build` | Compiles the production build into the `./dist/` directory |
| `npm run preview` | Runs a local web server to preview the `./dist/` build |
| `npm run astro` | Runs Astro CLI commands directly (e.g. `npm run astro -- --help`) |

---

## ❓ Troubleshooting & FAQs

### 1. `node: command not found` or Node version error
- Download and install the latest Node.js from [nodejs.org](https://nodejs.org/).
- Ensure your Node.js version is `>= 22.12.0`.

### 2. Port `4321` is already in use
- If another process is using port `4321`, Astro will automatically select the next available port (e.g., `http://localhost:4322`). Check the terminal output for the exact URL.
- Alternatively, specify a custom port:
  ```bash
  npx astro dev --port 3000
  ```

### 3. Clear cache and rebuild
If you experience any unexpected cache or dependency issues, run:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .astro, dist, node_modules
npm install
npm run dev
```

---

## 🚀 Deployment

The generated `dist/` directory can be deployed directly to:
- **Vercel:** Run `npx vercel` or connect the GitHub repository on [vercel.com](https://vercel.com).
- **Netlify:** Drag and drop the `dist/` folder onto [Netlify](https://netlify.com) or link the repo.
- **GitHub Pages:** Deploy the contents of the `dist/` folder via GitHub Actions.
