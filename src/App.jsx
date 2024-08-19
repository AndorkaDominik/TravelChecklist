// src/App.js
import React from 'react';
import Checklist from './components/Checklist';

import { data } from './constants/data';

const App = () => {
    return (
        <div className="App">
            <h1><span>Utazási ellenőrzőlista</span></h1>
            <div className='checklist-container'>
            {Object.entries(data).map(([category, items]) => (
                <Checklist key={category} items={items} category={category} />
            ))}
            </div>
        </div>
    );
}

export default App;
