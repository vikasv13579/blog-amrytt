import ArticleBlock from "./ArticleBlock";
import Sidebar from "./Sidebar";

export default function MainSection({ postdetails, recentPosts, tourGuides }) {
  return (
    <section className="main_section">
      <div className="container">
        <div className="main_grid">
          <ArticleBlock postdetails={postdetails} />
          <Sidebar recentPosts={recentPosts} tourGuides={tourGuides} />
        </div>
      </div>
    </section>
  );
}
