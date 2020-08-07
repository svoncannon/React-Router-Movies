import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Router>
    <Link to= '/'>
    <div className="home-button">Home</div>
    </Link>
    </Router>
  </div>
);

export default SavedList;
