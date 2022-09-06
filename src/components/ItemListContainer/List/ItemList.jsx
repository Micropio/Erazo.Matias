import React from 'react';
import Item from './Item';

const ItemList = ({ list }) => {
    return (
    <ul>
        {list.map((producto) => (
            <Item producto={producto}/>
            ))}
    </ul>
    );
};

export default ItemList;
