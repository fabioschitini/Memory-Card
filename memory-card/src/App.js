
import React, { useState, useEffect,useRef } from "react";
import Cards from './components/Cards'
const App = () => {
  function shuffleArray(originalArray) {
let array = originalArray.slice(0)
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array
}
  
  const [score, setScore] = useState(0)
  const [bestScore,setBestScore]=useState([0])

  const [cards,setCards]=useState([{
  id: 'Cross Girl',
  img:'http://img.skenko.com/images/anime/bvybhwbvybhw.jpg',
},
  {
  id: 'b',
  img:'http://img.skenko.com/images/anime/oedvggoedvgg.jpg',
  },
  {
  id: 'c',
  img:'http://img.skenko.com/images/anime/jlqinfjlqinf.jpg',
  },
  {
  id: 'd',
  img:'http://img.skenko.com/images/anime/kbpvbikbpvbi.jpg',
  },
  {
  id: 'e',
  img:'http://img.skenko.com/images/anime/wfyijwwfyijw.jpg',
  },
  {
  id: 'f',
  img:'http://img.skenko.com/images/anime/eydtdpeydtdp.jpg',
  },
  {
  id: 'g',
  img:'http://img.skenko.com/images/anime/qpwetuqpwetu.jpg',
  },
  {
  id: 'h',
  img:'http://img.skenko.com/images/anime/atyoliatyoli.jpg',
  },
  {
  id: 'i',
  img:'http://img.skenko.com/images/anime/lpolyrlpolyr.jpg',
  },
  {
  id: 'j',
  img:'http://img.skenko.com/images/anime/utvaofutvaof.jpg',
  },
  {
  id: 'k',
  img:'http://img.skenko.com/images/anime/arpheiarphei.jpg',
  },
  {
  id: 'l',
  img:'http://img.skenko.com/images/anime/bqarvubqarvu.jpg',
  }
  
  ])
 
  const randonClick = (e) => {
      console.log(e)
      setCards(shuffleArray(cards))

    };
    
useEffect(() => {
  const randonClick = (e) => {
console.log(e.path)
    if (e.path[1].attributes[0].value === 'true') {
      setBestScore(bestScore.concat(score))
      setScore(0)
      setCards(shuffleArray(cards))
      e.path[2].childNodes[0].attributes[0].value='false'
      e.path[2].childNodes[1].attributes[0].value='false'
      e.path[2].childNodes[2].attributes[0].value='false'
      e.path[2].childNodes[3].attributes[0].value='false'
      e.path[2].childNodes[4].attributes[0].value='false'
      e.path[2].childNodes[5].attributes[0].value='false'
      e.path[2].childNodes[6].attributes[0].value='false'
      e.path[2].childNodes[7].attributes[0].value='false'
      e.path[2].childNodes[8].attributes[0].value='false'
      e.path[2].childNodes[9].attributes[0].value='false'
      e.path[2].childNodes[10].attributes[0].value='false'
      e.path[2].childNodes[11].attributes[0].value='false'
    }
    else {
      console.log(e.path[1].attributes[0].value)
      e.path[1].attributes[0].value = (e.path[1].attributes[0].value === 'false')
      console.log(e.path[1].attributes[0].value)
      
      setScore(score + 1)
      setCards(shuffleArray(cards))

    }
  };
    
    document.addEventListener("click", randonClick);

    return () => {
      document.removeEventListener("click", randonClick);
    };
  });
    
  
  return (<div>
    <h1>Memory Card Game!</h1>
    <p>Pick A card and gain a point,but if you alredy picked the card you score will reset. </p>
    <div id='score'>
      <h2>Score:{score }</h2>
            <h2>Best Score:{Math.max(...bestScore)} </h2>

</div>
  
    <div  id='container'>
      <Cards randon={randonClick} cards={cards }/>
    </div>
    </div>
  );
}


export default App;
