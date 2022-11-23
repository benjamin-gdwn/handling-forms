import { useState } from "react";


const useLogic = (validateValue) => {

const [inputValue, setInputValue] = useState('');
const [isTouched, setIsTouched] = useState(false);

const enteredValueIsValid = validateValue(inputValue);
const hasError = !enteredValueIsValid && isTouched;

const valueChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value)
}
const inputBlurHandler = e => {
    console.log(e.target)
    setIsTouched(true);
}

const reset = () => {
    setInputValue('');
    setIsTouched(false)
};



    return  {
        value: inputValue,
        touched: isTouched,
        error: hasError,
        changeHandler: valueChangeHandler,
        blurHandler: inputBlurHandler,
        reset,
    } ;
}
 
export default useLogic;