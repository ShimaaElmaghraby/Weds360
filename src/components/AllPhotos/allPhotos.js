import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './allPhotos.module.css';
import Card from "../Card/card";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";
import Pagination from "../Pagination/pagination";

function AllPhotos() {

    const [imageName, setImageName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(6);

    const indexOfLastPost = currentPage * imagesPerPage;
    const indexOfFirstPost = indexOfLastPost - imagesPerPage;
    const currentImages = imageName.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                    {currentImages.map(post =>
                        <Link to={`/image/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card key={post.id} imageName={post.name} imageSrc={post.imageUrl}></Card>
                        </Link>
                    )}
                </div>
                <Pagination imagesPerPage={imagesPerPage} totalImages={imageName.length} paginate={paginate} />
            </div>

        </div>
    )
}
export default AllPhotos