// Change the name of imageUrls to allBeast in every instance.
// Modal 


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import FilterForm from './components/FilterForm.jsx'; 
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import imageUrls from './data.json'; 
import Container from 'react-bootstrap/Container';
function App() {
  const [show, setShow] = React.useState(false);
  const [selectedBeast, setSelectedBeast] = React.useState({});
  const [filteredHorns, setFilteredHorns] = React.useState(imageUrls); 
  function dispayModal(title) {
    const selected = imageUrls.find(beast => beast.title === title); 
    console.log(selected);
    setSelectedBeast(selected);
    setShow(true);
  }
  function handleCloseModal() {
    setShow(false);
  }
  function handleFilter(event) { 
    
    const numOfHorns = parseInt(event.target.value); 
    let filterHornInstance = filteredHorns; 
    if (numOfHorns) {
      filterHornInstance = imageUrls.filter(beast => beast.horns === numOfHorns);
      
      console.log(filterHornInstance);
    }     setFilteredHorns(filterHornInstance);
  }
  return (
    <Container>
      <Header title="Gallery of Horns" />
      <FilterForm handleFilter={handleFilter} />
      <Gallery message="Gallery of Horns" imageUrls={imageUrls} displayModal={dispayModal} />
      {selectedBeast && <SelectedBeast
        show={show}
        selectedBeast={selectedBeast}
        handleCloseModal={handleCloseModal}
        imageUrls={imageUrls}
      />}
      <Footer copyright="2023 Myyela Isaac" />
    </Container>
  );
}
export default App;