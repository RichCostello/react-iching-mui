export default function rootReducer(state = {
  images: [],
  filtered: [],
  currentSort: 'LATEST',
  mature: false
}, action) {
  let filtered = Object.assign([], state.filtered)

  switch (action.type) {
    case "MOUNT_IMAGES":
      filtered = action.payload.filter(image => image.nsfw !== true)
      return {...state, images: action.payload, filtered}
    case "SEARCH_IMAGES":
      if (state.mature) {
        filtered = action.payload
      } else {
        filtered = action.payload.filter(image => image.nsfw !== true)
      }
      return {...state, images: action.payload, filtered}
    
    default:
      return state
  }
}

function _compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {return 0}

    const varA = (typeof(a[key]) === 'string') ? a[key].toUpperCase() : a[key]
    const varB = (typeof(b[key]) === 'string') ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    )
  }
}
