import React, { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState("");

    const changeHandler = (event) => {
        setName(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(name)
    }
console.log(name);
    return(
        <div>
           <form onSubmit={submitHandler}>
               <label>Enter Text: </label>
               <input type="text" value={name} onChange={changeHandler}></input>
               <button type="submit">Submit</button>
           </form>
        </div>

    );
}
export default Form;