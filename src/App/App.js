
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';
import Track from '../Track/Track';
import SaveButton from '../SaveButton/SaveButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist />
        <Track />
        <SaveButton />
      </header>
    </div>
  );
}

export default App;
