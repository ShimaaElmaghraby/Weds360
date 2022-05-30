import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './allCategories.module.css';
import Card from "../Card/card";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

function AllCategories() {

    const [imageName, setImageName] = useState([]);
    const [filteredName, setFilteredName] = useState([]);
    const [showedName, setShowedName] = useState([]);

    const filterCategories = (index) => {
        var selectedCategory = index;
        setFilteredName(imageName);
        if (
            selectedCategory === 'Suits' ||
            selectedCategory === 'Health' ||
            selectedCategory === 'Fitness' ||
            selectedCategory === 'Rings' ||
            selectedCategory === 'Makeup Artists'
        ) {
           setShowedName(filteredName.filter((category) => category.name === selectedCategory));
            return showedName;
        } else {
            setShowedName(imageName)
            return showedName;
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then(res => {
                setImageName(res.data);
                setShowedName(res.data);
                setFilteredName(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className={style.mainContainer}>
            <div className={style.searchSection}>
                <SearchBar filterCategories={filterCategories} />
            </div>
            <div className={style.contentSection}>
                <div className={style.column} onClick={useEffect}>
                    {showedName.map(post =>
                        <Link to={`/categories/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card key={post.id} imageName={post.name} imageSrc={post.imageUrl} imageId={post.id}></Card>
                        </Link>)}
                </div>
            </div>
        </div>
    )
}
export default AllCategories