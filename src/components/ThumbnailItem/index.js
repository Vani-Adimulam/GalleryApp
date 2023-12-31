// Write your code here.
import './index.css'
import {Component} from 'react'

class Thumbnailitem extends Component {
  renderThumbnails = () => {
    const {photosData, onClickUpdateId, selectedImageId} = this.props
    /* to iterate over each item in photosData we use Map  */
    return photosData.map(eachItem => {
      const {thumbnailUrl, id, thumbnailAltText} = eachItem
      /* to change the image ud in the index.js gallery */
      const onClickThumbnail = () => {
        onClickUpdateId(id)
      }
      const buttonName =
        id === selectedImageId ? 'selected-list-item' : 'list-item'
      return (
        <li key={id} className={buttonName} onClick={onClickThumbnail}>
          <img
            src={thumbnailUrl}
            className="thumbnail-image"
            alt={thumbnailAltText}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-container">
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature Photography by Rahul</p>
        <ul className="thumbnails-list-container">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}

export default Thumbnailitem
