import React, {useState} from 'react'
import { linearSearch, binarySearch } from './Algo/allSearch';

export default function Searching(props) {
  const [name,setName] = useState('');
  const [arr, setArr] = useState([]);
  const [target, setTarget] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);


//Add Element in array
  const add = () =>{
    if(name.length === 0){
      alert("Please Enter any value!!");
      return;
    }
    setArr(prev=>[...prev,Number(name)]);
    setName('');
  }

//Generate Random Array of size 100
  const random = () =>{
    reset();
    resetColor();
    for(let i=0;i<28;i++){
      let val = Math.floor((Math.random() - 0.5) * 100);
      setArr(prev =>[...prev,val]);
    }
  }

//Delete last position
  const del = () =>{
    if(arr.length <=0 ) return;
    setArr(arr.slice(0,arr.length-1));    // create another array where id of each element in array does not match nextId
  };
    
//validation of array
  const validate = () =>{
    if(arr.length == 0){
      alert("array is empty!!");
      return false;
    }
    if(target.length == 0){
      alert("Enter the value to Find!!");
      return false;
    }
    return true;
  }


//Linear Search
  const Linear_Search = () =>{
    if(!validate()) return;
    const animations = [];
    resetColor();

    linearSearch(arr,animations,target);

    setButtonDisabled(true);
    const arrayBars = document.getElementsByClassName('normal-array-bar');
    for(let i=0;i<animations.length;i++){
      const idx = animations[i][0];
      const color = animations[i][1];

      setTimeout(()=>{
        arrayBars[idx].style.backgroundColor = color;
        if(i === animations.length - 1 && color != 'green') alert("Element not Present!!");
        if(i === animations.length - 1) setButtonDisabled(false);
      },i*500);
    }
    setTarget('');
  }


// Check if array is sorted or not
  const check = (demo,arr) =>{
    let n = arr.length;
    for(let i=0;i<n;i++){
      if(arr[i] != demo[i]) return false;
    }
    return true;
  }

//Binary Search
  const Binary_Search = () =>{
    if(!validate()) return;
    resetColor();

    const demo = [...arr];
    demo.sort(function(a,b){return a - b;});

    if(!check(demo,arr)){
      const isOk = window.confirm("For Binary search array need to be sorted.\n\nDo you want to sort the array??");
      if(isOk)  setArr(demo);
      else return;
    }

    const animations = [];
    binarySearch(demo,animations,Number(target));

    setButtonDisabled(true);

    const arrayBars = document.getElementsByClassName('normal-array-bar');
    for(let i=0;i<animations.length;i++){
      const type = animations[i][0];
      if(type === 1 || type === -1){
        const [ ,barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        setTimeout(()=>{
          if(type === 1){
            barOneStyle.backgroundColor = 'blue';
            barTwoStyle.backgroundColor = 'blue';
          }
          else{
            barOneStyle.backgroundColor = 'turquoise';
            barTwoStyle.backgroundColor = 'turquoise';
          }

          if(i === animations.length - 1 && type != 0)  alert("Element not Present!!");
          if(i === animations.length - 1 )  setButtonDisabled(false);
        },i*500);
      }
      else{
        setTimeout(()=>{
          const [,barIdx] = animations[i];
          if(type === 0)  arrayBars[barIdx].style.backgroundColor = "green";
          else{
            if(type > 0)  arrayBars[barIdx].style.backgroundColor = "red";
            else arrayBars[barIdx].style.backgroundColor = "turquoise";
          }
          if(i === animations.length - 1 && type != 0)  alert("Element not Found!!");
          if(i === animations.length - 1 )  setButtonDisabled(false);
        },i*500)
      }
    }
    setTarget('');
  }


//Change color to default
  const resetColor = () =>{
    const arrayBars = document.getElementsByClassName('normal-array-bar');
    for(let i=0;i<arrayBars.length;i++){
      arrayBars[i].style.backgroundColor = 'turquoise';
    }
  }


// reset the array
  const reset = () =>{
    setArr([]);
  }

  return (
    <div className="container" style={{color:(props.mode === 'light')?'black':'white',}}>
      <b>Enter the Numbers:</b>
      <input type='number' className='ms-3 mt-3 me-2' value={name} onChange={e => setName(e.target.value)}/>
      <button className={`btn btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={add} disabled={isButtonDisabled}><b>Add</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={del} disabled={isButtonDisabled}><b>Delete</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={random} disabled={isButtonDisabled}><b>Generate Random</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={reset} disabled={isButtonDisabled}><b>Reset</b></button>
      <br/>
      <b>Enter the Target:</b>
      <input type='number' className='ms-3 mt-3 me-2' value={target} onChange={e => setTarget(e.target.value)}/>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={Linear_Search} disabled={isButtonDisabled}><b>Linear Search</b></button>
      <button className={`btn ms-2 btn-outline-${(props.mode === 'light')?'dark':'light'}`} onClick={Binary_Search} disabled={isButtonDisabled}><b>Binary Search</b></button>
      <div className="border border-info mt-3">
        {arr.map((val,idx) => (
          <div className="normal-array-bar" key={idx} style={{color:(props.mode === 'light')?'white':'black',}}> {val} </div>
        ))}
      </div>
    </div>
  )
}
