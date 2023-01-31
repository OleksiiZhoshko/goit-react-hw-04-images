import { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import fetchImages from "servise/fetchImages";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

export const App = () => {
const [query, setQuery] = useState('');
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [totalImg, setTotalImg] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchImages(query, page);
        if (resp) {
          if (!resp.totalHits) {
            throw new Error('Bad query');
          }
          setImages(prevImages =>
            page === 1 ? [...resp.hits] : [...prevImages, ...resp.hits]
          );
          setTotalImg(resp.totalHits);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchData();
    }
  }, [page, query]);

const hendleLoadMore =()=> {
  setPage(prevPage=>(prevPage+1))
};

  const handleSubmit = query => {
    setQuery(query);
    setIsLoading(true);
    setPage(1);
  };

   const renderButtonOrLoader = () => {
    return  isLoading ? (<Loader />
      ) : (
          images.length !== 0 &&
          images.length < totalImg &&
          <Button onClick={hendleLoadMore} />
      )
  }

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit}/>
      <ImageGallery images={images} />
     {renderButtonOrLoader()}
    </div>
      )
};