import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import './CardComponent.css'
import 'semantic-ui-css/semantic.min.css';
import CardDetails from './CardDetails';
import Category from './Category';


const CardComponent = (bitcoin) => {
    const [newsList, setNewsList] = useState([]);

const selectCategory = (node) => {
        newsFeedApiCall(node.target.value);
}

useEffect(() => {
    newsFeedApiCall('bitcoin')
}, []); 

  const newsFeedApiCall = (param) => {
      let category = param ? param :'bitcoin';
    fetch(`http://newsapi.org/v2/everything?q=${param}&from=2020-07-28&sortBy=publishedAt&apiKey=5d23993df62546cfb7aa62403f873cf3`)
    .then(results => results.json())
    .then(data => {
        console.log('data', data.articles)
        setNewsList(data.articles);
    }).catch((err)=>{
        alert('Api Error')
    });
  }

return(
    <div className="parent-class">
        <Category selectCategory={(e)=>selectCategory(e)}/>
        <div className="cardetail-class">
        <CardDetails newsList={newsList}/>
        </div>
    </div>
)
}

export default CardComponent;

