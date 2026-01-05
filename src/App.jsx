
import { Routes, Route} from "react-router-dom";
import SearchPage from "./Pages/SearchPage.jsx";
import PropertyPage from "./Pages/PropertyPage.jsx";
import './App.css'

function App() {
  
  return (
    <div>
      <h1>Estate Agent App</h1>

      
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
      
    </div>  
    
  );

};

export default App
