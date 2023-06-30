
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" 
            element={
              <>
                <Header />
                <Home/>
              </>}
          />

          <Route path="/projects" 
            element={
              <>
                <Header />
                <Projects />
              </>}
          />
          
        </Routes>
        
      </div>
    </Router>
    
    
  );
}

export default App;
