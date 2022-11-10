import React, { useContext, useState } from 'react'
import { Moviesprovider } from './Moviecontext'

function Addmovie() {
    const [moviename, setmoviename] = useState('')
    const [director, setdirector] = useState('')

    const obj = useContext(Moviesprovider)


    function add() {
        var movie = {
            moviename: moviename,
            director: director
        }
        obj.addmovie(movie)
    }
    return (
        <div>
            <h1><hr />Add Movie<hr /></h1>
            <input type="text" placeholder="Movie Name" onChange={(e) => { setmoviename(e.target.value) }} /><br />
            <input type="text" placeholder="Director Name" onChange={(e) => { setdirector(e.target.value) }} /><br />
            <button onClick={add}  >ADD MOVIE</button><br />
        </div>
    )
}

export default Addmovie