'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [addSales, setAddSales] = useState(0);
    const [removeSales, setRemoveSales] = useState(0);

    return (
        <div>
            <p aria-live='polite'>CURRENT SALES COUNT: <br />
            {count}</p>

            {/* Add */}
            <div id='addDiv'>
                <label htmlFor="addInput">Add sales: </label>
                <input id='addInput' value={addSales} onChange={(e) => setAddSales(Number(e.target.value))} type="number"/><br />
                <button onClick={() => setCount(count + addSales)}>Add Sale</button><br />
            </div>
            {/* Remove */}
            <div id='removeDiv'>
                <label htmlFor="removeInput">Remove sales: </label>
                <input id='removeInput' value={removeSales} onChange={(e) => setRemoveSales(Number(e.target.value))} type="number"/><br />
                <button onClick={() => setCount(count - removeSales)}>Remove Sale</button><br />
            </div>

            {/* Reset */}
            <button onClick={() => setCount(0)}>Reset Counter</button>
        </div>
    );
}