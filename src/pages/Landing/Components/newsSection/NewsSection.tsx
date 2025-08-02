import { Link } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import Button from "../../../../components/button/Button";
import NewsCard from "./components/NewsCard";

import "./newsSection.scss";
import Title from "../../../../components/title/Title";

const NewsSection = () => {
  const articles = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg",
      date: "July 20, 2025",
      title: "New Digital Clinics Launched",
      text: "Our platform just launched 20+ digital clinics to simplify your care journey.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg",
      date: "July 15, 2025",
      title: "Secure Payments Now Available",
      text: "Easier and more secure ways to pay for services are now live.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg",
      date: "July 10, 2025",
      title: "Appointment Booking Upgrade",
      text: "We’ve improved the booking experience with real-time doctor availability.",
    },
  ];

  return (
    <Layout bgWhite landing>
      <div className="news-section">
        <Title type="primary-span">Latest News & Updates</Title>

        <div className="news-cards">
          {articles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </div>

        <div className="view-more-container">
          <Link to="" className="view-more-desktop">
            <Button type="primaryOutlined" text="View More News →" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NewsSection;
