import React, { useState, useEffect } from 'react';

const FilmImage = (props) => {

  const token = props.token;
  const id = props.id;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1/image?movieId=${Number(id)}&limit=1&token=${token}`)
    .then(response => response.json())
    .then(data => {
      setImageUrl(data.docs[0].url)
      console.log(data.docs)
    })
    .catch(error => console.log(error));
  })

  return (
    <div>
      <img src={imageUrl} alt='img' />
    </div>
  );
};

export default FilmImage;