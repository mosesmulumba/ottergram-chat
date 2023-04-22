import React from 'react';
import Post from './components/Post';
import ela from './otters/ela.jpg';
import ella from './otters/ella m.jpg';
import ell from './otters/ella .jpg';
import ellamai from './otters/ellamai.jpg';
import kai from './otters/kai3.jpg';
import kai_sept from './otters/Kai-September.jpg';
import './App.css';
import { Header } from './components/Header';
import Author from './components/author';


const ottersArray = [
  {image: ela , name : "ela" , id : 1},
  {image: ell , name : "ell" , id: 2},
  {image : ella , name : "ella" , id: 3},
  {image : ellamai , name : "ellamai" , id: 4},
  {image : kai , name : "kai" , id:5},
  {image : kai_sept , name : "kai_sept" , id:6},
]

function App() {
  return (
    <div className="App">
      <Header />

      <div className='form'>
         <ul className='lists'>
          {ottersArray.map((data)=>(
          <Post  
          key={data.id}
          image={data.image} name={data.name} />
          ))}
         </ul>
         
      </div>
      <footer>
        <Author />
      </footer>
    </div>
  );
}

export default App;
