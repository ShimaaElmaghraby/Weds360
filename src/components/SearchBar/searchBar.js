import React from 'react';
import style from './searchBar.module.css';
import styled from "styled-components";

function SearchBar() {

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

    return (
        <>
            <form>
                <label className={style.searchBarLabel}>
                    <SearchInput
                        type="text"
                        name="search"
                        placeholder="Search"
                    />
                </label>
                <div>
                    <Button>
                        Search
                    </Button>
                    <Button>
                        Clear Search
                    </Button>
                </div>
            </form>
        </>
    )
}
export default SearchBar