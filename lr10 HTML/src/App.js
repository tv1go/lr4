import React from 'react';
import './App.css';
import ToDo from './components/ToDo';
import img1 from "./images/f3.png";
import img2 from "./images/f4.png";
import img3 from "./images/f5.png";

function App() {
  return (
    <div>
      <h1 className="title">Что вам необходимо?</h1>
      <div className="main__blocks">
        <ToDo title="Первый блок" img={img1} text='Lorem, ipsum dolor sit amet consectetur adipiscing elit'/>
        <ToDo title="Второй блок" img={img2} text='Lorem, ipsum dolor sit amet consectetur adipiscing elit'/>
        <ToDo title="Третий блок" img={img3} text='Lorem, ipsum dolor sit amet consectetur adipiscing elit'/>
      </div>
    </div>
  );
}

export default App;
