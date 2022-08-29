import { useState } from "react";

const Counter = ({ stock }) => {
    const [count, setCount] = useState(1)

    function add() {
        if (count < stock)
        setCount(count + 1)
    }

    function substract() {
        if (count > 1)
            setCount(count - 1)
    }

    function reset() {
        setCount(1)
    }

    return (
        <div>
            <div className="counter-box">
                <img className='img' src="http://d2r9epyceweg5n.cloudfront.net/stores/633/798/products/20190614_0927431-dcdae69d8443b7698415605158965348-640-0.png" alt="" />
                <p>Stock: {stock} </p>
                <p>Cantidad: {count} </p>
                <div>
                <button type="button" className="btn btn-light" onClick={substract}>-</button>
                <button type="button" className="btn btn-light" onClick={reset}>Reset</button>
                <button type="button" className="btn btn-light" onClick={add}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
