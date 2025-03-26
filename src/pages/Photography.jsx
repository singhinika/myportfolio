import { useState } from 'react';
import '../styles/Photography.css';

function Photography() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    all: 'All Photos',
    city: 'City',
    landscape: 'Landscape',
    event: 'Event'
  };

  const photos = [
    // City Photography
    {
      id: 1,
      src: '/images/photography/city/GettyImages-1202757463-d946b2abbd374fffbe6ea644dfab06b6.jpg',
      category: 'city',
      title: 'Urban Cityscape'
    },
    {
      id: 2,
      src: '/images/photography/city/Group 62.svg',
      category: 'city',
      title: 'City Design'
    },
    // Landscape Photography
    {
      id: 3,
      src: '/images/photography/landscape/IMG_3669.PNG',
      category: 'landscape',
      title: 'Landscape View'
    },
    {
      id: 4,
      src: '/images/photography/landscape/IMG_8934.JPG',
      category: 'landscape',
      title: 'Natural Beauty'
    },
    // Event Photography
    {
      id: 5,
      src: '/images/photography/event/aa509689-7174-4f9d-8662-02d2d420d531..JPG',
      category: 'event',
      title: 'Event Moment'
    },
    {
      id: 6,
      src: '/images/photography/event/cat.png',
      category: 'event',
      title: 'Pet Photography'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="photography">
      <h1 className="section-title">Photography</h1>
      
      <div className="category-filters">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div 
            key={photo.id} 
            className={`photo-item span-${Math.floor(Math.random() * 2) + 1}`}
          >
            <img src={photo.src} alt={photo.title} />
            <div className="photo-overlay">
              <h3>{photo.title}</h3>
              <span className="category-tag">{categories[photo.category]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;
