import React from 'react'
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useWatchDispatch } from '../toWatchContext';



const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ToWatchItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.watched &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.watched &&
    css`
      color: #ced4da;
    `}
`;


const ToWatchItem = ({id, watched, title}) => {
  const dispatch = useWatchDispatch();
  const onToggle = () => dispatch({type:'TOGGLE', id})
  const onRemove = () => dispatch({type:'REMOVE', id})

    return (
        <ToWatchItemBlock>
        <CheckCircle  watched={watched} onClick={onToggle}>{watched && <MdDone />}</CheckCircle>
        <Text watched={watched}>{title}</Text>
        <Remove onClick={onRemove}>
          <MdDelete />
        </Remove>
      </ToWatchItemBlock>    )
}

export default React.memo(ToWatchItem)
