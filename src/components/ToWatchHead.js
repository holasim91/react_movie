import React from 'react'
import styled from 'styled-components'
import { useWatchState } from '../toWatchContext'


const TowatchHeadBlock = styled.div`
padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`

const ToWatchHead = () => {
    const towatches = useWatchState()
    const not_watched_movies = towatches.filter(w => !w.isWatched)
    const today = new Date()
    const dateString = today.toLocaleDateString('ko-KR', {
      year:'numeric',
      month:'long',
      day:'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR',{weekday:'long'})
    return (
        <TowatchHeadBlock>
            <h1>ToWatch List</h1>
            <div className="day">{dateString} {dayName}</div>
            <div className="task-left">볼 영화 {not_watched_movies.length}개 남음</div>
        </TowatchHeadBlock>
    )
}

export default ToWatchHead
