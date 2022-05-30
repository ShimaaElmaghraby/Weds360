import React from 'react';
import style from './searchBar.module.css';
import styled from "styled-components";

const SearchInput = styled.input`
    
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 16px;
    background-color: white;
    padding: 10px 30px;
    color: rgba(17, 24, 39, 1);
    border: 2px solid rgba(209, 213, 219, 1);
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    @media (max-width:1280px){
        width: 100%;
    }

`

const Button = styled.button`
    color: white;
    display: block;
    background-color: black;
    cursor: pointer;
    padding: 10px 30px;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: .875rem;
    text-align: center;
    margin-top: 25px;
    width: 82%;
    &:hover {
        font-weight:900;
    }
    @media (max-width:480px){
        padding:10px 10px;
    }
    @media (max-width:375px){
        padding:10px 0px;
    }
}`

function SearchBar({filterCategories} ) {
 
    function getSearchWord () {
        var searchWord= document.getElementById('searchInput').value;
        var newWord = searchWord.charAt(0).toUpperCase() + searchWord.slice(1).toLowerCase();
        filterCategories(newWord)
    }

    function clearSearch (){
        filterCategories("");
        document.getElementById('searchInput').value = '';
    }

    return (
        <>
            <form>
                <label className={style.searchBarLabel}>
                    <SearchInput
                        type="text"
                        name="search"
                        placeholder="Search"
                        id='searchInput'
                    />
                </label>
                <div>
                    <Button type='button' onClick={getSearchWord}>
                        Search
                    </Button>
                    <Button type='button' onClick={clearSearch}>
                        Clear Search
                    </Button>
                </div>
            </form>
        </>
    )
}
export default SearchBar