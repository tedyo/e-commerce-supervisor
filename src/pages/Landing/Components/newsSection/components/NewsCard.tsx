import { Calendar } from "lucide-react";
import "./newsCard.scss";

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  text: string;
};

const NewsCard = ({ image, date, title, text }: NewsCardProps) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <div className="news-date">
        <Calendar size={16} color="#96cc39" />
        <span>{date}</span>
      </div>
      <h3 className="news-title">{title}</h3>
      <p className="news-text">{text}</p>
      <a href="#" className="read-more">
        Read More →
      </a>
    </div>
  );
};

export default NewsCard;
