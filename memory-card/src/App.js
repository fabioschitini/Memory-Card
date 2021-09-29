
import React, { useState } from "react";
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
  id: 'On Fire!',
  img:'http://img.skenko.com/images/anime/oedvggoedvgg.jpg',
  },
  {
  id: 'Pale Girl',
  img:'http://img.skenko.com/images/anime/jlqinfjlqinf.jpg',
  },
  {
  id: 'Cats, am I right?',
  img:'http://img.skenko.com/images/anime/kbpvbikbpvbi.jpg',
  },
  {
  id: 'Chilling',
  img:'http://img.skenko.com/images/anime/wfyijwwfyijw.jpg',
  },
  {
  id: 'Silver',
  img:'http://img.skenko.com/images/anime/eydtdpeydtdp.jpg',
  },
  {
  id: 'Peace',
  img:'http://img.skenko.com/images/anime/qpwetuqpwetu.jpg',
  },
  {
  id: 'Deliberation',
  img:'http://img.skenko.com/images/anime/atyoliatyoli.jpg',
  },
  {
  id: 'Love',
  img:'http://img.skenko.com/images/anime/lpolyrlpolyr.jpg',
  },
  {
  id: 'Pretty boy',
  img:'http://img.skenko.com/images/anime/utvaofutvaof.jpg',
  },
  {
  id: 'Weeb',
  img:'http://img.skenko.com/images/anime/arpheiarphei.jpg',
  },
  {
  id: 'Frankenstein',
  img:'http://img.skenko.com/images/anime/bqarvubqarvu.jpg',
  }
  
  ])
 
  
    

  const randonClick = (e) => {

    let value = e.target.parentNode.attributes[0].nodeValue
    console.log(e.target.parentNode.parentNode.childNodes[0].attributes[0].nodeValue)
console.log(e.target.parentNode.attributes)
    if (value === 'true') {
      setBestScore(bestScore.concat(score))
      setScore(0)
      setCards(shuffleArray(cards))
      e.target.parentNode.parentNode.childNodes[0].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[1].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[2].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[3].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[4].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[5].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[6].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[7].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[8].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[9].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[10].attributes[0].nodeValue = 'false'
      e.target.parentNode.parentNode.childNodes[11].attributes[0].nodeValue = 'false'
    }
    else {
      e.target.parentNode.attributes[0].nodeValue = 'true'
      
      setScore(score + 1)
      setCards(shuffleArray(cards))

    }
  
  }
    
    
  
  return (<div>
    <h1>Memory Card Game!</h1>
    <p>Pick A card and gain a point,but if you alredy picked the card you score will reset. </p>
    <div id='score'>
      <h2>Score:{score }</h2>
            <h2>Best Score:{Math.max(...bestScore)} </h2>

</div>
  
    <div  id='container'>
      <Cards setScore={setScore} randon={randonClick} cards={cards }/>
    </div>
    </div>
  );
}


export default App;
