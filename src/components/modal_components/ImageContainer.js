import React from 'react'
import ImageCard from './ImageCard'



const ImageContainer = ({ filtered }) => {

  const allImages = filtered.map((pic) => {
    if (pic.images[0]) {
      return <ImageCard key={pic.id} pic={pic} url={pic.images[0]["link"]} />
    } else {
      return <ImageCard key={pic.id} pic={pic} url={pic.link} />
    }
  })
  return (
    <div className="image-wrapper">
      {allImages}
      {allImages.length ? allImages: <h2>No memes are set for this query tag</h2>}
    </div>
  )
}

export default ImageContainer
