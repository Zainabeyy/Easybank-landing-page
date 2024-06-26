export default function LatestArticle(props) {
  return (
    <div className="article">
      <img
        src={`../../public/${props.item.image}`}
        alt={props.item.title}
        className="articleImage"
      />
      <div className="articleContent">
        <p className="writerName">{props.item.writer}</p>
        <a href="#" className="articleLink"><h3 className="articleTitle">{props.item.title}</h3></a>
        <p className="articleDescription">{props.item.description}</p>
      </div>
    </div>
  );
}
