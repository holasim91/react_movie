import React from 'react'
import styled from 'styled-components'
import ToWatchItem from '../components/ToWatchItem'
import ToWatchTemplate from '../components/ToWatchTemplate'
import ToWatchHead from '../components/ToWatchHead';
import { useWatchState } from '../toWatchContext'

const ToWatchListBlock = styled.div`
  flex: 1; /* 자신이 차지할 수 있는 영역을 꽉 채움 */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

`



const ToWatchList = () => {
  const towatches = useWatchState()
    return (
          <ToWatchTemplate >
          <ToWatchListBlock>
            <ToWatchHead/>
            {towatches.map(w => <ToWatchItem key={w.id} id={w.id} watched={w.isWatched} title={w.title}/>)}
          </ToWatchListBlock>
        </ToWatchTemplate>
    );
}

export default ToWatchList
