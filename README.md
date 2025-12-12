Live Vercel Url : https://blog-amrytt.vercel.app/blog/full-body-workout
# Next.js Blog Project

A responsive blog built with Next.js using static site generation.

## Installation

```bash
git clone https://github.com/vikasv13579/blog-amrytt.git
cd blog-amrytt
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- Static blog posts using getStaticProps
- Dynamic routing with getStaticPaths  
- Client-side comments with useEffect
- Dynamic markdown editor with next/dynamic
- Fully responsive design
- Plain CSS (no frameworks)

## How to Test Functionality

### 1. Static Site Generation (SSG)
Visit any blog post URL:
- http://localhost:3000/blog/full-body-workout
- http://localhost:3000/blog/cardio-tips
- http://localhost:3000/blog/meal-prep

All pages are pre-rendered at build time.

### 2. Dynamic Routes
Click any article card or use the sidebar "Recent" links to navigate between posts.

### 3. Client-Side Comments
Scroll to the comments section below each post. Comments load client-side after the page renders (simulates API fetch with 1s delay).

### 4. Add New Comment
Fill out the comment form:
- Enter name (optional) and email
- Write your comment
- Rate the article (click emoji 1-5)
- Click "Send" button

Your comment appears instantly at the bottom.

### 5. Dynamic Editor (Code Splitting)
Click the "Edit Post" button to dynamically load the markdown editor (lazy-loaded only when clicked, not on initial page load).

### 6. Responsive Design
Resize your browser or test on mobile:
- Desktop: 1440px layout
- Tablet: 757px layout
- Mobile: 340px layout

### 7. Related Articles
Scroll to the bottom to see related article cards that link to other posts.

## Build for Production

```bash
npm run build
npm start
```

The build generates static HTML for all blog posts.
