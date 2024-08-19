import React, { useState, useEffect } from 'react';
import "./Checklist.css"

import Bag from '../assets/icons/bag.svg'
import Beach from '../assets/icons/beach.svg'
import Bed from '../assets/icons/bed.svg'
import Car from '../assets/icons/car.svg'
import Clothing from '../assets/icons/clothing.svg'
import Health from '../assets/icons/health.svg'
import Id from '../assets/icons/id.svg'
import Mountain from '../assets/icons/mountain.svg'
import Rocket from '../assets/icons/rocket.svg'

const Checklist = ({ items, category }) => {
    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem(category);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(category, JSON.stringify(checkedItems));
    }, [checkedItems, category]);

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const allChecked = items.every(item => checkedItems[item]);

    let content;

    if (category === 'Dokumentumok') {
        content = <img src={Id} />;
    } else if (category === 'Tengerparti nyaralás'){
        content = <img src={Beach} />;
    } else if (category === 'Hegyi kirándulás'){
        content = <img src={Mountain} />;
    } else if (category === 'Ruha és lábbelik'){
        content = <img src={Clothing} />;
    } else if (category === 'Auto felszerelés'){
        content = <img src={Car} />;
    } else if (category === 'Utazási alapok'){
        content = <img src={Rocket} />;
    } else if (category === 'Egészség és higiénia'){
        content = <img src={Health} />;
    } else if (category === 'Hasznos dolgok'){
        content = <img src={Bag} />;
    } else if (category === 'Önellátó'){
        content = <img src={Bed} />;
    } else{
        content = <p>No Img Added</p>
    }

    return (
        <div className={allChecked ? 'all-checked checklist' : 'checklist'}>
            <div className="img-container">
                {content}
            </div>
            <h2>{category}</h2>
            <ul>
                {items.map(item => (
                    <li key={item}>
                        <label>
                            <input
                                type="checkbox"
                                name={item}
                                checked={checkedItems[item] || false}
                                onChange={handleChange}
                            />
                            {item}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checklist;
