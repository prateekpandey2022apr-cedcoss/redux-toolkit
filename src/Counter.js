import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counter/counterSlice";
import { addTodo, deleteTodo, updateTodo } from "./counter/todoSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [selectedVal, setSelectedVal] = useState("");

  return (
    <div className="counter">
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button> &nbsp;
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <br />
        <input
          type="number"
          value={inputVal}
          onChange={(event) => setInputVal(event.target.value)}
        />
        &nbsp;
        <select
          onChange={(event) => setSelectedVal(event.target.value)}
          value={selectedVal}
        >
          <option value="">Select ...</option>
          <option value="+">Increment</option>
          <option value="-">Decrement</option>
        </select>
        &nbsp;
        <button
          disabled={!(inputVal.length > 0) || !(selectedVal.length > 0)}
          onClick={() => {
            if (selectedVal === "+") {
              dispatch(incrementByAmount(inputVal));
            } else {
              dispatch(decrementByAmount(inputVal));
            }

            setInputVal("");
          }}
        >
          Do it
        </button>
      </div>

      <br />

      {/* <div>
        <button
          onClick={() =>
            dispatch(
              addTodo({ id: new Date().getTime().toString(36), text: "some" })
            )
          }
        >
          add post
        </button>
        <button
          onClick={() =>
            dispatch(updateTodo({ id: "l9dta5wz", text: "updated" }))
          }
        >
          update todo
        </button>

        <button onClick={() => dispatch(deleteTodo("l9dt0ygj"))}>
          delete todo
        </button>
      </div> */}
    </div>
  );
}

export default Counter;
