import React, { createContext, useContext, useReducer, useRef } from 'react'
import { towatchMovieData } from './towatchMovieData'

function towatchReducer(state,action){
    switch (action.type) {
        case 'ADD':
            return state.concat(action.todo)
        case 'TOGGLE':
            return state.map(movie => movie.id === action.id? {...movie, isWatched: !movie.isWatched} : movie)    
        case 'REMOVE':
            return state.filter(movie => movie.id !==action.id)
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    }
}

const ToWatchStateContext = createContext();
const ToWatchDispatchContext = createContext()
const ToWatchNextIdContext = createContext()

export function ToWatchProvider({children}) {
    const [state, dispatch] = useReducer(towatchReducer, towatchMovieData)
    const nextId = useRef(5)

    return (
        <ToWatchStateContext.Provider value={state}>
            <ToWatchDispatchContext.Provider value={dispatch}>
                <ToWatchNextIdContext.Provider value={nextId}>
                {children}
                </ToWatchNextIdContext.Provider>
            </ToWatchDispatchContext.Provider>
        </ToWatchStateContext.Provider>
    )
}


export function useWatchState() {
    const context = useContext(ToWatchStateContext);
    if (!context) {
      throw new Error('Cannot find ToWatchProvider');
    }
    return context;
  }
  
  export function useWatchDispatch() {
    const context = useContext(ToWatchDispatchContext);
    if (!context) {
      throw new Error('Cannot find ToWatchProvider');
    }
    return context;
  }

export function useWatchNextId(){
    const context = useContext(ToWatchNextIdContext)
    if (!context) {
        throw new Error('Cannot find ToWatchProvider');
      }
      return context;
  }