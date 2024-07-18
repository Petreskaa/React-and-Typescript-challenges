import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { ArtisItem } from './components/ArtistItem';
import { ArtistPage } from './components/ArtistPage';
import { AlbumPage } from './components/AlbumPage';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className="Wrapper">
          <Routes>
            <Route path="/" element={<ArtisItem />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/artist/:id/:albumId" element={<AlbumPage />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
