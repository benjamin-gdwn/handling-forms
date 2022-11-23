import { useState} from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
// using useeffect to validate the form every time enterednameisvalid is called
  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])

  // using simpler code to validate the form
  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    console.log('form is valid')
        formIsValid=true;
      } 

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };
  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };
  const emailInputBlurHandler = e => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    // basic validation
    if (!enteredNameIsValid) {
      return;
    }
    // storing the ref to use as the input value
    // const enteredValue = nameInputRef.current.value;
    // resetting input value to nothing
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false)
  };
  // variable stores a validity handler
  // variable stores validity classes
  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name Must Not Be Empty</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">Email Must Include @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
