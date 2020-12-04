import React from "react";

function Input(props) {
  const { value, id, onChange, type, name } = props;
  return (
    <div className="form-group">
      <label htmlFor="SummonerName">Summonner Name</label>
      <input
        onChange={onChange}
        defaultValue={value}
        type={type}
        className="form-control"
        id={id}
        name={name}
      />
    </div>
  );
}

export default Input;
