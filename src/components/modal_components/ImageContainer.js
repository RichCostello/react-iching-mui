import React from 'react'
import ImageCard from './ImageCard'
import ContentLoader from 'react-content-loader'


class ImageContainer extends React.Component {
 
  render() {
    const { filtered } = this.props;
    const allImages = filtered.map((pic) => {
        return <ImageCard key={pic.id} pic={pic} url={pic.images[0]["link"]} />
    })
    return (
  
      <div className="image-wrapper">
      

        {allImages.length ? allImages: <h2>No memes are set for this query tag</h2>}
      </div>
    )
  }
}

export default ImageContainer
