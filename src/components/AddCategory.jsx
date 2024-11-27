import { useState } from "react"
import { PropTypes } from 'prop-types';

export const AddCategory = ({onNewCategory})=>{

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (evt) =>{
        setInputValue(evt.target.value);
    };
    const onSubmit = (evt)=>{
        evt.preventDefault();
        if(inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    // const setCategory = () => {

    // }



    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                value={inputValue}
                placeholder="Buscar gif"
                onChange={onInputChange}
                /> 
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}