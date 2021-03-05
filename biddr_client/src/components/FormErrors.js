import React from 'react';

export const FormErrors = props =>{

    const {forField, errors={}}=props;
    let filteredErrors=[];

    if(errors[forField]){
        filteredErrors=errors[forField] 
    }
    function displayErrors(errorsArray){
        if(errorsArray){
            let newArray=errorsArray.map((error,i)=> 
            <li key={i}>{error}</li>)
            return newArray;
        }

    }
    return (
        <ul>{
            displayErrors(filteredErrors)
        }
        </ul>
    )

}