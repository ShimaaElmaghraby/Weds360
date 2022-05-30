import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './allPhotos.module.css';
import Card from "../Card/card";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

function AllPhotos() {

    const [imageName, setImageName] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/images")
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
                        <Link to={`/image/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card key={post.id} imageName={post.name} imageSrc={post.imageUrl}></Card>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
export default AllPhotos