import React from 'react';
import Counter from './Counter/Counter';

const ItemListContainer = () => {
    return (
        <>
            <div className="card text-white bg-danger mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Almohadon Mostaza</div>
                <div className="card-body">
                </div>
                < Counter stock={5} />
                
            </div>
        </>
    );
}

export default ItemListContainer;

