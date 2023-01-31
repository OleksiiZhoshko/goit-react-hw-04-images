import Modal from "components/ImageGallery/ImageGalleryItem/Modal/Modal"
import { Component } from "react"

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  hendleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL} = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <li onClick={this.hendleToggleModal} className="ImageGalleryItem">
          <img className="ImageGalleryItem-image" src={webformatURL} alt="img" />
        </li>
        {isModalOpen && <Modal onClose={this.hendleToggleModal} largeImg={largeImageURL} />}
      </>
    );
  }
};

export default ImageGalleryItem