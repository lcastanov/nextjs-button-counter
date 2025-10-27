'use client';
import { useState } from 'react';

export default function Counter({initialCount=0, initialStep=1}) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);
    const decrement = count - step >= 0;

    return (
        <div className='counterDiv'>
            <p aria-live='polite' className='salesP'>CURRENT SALES COUNT: <br />
            {count}</p>

            {/* Add */}
            <div className='addDiv'>
                <label htmlFor="addInput">Add sales: </label>
                <input id='addInput' value={step} onChange={(e) => setStep(Number(e.target.value)>0 ? Number(e.target.value):1)} type="number"/><br />
                <button onClick={() => setCount(count + step)}>Add Sale</button><br />
            </div>
            {/* Remove */}
            <div className='removeDiv'>
                <label htmlFor="removeInput">Remove sales: </label>
                <input id='removeInput' value={step} onChange={(e) => setStep(Number(e.target.value))} type="number"/><br />
                <button onClick={() => setCount(count - step)}>Remove Sale</button><br />
            </div>

            {/* Reset */}
            <button onClick={() => setCount(0)}>Reset Counter</button>
        </div>
    );
}