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
    </div>
  )
}

export default ImageContainer
