'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p aria-live='polite'>Current Sales Count: <br />
            {count}</p>
            <label htmlFor="salesAdd">Number of Sales to Add: </label>
            <input type="number"/>
            <button onClick={() => setCount(count + 1)}>Add Sale</button><br></br>
            <label htmlFor="salesAdd">Number of Sales to Remove: </label>
            <input type="number"/>
            <button onClick={() => setCount(count - 1)}>Remove Sale</button><br></br>
            <button onClick={() => setCount(0)}>Reset Counter</button>
        </div>
    );
}