import React, { useState, useEffect } from 'react';
import style from './photoDetails.module.css';
import {useParams} from 'react-router-dom';


function PhotoDetails ()  {
    useEffect(() => {

        fetch(url, { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setImage(data)
            })
            .catch(err => {
                console.log(err)
            })
    
    },[])
    let [image, setImage] = useState({});
    const { id } = useParams();
    let url = ` http://localhost:3000/images/${(Number(id))}`;
    console.log("photodetailsId"+id);
    if (image.id){
        return (
                <div className={style.mainContainer}>
                    <div className={style.imageSection}>
                        <img className={style.photo} src={require(`../../assets/images/${image.imageUrl}`)} alt=''/>
                    </div>
                    <div className={style.contentSection}>
                        <h1 className={style.photoName}>{image.name}</h1>
                        <span className={style.photoDescrioption}>{image.description}</span>
                    </div>                     
                </div>
            
        )
    }

    return <p>
        No information available
    </p>
}    

export default PhotoDetails;