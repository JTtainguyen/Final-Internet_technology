"use client";

import './movie.css'

import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';

const mockMovies = [{
    id: 1,
    title: 'Title one',
    category_name: 'Category 1'
}, {
    id: 2,
    title: 'Title two',
    category_name: 'Category 2'
}];

interface Movie {
    id: string;
    fields: {
        title: string;
        category_name: string;
        image_link: string;
    }
}

function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        fetch('/movies/api')
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        })
        .catch(() => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <main className="mt-6">
            <h1 className="header">Movies</h1>
            {isError ? <p>Error!</p> : null}
            {isLoading && <p>Loading...</p>}
            <div className='movie-list'>
                {movies && movies.map((elem) => {
                    return (
                        <div key={elem.id} className='movie'>
                            <h2 className='movie-title'>
                                {elem.fields.title} 
                            </h2>
                            <p className='movie-type'>
                              {elem.fields.category_name}
                            </p>
                            <img src={elem.fields.image_link} alt=''/> 
                        </div>
                    )
                })}
            </div>
        </main>
    );
}

export default Movies;
