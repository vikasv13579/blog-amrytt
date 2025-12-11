import Link from "next/link";
import { getAllBlogPosts } from "@/data/blogData";

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  return { 
    props: { 
      featured: {
        ...posts[0],
        date: new Date(posts[0].date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
      }
    } 
  };
}

export default function Home({ featured }) {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>Welcome to Our Blog</h1>
      <p style={{ margin: "30px 0" }}>Discover fitness tips, workouts, and nutrition advice</p>
      <Link href={`/blog/${featured.slug}`} className="btn btn_primary">Read Featured Article</Link>
      <br /><br />
      <Link href="/blog" className="btn btn_outline_primary">View All Articles</Link>
    </div>
  );
}
