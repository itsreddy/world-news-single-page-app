import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./News.css";

const countriesAllowed =
  "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";
const set1 = new Set(countriesAllowed.match(/.{1,2}/g));

const notValid = (cid) => {
  if (cid && set1.has(cid.toString().toLowerCase())) {
    return false;
  } else {
    return true;
  }
};

const getNewsArticles = async (cid, history, setArticles) => {
  try {
    if (notValid(cid)) {
      history.push("/world");
    } else {
      const newsArticles = await axios.get(`http://localhost:8080/news/${cid}`);
      setArticles(newsArticles.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const News = () => {
  const { cid } = useParams();
  const history = useHistory();

  const [articles, setArticles] = useState();
  useEffect(() => {
    setArticles(getNewsArticles(cid, history, setArticles));
  }, [cid]);

  console.log(articles);

  return <div className='News'>News = {cid}</div>;
};

export default News;
