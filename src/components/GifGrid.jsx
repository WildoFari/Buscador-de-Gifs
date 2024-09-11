import { useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import './GifGrid';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    };

    return (
        <>
            <h3 className="category-title">{category}</h3>
            {isLoading && <div className="spinner-container"><div className="spinner"></div></div>}
            <div className="card-grid">
                {images.map(image => (
                    <GifItem
                        key={image.id}
                        {...image}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={favorites.includes(image.id)}
                    />
                ))}
            </div>
        </>
    );
}