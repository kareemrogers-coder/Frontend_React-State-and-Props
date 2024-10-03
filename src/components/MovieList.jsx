import React, {useState} from 'react'
import './style.css'

function list() {
    const [movies, setMovies] = useState([
        { title: "The Dark Knight", description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.", 
            showDescription: false, genre: "Action"}, 
        { title: "Forrest Gump", description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.", 
            showDescription: false, genre: "Drama"}, 
        { title: "Interstellar", description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", 
            showDescription: false, genre: "Sci-fi"},
        { title: "Saw", description: "Two men awaken to find themselves on the opposite sides of a dead body, each with specific instructions to kill the other or face consequences. These two are the latest victims of the Jigsaw Killer.", 
            showDescription: false, genre: "Horror"},
        { title: "City of Gold", description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.", 
            showDescription: false, genre: "Drama"}]);

        const [filter, setFilter] = useState("all");
       
        const toggleDescription = (index) => {
          const updatedList = [...movies];
          updatedList[index].showDescription = !updatedList[index].showDescription;
          setMovies(updatedList);}

          const removeMovie = (index) => {
            const updatedList = [...movies];
            updatedList.splice(index, 1);
            setMovies(updatedList);
        }        



    return (  

        <div>

            <h1 className='title'>Movies List</h1>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Action">Action</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
            </select>
            <ul>
                {movies.filter((movie) => filter === "all" || movie.genre === filter).map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <button onClick={() => toggleDescription(index)}>{movie.showDescription ? "Hide Description" : "Show Description"}</button>
                        {movie.showDescription && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default list