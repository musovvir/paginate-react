import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Photo from './components/Photos';
// import { paginate } from '../src/utils/paginate'

function App() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [photoPerPage] = useState(20)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=100')
      setPhotos(res.data)
      setLoading(false)
    }

    getPhotos()
  }, [])

  const lastPhotoIndex = currentPage * photoPerPage
  const firstPhotoIndex = lastPhotoIndex - photoPerPage
  const currentPhoto = photos.slice(firstPhotoIndex, lastPhotoIndex)


  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }
  // const photosAll = paginate(photos, currentPage, photoPerPage)
  return (
    <div className="container">
      <h1>Photos</h1>
      <Photo photos={currentPhoto} loading={loading}/>
      <Pagination 
        paginate={paginate}
        totalPhotos={photos.length}
        photoPerPage={photoPerPage}
      />
    </div>
  );
}

export default App;
