import React, { createContext, useReducer } from 'react'

export const ACTION_TYPE = {
  CHANGE_SELECTED_VIDEO: 'CHANGE_SELECTED_VIDEO',
  UPDATE_VIDEO_LIST: 'UPDATE_VIDEO_LIST'
}

const MainContext = createContext()

const initialState = {
  selectedVideoId: null,
  selectedVideoSrc: null,
  videoList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideoId: action.payload.selectedVideo.id,
        selectedVideoSrc: action.payload.selectedVideo.video
      }

    case ACTION_TYPE.UPDATE_VIDEO_LIST:
      return {
        ...state,
        videoList: action.payload.videoList
      }

    default:
      return state
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  )
}

export const ContextConsumer = MainContext.Consumer

export default MainContext
