import { InputContacts, List, Div } from "./Styled";
import { Todo } from "components/Todo"; 
import React, { Component } from "react";


export class Contacts extends Component{
    
    render() {
    const { handleChange } = this.props;
    const { filter, contacts } = this.props.state;

    return (
        <Div>
            <h2>Contacts</h2>
            <InputContacts value={filter} onChange={handleChange} />
            <List>
                {contacts
                    .filter((item) =>
                        item.name.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((item) => (
                        <Todo {...item} key={item.id} />
                    ))}
            </List>
        </Div>
    );
    }

};
   


