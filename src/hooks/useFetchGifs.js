import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) =>{


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=> {
        getGifs( category ).then(img => {
            console.log('imgs',img);
            setImages(img);
            setIsLoading(false);
        });
    },[] );

    return {
        images,
        isLoading
    }
}