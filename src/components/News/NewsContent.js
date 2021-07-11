import { Container } from "@material-ui/core";
import React from "react";
import { Redirect, useHistory, withRouter } from "react-router-dom";
import "./News.css";
import NewsCard from "./NewsCard";

const NewsContent = ({ articles }) => {
  console.log(articles);

  return (
    // <></>
    <Container maxWidth='md'>
      <div className='content'>
        {articles.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
    </Container>
  );
};

export default withRouter(NewsContent);
