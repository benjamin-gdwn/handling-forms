import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    // basic validation
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      
      return;
    } 
    console.log(enteredName);
    // storing the ref to use as the input value
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    // resetting input value to nothing
    setEnteredName('')
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p>Name Must Not Be Empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
