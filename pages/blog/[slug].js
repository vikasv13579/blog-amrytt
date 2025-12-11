import { getBlogPostBySlug, getAllBlogPosts, getRelatedPosts, tourGuides } from "@/data/blogData";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import BlogComments from "@/components/BlogComments";
import EditButton from "@/components/EditButton";
import RelatedPost from "@/components/RelatedPost";

export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }

  // format date on server to avoid hydration issues
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString("en-US", { 
    day: "numeric", 
    month: "long", 
    year: "numeric" 
  });

  const postdetails = {
    ...post,
    date: formattedDate,
  };

  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 3).map(p => {
    const pDate = new Date(p.date);
    return {
      slug: p.slug,
      image: p.image,
      category: p.category,
      date: pDate.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
      title: p.title,
    };
  });

  const relatedPosts = getRelatedPosts(post.slug, 4);
  const articles = relatedPosts.map(p => ({
    image: p.image,
    title: p.title,
    description: p.excerpt,
    author: p.author_name,
    slug: p.slug,
  }));

  return { 
    props: { 
      post, 
      postdetails, 
      articles, 
      recentPosts 
    } 
  };
}

export default function BlogPostPage({ post, postdetails, articles, recentPosts }) {
  return (
    <>
      <Header title={postdetails.title} image={postdetails.image} />
      <MainSection postdetails={postdetails} recentPosts={recentPosts} tourGuides={tourGuides} />
      <div className="container">
        <div className="edit_section">
          <EditButton postId={post.id} />
        </div>
      </div>
      <BlogComments postId={post.id} />
      <RelatedPost title="Related articles" articles={articles} />
    </>
  );
}
