import React, { useState } from 'react';

function GalleryItem() {
    //states
    let [likes, setLikes] = useState(0);

    //likes counter
    const addLike = () => {
        //increment logic
        setLikes(likes + 1);
    };

    return (
        <>
            <div>
                <img src="images/goat_small.jpg" />
            </div>
            <div>
                <button onClick={addLike}>Like</button>
                <p>{likes} people love this!</p>
            </div>
        </>
    );
}

export default GalleryItem;
