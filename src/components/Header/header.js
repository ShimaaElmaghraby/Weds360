import React, { useState } from "react";
import styled from "styled-components";
import style from "./header.module.css";
import logo from "../../assets/weds360Logo.png";


const NavButton = styled.label`
    display: flex;
    font-family: ;
    font-weight: 400;
    height: 100%;
    cursor: pointer;
    position: relative;
    border-radius: 25px;
    padding-top: 20px;
    &:hover {
        font-weight:600;
    }
`;
const DropDownMenu = styled.div`
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
    color: rgba(55, 65, 81, 1);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background: #fff;
    margin-top: 45px;
    margin-left: -100px;
    list-style: none;
    padding: 12px;
`

function Header() {

    const [dropdownStyle, setDropdownStyle] = useState({ display: 'none' });

    return (
        <div style={{ position: "sticky" }}>
            <div className="">
                <nav className={style.navBarContainer}>
                    <div className={style.navBar}>
                        <span>
                            <img alt="Weds360 Logo" className={style.navBarLogo} src={logo} />
                        </span>
                        <div className={style.navBarMenu}>
                            <NavButton style={{ paddingRight: "10px" }}
                                onMouseEnter={() => { setDropdownStyle({ display: 'block' }); }}
                                onMouseLeave={() => { setDropdownStyle({ display: 'none' }); }}
                            > 360 Planner
                            </NavButton>
                            <DropDownMenu
                                onMouseEnter={() => { setDropdownStyle({ display: 'block' }); }}
                                onMouseLeave={() => { setDropdownStyle({ display: 'none' }); }}
                                style={dropdownStyle} >
                                <a href="/" className={style.dropDownMenuOption}><span >Check List</span></a>
                                <a href="/" className={style.dropDownMenuOption}><span >Budgeter</span></a>
                                <a href="/" className={style.dropDownMenuOption}><span >Guest List</span></a>
                                <a href="/" className={style.dropDownMenuOption}><span >Registry List</span></a>
                            </DropDownMenu>
                            <NavButton style={{ paddingRight: "10px" }}> Her </NavButton>
                            <NavButton style={{ paddingRight: "10px" }}> Him </NavButton>
                            <NavButton style={{ paddingRight: "10px" }}> The Wedding </NavButton>
                            <NavButton style={{ paddingRight: "10px" }}> Vendors </NavButton>
                            <NavButton style={{ paddingRight: "10px" }}> Gallary </NavButton>
                            <NavButton style={{ paddingRight: "10px" }}> Ideas&More </NavButton>
                            <NavButton style={{ paddingRight: "10px" }}> Take a Tour </NavButton>
                        </div>
                        <div className={style.searchBar}>
                            <label className={style.searchBarLabel}>
                                <input type="text" className={style.searchBarInput} placeholder="Search" />
                            </label>
                        </div>
                        <div className=''>
                            <div className={style.loginContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                </svg>
                                <button className={style.languageButton + ' ml-7 absolute flex items-center mx-2 text-sm rounded-full text-gray-600 hover:text-gray-500'} style={{ color: "rgb(2, 77, 76)" }}>
                                    <span className={style.languageText + ' rounded font-semibold text-xs step12'}> ع </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header