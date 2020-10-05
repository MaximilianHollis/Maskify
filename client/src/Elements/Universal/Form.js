import React, { Component } from 'react';
import { Field } from './Form.elements'


export default function Form ({
    id,
    locked = false,
    focussed = false,
    value = '',
    error = '',
    label = '',
    onChange = () => '',

}){

  onChange = e => {
    const { id } = this.props;
    const value = e.target.value;
    this.setState({ value, error: '' });
    return this.props.onChange(id, value);
  }

    return (
      <Field>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </Field>
    )
  
}