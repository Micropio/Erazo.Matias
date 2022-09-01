import React, { useEffect, useState } from 'react';

const ListContainer = () => {
    const [producto, setproducto] = useState([]);

    useEffect(() => {
        const getPokes = async () => {
            const misDatos = await fetch(
                https://pokeapi.co/api/v2/pokemon?limit=3&offset=0
            );

            console.log(misDatos);
        }


    }, []);
},

export default ListContainer;
