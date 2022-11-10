import React, { useContext } from 'react'
import { Moviesprovider } from './Moviecontext'

function Navbar() {
    const obj = useContext(Moviesprovider)
    return (
        <div style={{ backgroundColor: "pink" }}>
            <h1>
                Total Movies Count : {obj.movies.length}
            </h1>

        </div>
    )
}

export default Navbar