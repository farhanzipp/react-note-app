import React from 'react'

const InputField = ({ inputType, name, value, onChange, placeholder, isRequired }) => {
    const handleChange = (event) => {
        if (name === "title") {
          const text = event.target.value;
          onChange(text.length <= 50 ? text : value);
        } else {
          onChange(event.target.value);
        }
      };

      const inputProps = {
        name,
        value,
        onChange: handleChange,
        spellCheck: false,
        placeholder,
        required: isRequired
      };

  return inputType === "textarea" ? (
    <textarea {...inputProps} className="note-input__body" rows={5} />
  ) : (
    <input {...inputProps} className="note-input__title"/>
  );
}

export default InputField