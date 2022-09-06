import React, { useEffect, useState } from 'react';
import Itemlist from './ItemList';

const ListContainer = () => {
    const [productos, setProducto] = useState([]);

    useEffect(() => {
        const getPokes = async () => {
            const misDatos = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=3&offset=0'
            );

            const response = await misDatos.jason();
            setProducto(response.results);
        };

        getPokes();
    }, []);

    return <Itemlist list={productos} />
};

export default ListContainer;
