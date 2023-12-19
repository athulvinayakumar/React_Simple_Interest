import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [interest, setInterest] = useState(0)
  const [principal, setPrincipal] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrinciple, setisPrinciple] = useState(true)
  const [isRate, setisRate] = useState(true)
  const [isYear, setisYear] = useState(true)

  const getValidate = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === 'principal') {
        setPrincipal(value);
        setisPrinciple(true);
      }
      else if (name === 'rate') {
        setRate(value);
        setisRate(true);
      }
      else {
        setYear(value);
        setisYear(true);
      }
    } else {
      if (name === 'principal') {
        setPrincipal(value);
        setisPrinciple(false);
      }
      else if (name === 'rate') {
        setRate(value);
        setisRate(false);
      }
      else {
        setYear(value);
        setisYear(false);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!principal || !rate || !year) {
      alert("Please Fill the Form")
    }
    else {
      // alert('submit')
      setInterest(principal * rate * year / 100)
    }
  }

  const handleReset = () => {
    setInterest(0)
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
  }

  return (
    <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className="bg-light p-5 rounded" style={{ width: '500px' }}>
        <h1>Simple Interest App</h1>
        <p>Calculate Simple Interest Easily</p>
        <div className="bg-warning d-flex justify-content-center align-items-center w-100 p-4 rounded flex-column">
          <h1>₹ {' '} {interest}</h1>
          <p>Total Simple interest</p>
        </div>
        <form className='mt-5' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <TextField name="principal" value={principal || ""} onChange={(e) => getValidate(e)} className="w-100" id="outlined-basic" label="₹ Principal Amount" variant="outlined" />
          </div>
          {!isPrinciple && (
            <div>
              <p className='text-danger'>Invalid Principal</p>
            </div>
          )}
          <div className='mb-3'>
            <TextField value={rate || ""} name="rate" onChange={(e) => getValidate(e)} className="w-100" id="outlined-basic" label="Rate Of Interest %" variant="outlined" />
          </div>
          {!isRate && (
            <div>
              <p className='text-danger'>Invalid Principal</p>
            </div>
          )}
          <div className='mb-3'>
            <TextField value={year || ""} name="year" onChange={(e) => getValidate(e)} className="w-100" id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          {!isYear && (
            <div>
              <p className='text-danger'>Invalid Principal</p>
            </div>
          )}
          <Stack className="mt-4" direction="row" spacing={2}>
            <Button type="submit" disabled={isPrinciple && isRate && isYear ? false : true} className="bg-success" style={{ width: '200px', height: '50px' }} variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ width: '200px', height: '50px' }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>

  );
}

export default App;
