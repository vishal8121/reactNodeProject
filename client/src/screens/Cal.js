import React, { useState } from 'react'

function Cal() {

    const [number1,setNumber1]=useState(0);
    const [number2,setNumber2]=useState(0);
    const [result,setResult]=useState(0);

    const changeHandler=(event)=>{
        if(event.target.name=="num1"){
            setNumber1(event.target.value);
        }
        else{
            setNumber2(event.target.value);
        }
        //console.log(number1);
    };

    const sumClick=()=>{
        setResult(Number(number1)+Number(number2));
    }
    const mulClick=()=>{
        setResult(Number(number1)*Number(number2));
    }
     const divClick=()=>{
        setResult(Number(number1)/Number(number2));
    }
    const clearRec=()=>{
        setNumber1(0);
        setNumber2(0);
        setResult(0);
    }
  return (
    <div>
        <b>Enter First Number:</b>
        <input value={number1} type='number'name='num1'onChange={changeHandler}/>
        <br/>
        <b>Enter Second Number:</b>
        <input value={number2} type='number'name='num2'onChange={changeHandler}/>
        <br/>
        <b>Result:</b>{result}<br/>
        <button onClick={sumClick} className='btn btn-info m-1'>Sum</button>
        <button onClick={mulClick} className='btn btn-success m-1'>Mul</button>
        <button onClick={divClick} className='btn btn-primary m-1'>Div</button>
        <button onClick={clearRec} className='btn btn-danger'>Clear</button>
    </div>
  )
}

export default Cal