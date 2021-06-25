import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./News.css";

const countriesAllowed =
  "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";

const notValid = (cid) => {
  const set1 = new Set(countriesAllowed.match(/.{1,2}/g));
  if (set1.has(cid.toString().toLowerCase())) {
    return false;
  } else {
    return true;
  }
};

const getNewsArticles = async (cid, history) => {
  // console.log(cid);
  // console.log(notValid(cid));
  if (notValid(cid)) {
    history.push("/world");
  } else {
    const newsArticles = await axios.get(`http://localhost:8080/news/${cid}`);
    // console.log(newsArticles.data);
    // console.log("getnewsarticles");
    return newsArticles.data;
  }
};

const News = () => {
  const { cid } = useParams();
  const history = useHistory();

  // const [articles, setArticles] = useState(getNewsArticles(cid));
  // useEffect(() => {
  //   setArticles(getNewsArticles(cid, history));
  //   console.log(articles);
  // }, [cid]);

  const articles = getNewsArticles(cid, history);
  console.log(articles);

  return <div className='News'>News = {cid}</div>;
};

export default News;
