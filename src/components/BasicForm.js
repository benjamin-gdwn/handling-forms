import useLogic from "../hooks/use-logic";

const BasicForm = (props) => {

  const {
    value: fNameValue,
    touched: fNameIsTouched,
    error: fNameHasError,
    changeHandler: fNameChangeHandler,
    blurHandler: fNameBlurHandler,
    reset: resetFName,
  } = useLogic((value) => value.trim() !== "");
  const {
    value: lNameValue,
    touched: lNameTouched,
    error: lNameHasError,
    changeHandler: lNameChangeHandler,
    blurHandler: lNameBlurHandler,
    reset: resetLName,

  } = useLogic((value) => value.trim() !== "");
  const {
    value: emailValue,
    touched: emailIsTouched,
    error: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,

  } = useLogic((value) => value.includes("@"));


  let formIsValid = false;
  if(!emailHasError && !lNameHasError && !fNameHasError) {
    formIsValid = true
  }


  const formHandler = (e) => {
    e.preventDefault();
    if(!formIsValid) {
        return;
    }
    resetEmail();
    resetFName();
    resetLName();
  }

  const firstNameClasses = fNameHasError
  ? "form-control invalid"
  : "form-control";
  const lastNameClasses = lNameHasError
  ? "form-control invalid"
  : "form-control";
  const emailClasses = emailHasError
  ? "form-control invalid"
  : "form-control";

  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fNameValue}
            type="text"
            id="name"
          />
          {fNameHasError && <p>Must enter a first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lNameValue}
            type="text"
            id="name"
          />
          {lNameHasError && <p>Must enter a last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          type="text"
          id="name"
        />
        {emailHasError && <p>Must enter a valid email address</p>}

      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>{" "}
    </form>
  );
};

export default BasicForm;
