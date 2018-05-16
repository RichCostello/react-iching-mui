export function addComment(picId, comment) {
    return (dispatch) => {
      dispatch({type: "ADD_COMMENT", picId, payload: comment})
    }
  }
  
  export function deleteComment(picId, idx) {
    return (dispatch) => {
      dispatch({type: "DELETE_COMMENT", picId, idx})
    }
  }
  