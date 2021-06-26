import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import "./News.css";
import NewsContent from "./NewsContent";

const countriesAllowed =
  "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";
const set1 = new Set(countriesAllowed.match(/.{1,2}/g));

const notValid = (cid) => {
  if (!(cid === null) && set1.has(cid.toString().toLowerCase())) {
    return false;
  } else {
    return true;
  }
};

const News = () => {
  const { cid } = useParams();
  // const history = useHistory();
  const [articles, setArticles] = useState([]);

  const getNewsArticles = async () => {
    if (!notValid(cid)) {
      const newsArticles = await axios.get(`http://localhost:8080/news/${cid}`);
      setArticles(newsArticles.data);
    }
  };

  useEffect(() => {
    getNewsArticles();
  }, [cid]);

  return (
    <div className='News'>
      <NewsContent articles={articles} />
    </div>
  );
};

export default News;
