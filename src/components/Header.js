import React, {useState, useContext} from "react";
import ThemeContext from '../context/ThemeContext'


const Header = ({ city, setCity }) => {

  const [value, setValue] = useState('');
  const {theme} = useContext(ThemeContext);


  const handleSubmit = (e) =>{  
    e.preventDefault();
    setCity(value);
    setValue('');

  }


  return (
    <div className="header">
       <form onSubmit={(e) => handleSubmit(e)}>
        <input className={theme === 'Light' ? 'active' : ''}
            type="text"
            placeholder="Sehir ismi giriniz"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button><i className="fa-solid fa-plus"></i></button>
       </form>
       <h2 className="city">{city}</h2>
    </div>
  );
};

export default Header;
