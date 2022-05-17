import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {
  
const [movieList, setMovieList] = useState([]);
const [FeaturedData, setFeaturedData] = useState(null);
const [blackHeader, setBlackHeader] = useState(true);

useEffect(()=>{

  const loadAll = async () => {
    //  Pegando a lista total
    let list = await Tmdb.getHomeList();
    setMovieList(list)

    //  Pegando o Featured Movie
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }

  loadAll();
}, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {FeaturedData &&
        <FeaturedMovie item={FeaturedData} />
      }


      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}