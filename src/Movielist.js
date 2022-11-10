import React, { useContext } from 'react'
import { Moviesprovider } from './Moviecontext'

function Movielist() {


    const obj = useContext(Moviesprovider)

    const movieslist = obj.movies.map((movie) => {
        return <div style={{ margin: "2px", backgroundColor: "burlywood" }}>
            <h1>{movie.moviename}</h1>
            <p>Directed by {movie.director}</p>
        </div>
    })

    return (
        <div >
            <h1 style={{ backgroundColor: "teal", color: "white" }}>Movies List</h1>
            <div >
                {movieslist}

            </div>


        </div>
    )
}

export default Movielist