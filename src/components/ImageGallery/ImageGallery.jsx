import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </ul>
  );
};

export default ImageGallery;
