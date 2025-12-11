import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blogData";
import BlogPostClient from "@/components/BlogPostClient";

export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  const paths = posts.map(post => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) return { notFound: true };

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { 
    day: "numeric", 
    month: "long", 
    year: "numeric" 
  });

  const postDetails = { ...post, date: formattedDate };

  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 3).map(p => ({
    slug: p.slug,
    image: p.image,
    category: p.category,
    date: new Date(p.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
    title: p.title,
  }));

  const articles = allPosts.map(p => ({
    image: p.image,
    title: p.title,
    description: p.excerpt,
    author: p.author_name,
    slug: p.slug,
  }));

  return { 
    props: { 
      initialPost: post, 
      initialPostDetails: postDetails, 
      initialArticles: articles, 
      initialRecentPosts: recentPosts 
    } 
  };
}

export default function BlogPostPage({ initialPost, initialPostDetails, initialArticles, initialRecentPosts }) {
  return (
    <BlogPostClient 
      initialPost={initialPost}
      initialPostDetails={initialPostDetails}
      initialArticles={initialArticles}
      initialRecentPosts={initialRecentPosts}
    />
  );
}
