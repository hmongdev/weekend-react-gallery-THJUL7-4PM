import React, { useState, useEffect } from 'react';
import './App.css';

//import
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
    //states
    //galleryList will be an array of objects
    const [galleryList, setGalleryList] = useState([]);

    //useEffect => on refresh/page load run this
    useEffect(() => {
        getGalleryList();
    }, []);

    //GET
    const getGalleryList = () => {
        axios
            .get('/gallery')
            .then((response) => {
                // array of inventory objects saved to state array
                setGalleryList(response.data);
            })
            .catch((error) => {
                alert('GET ERR in App.jsx', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of my Life</h1>
            </header>
            <GalleryList items={galleryList} getGalleryList={getGalleryList} />
        </div>
    );
}

export default App;
