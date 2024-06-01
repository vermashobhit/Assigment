import { useState } from 'react';

const Controlledstate = () => {
  const [inputValue , setInputValue ] = useState("");

  const handleInputChange = (e)=>{
    setInputValue(e.target.value)
  }
  return (
    <div>
      <input type="text"  value={inputValue} onChange={handleInputChange} placeholder='Type....'/>
      <p>You typrd: {inputValue}</p>
    
    </div>
  );
}

export default Controlledstate;
