import React, {useState} from 'react'
import { Sieve_of_eratosthenes } from './Algo/Sieve_of_eratosthenes';

export default function SievePrime(props) {
  const [name,setName] = useState('');
  const [arr, setArr] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);


// Elements in aray
  const add = () =>{
    let n = Number(name);

    if(n < 1 || n > 1000){
      alert("Please Enter the length Between 1 - 1000!!");
      return;
    }

    reset();

    for(let i = 0; i<=n;i++){
      setArr(prev=>[...prev,i]);
    }
    resetColor();
    setName('');
  }

  // Animation
  const animate = (animations) =>{
    setButtonDisabled(true);
    resetColor();
    const arrayBars = document.getElementsByClassName('normal-array-bar');
    for(let i = 0;i<animations.length; i++){
      let idx = animations[i][0];
      let color = animations[i][1];

      setTimeout(() => {
        arrayBars[idx].style.backgroundColor = color;
        if(i === animations.length - 1) setButtonDisabled(false);
      },i*50);
    }
  }


//Reset the color of all blocks
  const resetColor = () =>{
    const arrayBars = document.getElementsByClassName('normal-array-bar');
    for(let i=0;i<arrayBars.length;i++){
      arrayBars[i].style.backgroundColor = 'turquoise';
    }
  }


//reset the array
  const reset = () =>{
    setArr([]);
  }


//Visualize function
  const sieve = () =>{
    if(arr.length == 0){
      alert("Enter some length!!");
      return;
    }
    let animations = [];
    let demo = [...arr];
    Sieve_of_eratosthenes(demo,animations);

    animate(animations);
  }

  
  return (
    <div className="container" style={{color:(props.mode === 'light')?'black':'white',}}>
      <b>Enter Size of Array (upto 1000):</b>
      <input type='number' className='ms-3 mt-3 me-2' value={name} onChange={e => setName(e.target.value)}/>
      <button className={`btn btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={add} disabled={isButtonDisabled}><b>Add</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={sieve} disabled={isButtonDisabled}><b>Visualize</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={reset} disabled={isButtonDisabled}><b>reset</b></button>
      <div className="border border-info mt-3">
        {arr.map((val,idx) => (
          <div className="normal-array-bar" key={idx} style={{color:(props.mode === 'light')?'white':'black',}}> {val} </div>
        ))}
      </div>
    </div>
  )
}
