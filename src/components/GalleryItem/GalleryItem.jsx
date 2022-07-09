import React from 'react';
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

    const showDescription = () => {
        console.log(item.description);
    };

    return (
        <>
            <div className="item">
                <img src={item.path} onClick={showDescription} />
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
