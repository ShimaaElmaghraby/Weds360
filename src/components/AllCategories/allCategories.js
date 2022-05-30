import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './allCategories.module.css';
import Card from "../Card/card";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

function AllCategories() {

    const [imageName, setImageName] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then(res => {
                setImageName(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className={style.mainContainer}>
            <div className={style.searchSection}>
                <SearchBar />
            </div>
            <div className={style.contentSection}>
                <div className={style.column}>
                    {imageName.map(post =>
                        <Link to={`/categories/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card key={post.id} imageName={post.name} imageSrc={post.imageUrl} imageId={post.id}></Card>
                        </Link>)}
                </div>
            </div>
        </div>
    )
}
export default AllCategories