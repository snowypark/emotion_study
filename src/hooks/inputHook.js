import { useState } from "react";

export function useInput() {

    const [ inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;       
        setInputValue(() => value);     
    }

    return [ inputValue, onChange ];
}


export function useMaxSizeValidateInput(maxSize) {

    const [ inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;    
        if(value.length <= maxSize) {
            setInputValue(() => value);     
        }   
    } 

    return [ inputValue, onChange ];
}


    // const [ inputValue2, handleInputChange2 ] = useInput(); // 함수호출방법

    // const [ inputValue, setInputValue ] = useState("");

    // const handleInputChange = (e) => {
    //     const { value } = e.target;

    //     // setInputValue((v) => v + 1); 렌더링
    //     // setInputValue((iv) => value.length < 20 ? value : iv);

    //     if(value.length < 20) {
    //         setInputValue(() => value);            
    //     }

    // }