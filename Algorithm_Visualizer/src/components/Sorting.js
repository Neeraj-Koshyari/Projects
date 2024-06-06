import React,{useState} from 'react'
import {mergeSort, quickSort, selectionSort, bubbleSort} from './sortingAlgo/allSort';

let nextId = 0;   //for array id (key)
export default function Sorting(props) {
  const [name, setName] = useState('');   //For adding input
  const [arr, setArr] = useState([]);     // original array
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  

  // Add new Element
  const add = () =>{
    if(name.length === 0){
      alert("Please Enter a number!!");
      return;
    }
    
    setArr([...arr,{ id: nextId++, name: name }]);
    setName('');
  };


  //Delete last position
  const del = () =>{
    if(arr.length <=0 ) return;
    setArr(arr.slice(0,arr.length-1));    // create another array where id of each element in array does not match nextId
  };
  

  //Clear All Element
  const reset = () =>{
    setArr([]);
    nextId = 0;
  };


  //Generate Random Array of size 100
  const random = () =>{
    reset();
    for(let i=0;i<30;i++){
      let val = Math.floor(Math.random() * 200) + 100;
      setArr(prev =>[...prev,{ id: nextId++, name: val }]);
    }
  }


  //Animations
  const animate = (animations) =>{
    // console.log(animations);
    // return;
    // setButtonDisabled(true);    //disable all other buttons
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
  
      const isColorChange = animations[i][0];
      if ((isColorChange % 2) !== 0) {
        const [ , barOneIdx, barTwoIdx] = animations[i];
        
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
        const color = (isColorChange > 0) ? 'red' : 'turquoise';
        
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;

          // if(i === animations.length - 1) setButtonDisabled(false);   //enable all button after last iteration

        }, i * 300);
      } 
      else {
        setTimeout(() => {
          if((isColorChange % 4) === 0){
            const [ , barOneIdx, oneNewHeight, barTwoIdx, twoNewHeight] = animations[i];

            const color = (isColorChange > 0) ? '#4ef037' : 'turquoise';

            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;

            barOneStyle.height = `${Number(oneNewHeight.name)}px`;
            barTwoStyle.height = `${Number(twoNewHeight.name)}px`;

            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }
          else{
            const [ , barOneIdx, oneNewHeight] = animations[i];

            const color = (isColorChange > 0) ? '#4ef037' : 'turquoise';

            const barOneStyle = arrayBars[barOneIdx].style;

            barOneStyle.height = `${Number(oneNewHeight.name)}px`;

            barOneStyle.backgroundColor = color;
          }
          // if(i === animations.length - 1)setButtonDisabled(false);

        }, i * 300);
      }
    }
  }


  //Validation of Array
  const validate = () =>{
    if(arr.length <= 1){
      alert("Elements in the Array should be Greater then 1!!");
      return false;
    }
    return true;
  }


  //Merge Sort 
  const merge_Sort = () =>{
    if(!validate()) return;
    const animations = [];

    mergeSort(0,arr.length-1,arr,animations);

    animate(animations);
  }


  //Quick Sort
  const quick_Sort = () =>{
    if(!validate())  return;
    const animations = [];

    quickSort(0,arr.length-1,arr,animations);
    // console.log(arr);

    animate(animations);
  }


  //Selection Sort
  const selection_Sort = () =>{
    if(!validate())  return;
    const animations = [];

    selectionSort(arr,animations);

    animate(animations);
  }


  //Bubble Sort
  const bubble_Sort = () =>{
    if(!validate())  return;
    const animations = [];

    bubbleSort(arr,animations);
    
    animate(animations);
  }
  
  // const print = ()=>{
  //   console.log(arr);
  // }

  return (
    <div className="container" style={{color:(props.mode === 'light')?'black':'white',}}>
      <center>
      <b>Enter the values:</b>
      <input type='number' className='ms-3 mt-3 me-2' value={name}  onChange={e => setName(e.target.value)}/>
      <button className={`btn btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={add} disabled={isButtonDisabled}><b>Add</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={del} disabled={isButtonDisabled}><b>Delete</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={reset} disabled={isButtonDisabled}><b>Reset</b></button><br/>
      <button className={`btn ms-2 mt-3 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={random} disabled={isButtonDisabled}><b>Generate Random Array</b></button>
      <button className={`btn ms-2 mt-3 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={merge_Sort} disabled={isButtonDisabled}><b>Merge Sort</b></button>
      <button className={`btn ms-2 mt-3 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={quick_Sort} disabled={isButtonDisabled}><b>Quick Sort</b></button>
      <button className={`btn ms-2 mt-3 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={selection_Sort} disabled={isButtonDisabled}><b>Selection Sort</b></button>
      <button className={`btn ms-2 mt-3 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={bubble_Sort} disabled={isButtonDisabled}><b>Bubble Sort</b></button>
      {/* <button className={`btn ms-2 mt-3 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={print} disabled={isButtonDisabled}><b>Print</b></button> */}
      </center>
      
      <div className="container d-flex justify-content-evenly border border-info mt-3">
        {arr.map(artist => (
          <div className="array-bar" key={artist.id} style={{height:`${artist.name}px`,background:'turquoise',color:(props.mode === 'light')?'white':'black',}}> {/*{artist.name}*/} </div>
        ))}
      </div>
    </div>
  )
}
