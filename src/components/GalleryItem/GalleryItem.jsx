import React, { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ item, getGalleryList }) {
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
                alert('GET ERR in App.jsx', error);
            });
    };

    return (
        <>
            <div className="item">
                <img src={item.path} />
                <section>
                    <button onClick={addLike}>Like</button>
                </section>
                <section>
                    {item.likes !== 0
                        ? `${item.likes} people love this!`
                        : `Nobody likes this :(`}
                </section>
            </div>
        </>
    );
}

export default GalleryItem;
