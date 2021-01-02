import React from 'react'
import ToWatchItem from '../components/ToWatchItem'
import './ToWatchList.css'
import { movieData } from "../movieData";


const ToWatchList = () => {
    const watched = movieData.filter(m => m.isWatch === false).length
    return (
      <>
        <div className="ToWatchTemplateBlock">
          <div className="ToWatchHeadBlock">
            <h1>ToWatch List</h1>
            <div className="day">2021-01-02</div>
            <div className="task-left">{`볼 영화 ${watched}개 남음`}</div>
          </div>
          <div className="ToWatchListBlock">
                {movieData.map(m=> <ToWatchItem text={m.title} done={m.isWatch} key={m.id}/>)}
          </div>
        </div>
      </>
    );
}

export default ToWatchList
