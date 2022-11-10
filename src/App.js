import Addmovie from './Addmovie';
import './App.css';
import Moviecontext from './Moviecontext';
import Movielist from './Movielist';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className="App">
        <h1 style={{ color: "purple" }}><u>My Movies WatchList</u></h1>

        <Moviecontext>
          <Navbar />
          <Addmovie />
          <Movielist />
        </Moviecontext>
        <footer style={{ display: "inline-flex", margin: "0" }}>
          <div>
            copyright&#169;
          </div>
          <div>
            Author:Seamoon Pandey
          </div>
          <div>
            <a href="mailto:hackedasocial@gmail.com" target="_blank" rel="noreferrer">hackedasocial@gmail.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
