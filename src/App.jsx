// Change the name of imageUrls to allBeast in every instance.
//
import React, { useState } from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/footer'
import SelectedBeast from './components/SelectedBeast'
import imageUrls from './data.json';
import Container from 'react-bootstrap/Container';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);
  function displayasModal(name) {

    const finalBeast = imageUrls.find(image => image.title === name);
    setSelectedBeast(finalBeast);
    setDisplayModal(true);
  }
  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <Container>
      <Header title="Gallery of Horns" />
      <Gallery message="Gallery of Horns" displayasModal={displayModal} imageUrls={imageUrls} />
      <SelectedBeast
        selectedBeast={selectedBeast}
        show={displayasModal}
        handleClose={handleClose}
      />

      <Footer copyright="" />
    </Container>
  );
}

export default App;






Horned beasts 

import Image from "react-bootstrap/Image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function HornedBeast(props) {
    const [status, setStatus] = useState("");
    const [favoriteCount, setFavoriteCount] = useState(0);

    function handleClick() {
        if (status === "like") {
            
        
            setFavoriteCount(favoriteCount + 1);
        }
props.displayasModal(props.image_url.title);
    }


    
    return (
        <div onClick={handleClick}>
            <Image src={props.image_url.image_url} alt="Horned Beast" rounded fluid></Image>
            <h3>{status}{""}
                <span>
                    <FaHeart /> {favoriteCount}
                </span>
            </h3>
        </div>

    )
}
