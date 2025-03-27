import { useState } from 'react';
import './App.css';

function App()
{
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);
  const [i, setI] = useState(1);
  const [info, setInfo] = useState("");

  const increment = ()=>{
    verifyInputValues();
    if(count<max && !(count+Number(i) > max) && i>=1)
    {
      setCount(count+Number(i));
    }
  }

  const decrement = ()=>{
    verifyInputValues();
    if(count>min && !(count-Number(i) < min) && i>=1)
    {
      setCount(count-Number(i));
    }
  }
  const resetCount = ()=>{
    setCount(0);
  }
  const minimumValue = (e)=>{
    setMin(e.target.value);
  }
  const incrementValue = (e) =>{
    setI(e.target.value);
  }
  const maximumValue = (e)=>{
    setMax(e.target.value);
  }
  const setValues = ()=>{
    setMin(min);
    setMax(max);
    setI(i);
    
    verifyInputValues();
  }

  const verifyInputValues = ()=>
  {
      if(min>count)
      {
        setInfo("Wrong Input, Minimum value cannot be more than count");
      }
      else if(max<count)
      {
        setInfo("Wrong Input, Maximum value cannot be less than count");
      }
      else if(max==0 && min==0)
      {
        setInfo("Enter some values in the above input boxes...")
      }
      else
      {
        setInfo("Let Set Count...");
      }

      if(count+Number(i) > max)
      {
        setInfo("You are on the edge, Can't increase more")
      }
      if(count-Number(i) < min)
      {
        setInfo("You are on the edge, Can't decrease more")
      }
  
      if(i<1)
      {
        setInfo("Increment value cannot be zero or negative")
      }
  }


  return(
    <>
        <h1 id='heading'>INTERACTIVE COUNTER</h1>
        <div className='outer'>
          <div id="child1">
            <div>
              <p className='text'>Enter minimum value</p>
              <input type="text" value={min} onChange={minimumValue} />
            </div>
            <div>
              <p className='text'>Enter increment value</p>
              <input type="text" value={i} onChange={incrementValue} />
            </div>
            <div>
              <p className='text'>Enter maximum value</p>
              <input type="text" value={max} onChange={maximumValue} />
            </div>
          </div>
          <div id="child2">
            <button id='set' onClick={setValues}>Apply</button>
          </div>
          <div id="child3">
            <p id='num'>{count}</p>
          </div>
          <div id="child4">
            <p id='errorText'>{info}</p>
            <div id='buttons'>
              <button onClick={increment} className='btn'>+</button>
              <button onClick={resetCount} className='reset'>Reset</button>
              <button onClick={decrement} className='btn'>-</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App;