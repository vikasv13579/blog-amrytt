import Link from "next/link";

export default function RelatedPost({ title, articles }) {
  return (
    <section className="related_section">
      <div className="container">
        <h2 className="text_center">{title}</h2>
        <div className="related_grid">
          {articles.map((article, i) => (
            <div className="related_card" key={i}>
              <img src={article.image} alt={article.title} />
              <div className="card_body">
                <Link href={`/blog/${article.slug}`}>
                  <h3>{article.title}</h3>
                </Link>
                <p>{article.description}</p>
                <span className="author">By {article.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
