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
    case "FILTER_IMAGES":
      const mature = !state.mature
      if (mature) {
        filtered = Object.assign([], state.images)
      } else {
        filtered = filtered.filter(image => image.nsfw !== true)
      }
      return {...state, mature, filtered}
    case "MOST_VIEWS":
      filtered.sort(_compareValues('views', 'desc'))
      return {...state, currentSort: action.type, filtered}
    case "MOST_UPVOTES":
      filtered.sort(_compareValues('ups', 'desc'))
      return {...state, currentSort: action.type, filtered}
    case "MOST_FAV":
      filtered.sort(_compareValues('favorite_count', 'desc'))
      return {...state, currentSort: action.type, filtered}
    case "LATEST":
      filtered.sort(_compareValues('datetime', 'desc'))
      return {...state, currentSort: action.type, filtered}
    case "ADD_COMMENT":
      filtered.map(image => {
        if (image.id === action.picId) {
          if (image.comments) {
            let length = image.comments.length
            image.comments.push({[length]:action.payload})
          } else {
            image.comments = []
            image.comments.push({"0":action.payload})
          }
          return image
        }
        return image
      })
      return {...state, filtered}
    case "DELETE_COMMENT":
      let currentImage = filtered.find(image => image.id === action.picId)
      currentImage.comments.splice(action.idx, 1)
      return {...state, filtered}
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
      (order == 'desc') ? (comparison * -1) : comparison
    )
  }
}
