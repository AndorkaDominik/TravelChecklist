// src/App.js
import React from 'react';
import Checklist from './components/Checklist';

import { data } from './constants/data';

const App = () => {
    function handleClick() {
        Object.keys(data).forEach(category => {
            localStorage.removeItem(category);
        });
        window.location.reload();
    }

    return (
        <div className="App">
            <h1><span>Utazási ellenőrzőlista</span></h1>
            <button className='delete cta' style={{display: "flex", justifySelf: "center"}} onClick={handleClick}>Új nyaralás</button>
            <div className='checklist-container'>
            {Object.entries(data).map(([category, items]) => (
                <Checklist key={category} items={items} category={category} />
            ))}
            </div>
        </div>
    );
}

export default App;
