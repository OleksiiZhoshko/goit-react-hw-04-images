import Modal from "components/ImageGallery/ImageGalleryItem/Modal/Modal"
import { useState } from "react"

const ImageGalleryItem = ({image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const { webformatURL, tags, largeImageURL } = image;

      return (
      <>
        <li onClick={handleToggleModal} className="ImageGalleryItem">
          <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
        </li>
        {isModalOpen && <Modal onClose={handleToggleModal} largeImg={largeImageURL} />}
      </>
    );
}

export default ImageGalleryItem;