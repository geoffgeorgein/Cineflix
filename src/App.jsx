import "./App.css";
import Row from "./components/row";

const API_KEY = "93fc46dcdcedb28efc872534b7b807bf";
// 93fc46dcdcedb28efc872534b7b807bf



const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
console.log(requests.fetchTrending);
function App() {
  return (
    <>
      <div className="title">Cine Flix</div>
      <Row title="Trending Now " fetchUrl={requests?.fetchTrending} isLargeRow />

      <Row title="Top Rated " fetchUrl={requests?.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies "
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />

      <Row title="Horror " fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies "
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries "
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </>
  );
}

export default App;
