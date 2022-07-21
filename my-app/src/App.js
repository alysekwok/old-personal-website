import React from 'react';
import AppRouter from "./components/AppRouter"



function App() {
  return (
    <div>
      <ul>
      <li><a href="http://localhost:3000/personal-website/portfolio">PORTFOLIO</a></li>
      <li><a href="http://localhost:3000/personal-website/">HOME</a></li>
      </ul>
      
      <AppRouter />
      
    </div>
    
     
  );
}

export default App;