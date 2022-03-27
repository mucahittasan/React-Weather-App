import React from "react";

const Header = ({ setCity }) => {
  const onChangeInput = (e) => {
    setCity(e.target.value);
  };


  return (
    <div className="header">
        <input
          type="text"
          placeholder="Sehir ismi giriniz"
          onChange={(e) => onChangeInput(e)}
        />
    </div>
  );
};

export default Header;
