import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './components/Routes';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
