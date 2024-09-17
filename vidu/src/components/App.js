import './../css/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './../components/Navigation/Navigation.js';
import DieuHuongURL from '../router/DieuHuongURL.js';
import Footer from './../components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
          <DieuHuongURL/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
