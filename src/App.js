
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ListCharacter } from "./ListCharacter/ListCharacter";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListCharacter/>} />
      </Routes>
      {/* <Route path="/detail">
          <DetailPersonaje />
        </Route> */}
    </Router>
  );
}

export default App;
