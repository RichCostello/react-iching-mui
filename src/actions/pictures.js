
import { REACT_APP_CLIENT_ID } from '../constants/ActionTypes';


export function getImages(pics) {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': REACT_APP_CLIENT_ID
      }
    }
    return (dispatch) => {
      fetch(`https://api.imgur.com/3/gallery/search/time/all/0?q=${pics}&q_type=png&q_type=album`, data)
        .then(res => res.json())
        .then(images => {
          dispatch({type: 'MOUNT_IMAGES', payload: images.data})
        })
        .catch(error => console.log("Error at getImages", error))
    }
  }
  
  export function searchImages(query) {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': REACT_APP_CLIENT_ID
      }
    }
    return (dispatch) => {
      fetch(`https://api.imgur.com/3/gallery/search/time/all/0?q=${query}&q_type=png&q_type=album`, data)
        .then(res => res.json())
        .then(images => {
          dispatch({type: "SEARCH_IMAGES", payload: images.data })
        })
        .catch(error => console.log("Error at searchImages", error))
    }
  
  }
  
  export function sortImages(value) {
    return (dispatch) => {
      dispatch({type: value})
    }
  }
  
  export function filterImages(filter) {
    return (dispatch) => {
      dispatch({type: "FILTER_IMAGES"})
    }
  }
  