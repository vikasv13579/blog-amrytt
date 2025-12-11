export default function Header({ title, image }) {
  return (
    <header className="header_section">
      <div className="container">
        <nav>
          <ul className="breadcrumb">
            <li className="breadcrumb_item">HOME</li>
            <li className="breadcrumb_item">ARTICLES</li>
          </ul>
        </nav>
        <h1>{title}</h1>
      </div>
      {image ? <img src={image} alt={title} /> : null}
    </header>
  );
}
