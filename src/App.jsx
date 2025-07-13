import Api from "./API/Api.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./supports/movieDetail.jsx";


function App() {
  return(<>
    <Routes basename="/movie-web">
        <Route path="/" element={<Api/>}/>
        
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        
        <Route path="*" element={<h1>Page Not Found</h1>}/>
        
    </Routes>
  </>);
}

export default App
