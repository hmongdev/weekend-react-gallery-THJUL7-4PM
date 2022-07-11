import React, { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ item, getGalleryList }) {
    //1. states => conditional rendering
    const [description, setDescription] = useState(true); //default

    //PUT
    const addLike = () => {
        axios
            .put(`/gallery/like/${item.id}`)
            .then((response) => {
                // array of inventory objects saved to state array
                //dont need res.data
                getGalleryList();
            })
            .catch((error) => {
                alert('GET ERR in GalleryItem.jsx', error);
            });
    };

    const showDescription = () => {
        //2. hidden state
        setDescription(!description); // => false
    };

    return (
        <>
            <div className="item">
                <div className="item-image" onClick={showDescription}>
                    {description ? (
                        <img src={item.path} />
                    ) : (
                        <p>{item.description}</p>
                    )}
                </div>

                <div className="item-text">
                    {item.likes !== 0
                        ? `${item.likes} people love this!`
                        : `Nobody likes this :(`}
                </div>

                <div className="item-button">
                    <button onClick={addLike}>👍 Like</button>
                </div>
            </div>
        </>
    );
}

export default GalleryItem;
