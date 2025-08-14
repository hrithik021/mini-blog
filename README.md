# Mini Blog – Next.js + TypeScript

This is a blog application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
It fetches posts and users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com) using **Axios**, and displays them with a clean, responsive UI.

---

## 🚀 Features

- Fetch and display blog posts from an API.
- Show post title, truncated body, and author name.
- Individual post pages with comments.
- **Loading state** with a custom spinner.
- **Error handling** for failed API calls.
- Responsive grid layout using Tailwind CSS.
- Scalable folder structure for components and API services.

---

## 🛠 Tech Stack

- **Next.js** – React framework
- **TypeScript** – Static typing
- **Tailwind CSS** – Utility-first styling
- **Axios** – HTTP requests
- **JSONPlaceholder** – Free fake API for testing

---

## 📂 Project Structure

src/
├── app/ # Next.js App Router pages
│ ├── page.tsx # Home page
│ ├── posts/ # Posts listing and details
│ └── layout.tsx
├── components/ # Reusable UI components
│ ├── Loader.tsx
│ ├── ErrorState.tsx
│ └── PostCard.tsx
├── lib/
│ └── api.ts # Centralized API calls
└── styles/ # Global styles

yaml
Copy
Edit

---

## ⚡ Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
Then run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

🌐 API Endpoints Used
GET /posts → Fetch all posts

GET /users → Fetch all users (for author names)

GET /posts/:id → Fetch single post

GET /comments?postId=:id → Fetch comments for a post

📦 Deployment
https://uengage-mini-blog.vercel.app/
