import { InputContacts } from "./Styled";
import React, { Component } from "react";


export class Filter extends Component{
    
    render() {
    const { handleChange } = this.props;
    const { filter} = this.props.state;
        return (
            <InputContacts value={filter} onChange={handleChange} />
        );
    }

};
   


