import Homepage from "./pages/HomePage/homepage"
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
    <Router>
   <Route exact path="/" component={Homepage} />
    </Router>
    </div>
  );
}

export default App;
