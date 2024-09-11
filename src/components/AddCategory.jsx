import { useState } from 'react';
import './AddCategory'; // Asegúrate de tener este archivo

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} className="search-form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Buscar</button>
        </form>
    );
}