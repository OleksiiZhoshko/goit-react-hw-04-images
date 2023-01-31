import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import fetchImages from "servise/fetchImages";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

export class App extends Component {
  state = {
    qwery: '',
    images: [],
    page: 1,
    isLoading: false,
    totalImg:0,
  }
  
  hendleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1, isLoading:true }))
  };

  componentDidUpdate(_, prevState) { 
    const { qwery, page } = this.state;
    if (prevState.qwery !== qwery || prevState.page !== page) {
      fetchImages(qwery, page).then(resp => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
          totalImg: resp.totalHits
        }))
      }).finally(() => {
          this.setState({ isLoading: false})
        })
    };
  };
  
  hendleSubmit = qwery => {
    this.setState({ qwery, isLoading: true })
  };
  
  renderButtonOrLoader = () => {
    return  this.state.isLoading ? (<Loader />
      ) : (
          this.state.images.length !== 0 &&
          this.state.images.length < this.state.totalImg &&
          <Button onClick={this.hendleLoadMore} />
      )
  }

  render() {
  return (
    <div className="App">
      <Searchbar onSubmit={this.hendleSubmit}/>
      <ImageGallery images={this.state.images} />
     {this.renderButtonOrLoader()}
    </div>
      )
      }
};
