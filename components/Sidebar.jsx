import Link from "next/link";

export default function Sidebar({ recentPosts, tourGuides }) {
  return (
    <aside className="sidebar">
      {/* recent posts */}
      <div className="sidebar_box">
        <h3>Recent</h3>
        {recentPosts.map((post, i) => {
          const postUrl = `/blog/${post.slug}`;
          return (
            <Link href={postUrl} key={i} className="recent_item">
              <img src={post.image} alt={post.title} />
              <div>
                <span className="category">{post.category}</span>
                <span className="date">{post.date}</span>
                <p>{post.title}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* tour guides section */}
      <div className="sidebar_box">
        <h3>Tour Guides</h3>
        {tourGuides.map((guide, idx) => (
          <div key={idx} className="guide_item">
            <img src={guide.image} alt={guide.name} />
            <div>
              <p className="guide_name">{guide.name}</p>
              <p className="guide_location">📍 {guide.location}</p>
              <div className="guide_rating">⭐⭐⭐⭐⭐ {guide.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
