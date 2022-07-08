import React, { useState, useEffect } from 'react';
import './App.css';

//import component
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
    //states
    const [galleryList, setGalleryList] = useState([]);

    //useEffect
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

    //PUT

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <p>Gallery goes here</p>
            <GalleryList galleryList={galleryList} />
        </div>
    );
}

export default App;
