import React, { useState, useEffect } from 'react';
import FilmImage from './FilmImage';

const Game = (props) => {
  const [filmName1, setFilmName1] = useState('');
  const [filmName2, setFilmName2] = useState('');
  const [filmName3, setFilmName3] = useState('');
  const [filmName4, setFilmName4] = useState('');

  const [id, setId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const token = props.token;

  // useEffect(() => {
  //   fetch(`https://api.kinopoisk.dev/v1/movie/random?token=${token}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setFilmName1(data.name)
  //       console.log(data.id)
  //       setId(data.id)
  //     });

  //   fetch(`https://api.kinopoisk.dev/v1/movie/random?token=${token}`)
  //     .then(response => response.json())
  //     .then(data => setFilmName2(data.name));

  //   fetch(`https://api.kinopoisk.dev/v1/movie/random?token=${token}`)
  //     .then(response => response.json())
  //     .then(data => setFilmName3(data.name));

  //   fetch(`https://api.kinopoisk.dev/v1/movie/random?token=${token}`)
  //     .then(response => response.json())
  //     .then(data => setFilmName4(data.name));

  //   // fetch(`https://api.kinopoisk.dev/v1/image?movieId=${Number(id)}&limit=1&token=${token}`)
  //   //   .then(response => response.json())
  //   //   .then(data => setImageUrl(data.docs[0].url))
  //   //   .catch(error => console.log(error));
  // }, []);

  return (
    <div>
      <img src={imageUrl} alt='img'/>
      <FilmImage token={token} id={666}/>
      <p>{filmName1}</p>
      <p>{filmName2}</p>
      <p>{filmName3}</p>
      <p>{filmName4}</p>
    </div>
  );
};

export default Game;