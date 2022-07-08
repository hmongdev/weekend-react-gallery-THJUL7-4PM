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
                <img src="images/goat_small.jpg" width="100px" height="100px" />
            </div>
            <div>
                <button onClick={addLike}>Like</button>
                <div>
                    {likes !== 0
                        ? `${likes} people love this!`
                        : `Nobody likes this :(`}
                </div>
            </div>
        </>
    );
}

export default GalleryItem;
