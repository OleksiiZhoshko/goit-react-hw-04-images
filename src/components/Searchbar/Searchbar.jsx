export const Searchbar =({onSubmit})=>{

  const hendleSubmit = e => {
    e.preventDefault()    
  onSubmit(e.currentTarget.elements.qwery.value)
  }
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={hendleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name='qwery'
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

export default Searchbar;
