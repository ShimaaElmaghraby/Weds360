import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import Card from "../Card/card";


function CategoryList() {

    const { id } = useParams();
    const [categoryImage, setCategoryImage] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:3000/images', {
            params: {
                categoryId: id
            }
        })
            .then(function (response) {
                setCategoryImage(response.data);
            })
    }, [])



    return (
        <>
            <div>
                {categoryImage.map(category =>
                    <Link to={`/image/${category.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Card key={category.id} imageName={category.name} imageSrc={category.imageUrl}></Card>
                    </Link>
                )}
            </div>
        </>

    )
}
export default CategoryList;