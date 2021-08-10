import React from 'react';

const formatter = Intl.NumberFormat("en-US");

const Number = ({children,...props})=> <span {...props}>{ formatter.format(children) }</span>

export default Number