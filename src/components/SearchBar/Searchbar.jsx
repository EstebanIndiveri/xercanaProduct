import React, { Fragment } from 'react';
import lupa from '../../assets/lupa.svg';
import './Searchbar.css';

const SearchBar = ({setSearch,handleSearch}) => {
    const handleEnter=(e)=>{
        if(e.key === "Enter"){
            handleSearch();
        }
    }
    return ( 
        <Fragment>
            <div className="searchbar_container">
                <input
                type="text"
                className="searchbar_contain"
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={e=>handleEnter(e)}
                />
                <div className="searchbar_containerImage">
                <button className="searchbar_btn" onClick={handleSearch} ><img className="searchbar_image" src={lupa} alt=""/></button>
            </div>
            </div>
        </Fragment>
     );
}
 
export default SearchBar;