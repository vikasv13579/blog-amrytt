import Image from "next/image";

export default function ArticleBlock({ postdetails }) {
  return (
    <article className="article_block">
      <div className="author_bar">
        <div className="author">
          <Image src={postdetails.author_img} alt={postdetails.author_name} width={32} height={32} />
          <span>{postdetails.author_name}</span>
        </div>
        <span className="date">{postdetails.date}</span>
        <a href="#" className="explore">Explore more</a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postdetails.body }} />

      {postdetails.author_description && (
        <div className="about_author">
          <h3>About {postdetails.author_name}</h3>
          <div className="about_content">
            <Image src={postdetails.author_img} alt={postdetails.author_name} width={80} height={80} />
            <p>{postdetails.author_description}</p>
          </div>
        </div>
      )}

      <div className="prev_next">
        <button className="btn_prev">← Previous<br/><small>5 Tips for better Cardio Sessions</small></button>
        <button className="btn_next">Next →<br/><small>Meal Prep Basics for Gym Enthusiasts</small></button>
      </div>
    </article>
  );
}
