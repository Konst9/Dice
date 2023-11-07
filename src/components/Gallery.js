import "./gallery.css";
import { useState } from 'react';

export default function Gallery({images}) {
const [pos, setPos] = useState(0);

const nextImage = images[pos];

const handleRandomImg = () => {
  const randomPos = Math.floor(Math.random() * images.length);
  setPos(randomPos);
}

  
  return (
    <div className='Gallery'>
      <div className='Gallery__list'>
        {nextImage ? (
          <img
            className='Gallery__photo'
            src={nextImage}
            alt='img'
          />
        ) : (
          <div className='Gallery__photo' />
        )}
      </div>
      <div className='Gallery__buttons'>
        <button className="btn" onClick={handleRandomImg}>Бросить кубик</button>
      </div>
    </div>
  )
}