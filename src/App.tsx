import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);
  const [status, setStatus] = useState('');
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    calculateBMI(weight, height);
  }, [weight, height]);

  function calculateBMI(weight: number, height: number) {
    const bmiValue = Math.round((weight / (height / 100) ** 2) * 10) / 10;

    if (bmiValue >= 30) {
      setStatus('Obesity');
    } else if (bmi >= 25) {
      setStatus('Overweight');
    } else if (bmi >= 18.5) {
      setStatus('Normal weight');
    } else {
      setStatus('Underweight');
    }

    setBmi(bmiValue);
  }

  return (
    <div className='max-w-lg shadow-md mx-auto mt-12 text-center bottom-3'>
      <div className='bg-blue-400 text-white font-semibold text-4xl p-4'>
        <h2>BMI Calculator</h2>
      </div>
      <div className='w-fit mx-auto text-xl font-bold mt-3'>
        <label htmlFor='weightKB' className='block'>
          Weight: {weight}kg
        </label>
        <input
          type='range'
          id='weightKB'
          min={40}
          max={220}
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div className='w-fit mx-auto text-xl font-bold mt-3'>
        <label htmlFor='heightCM' className='block'>
          Height: {height}cm
        </label>
        <input
          type='range'
          id='heightCM'
          min={140}
          max={220}
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div className='mt-3 pb-3'>
        <p className='text-2xl font-bold'>Your BMI is</p>
        <p className='shadow w-fit mx-auto border-4 border-blue-400 rounded-lg p-4 px-7'>
          {bmi}
        </p>
        <p className='text-3xl pt-2'>{status}</p>
      </div>
    </div>
  );
}

export default App;
