import { Todo } from "components/Todo"; 
import { List } from "./styled";
import React, { Component } from "react";

export class ContactList extends Component{
    render() {
    const { filter, contacts, onDeleteContact  } = this.props;
        return (
            <List>
                {contacts
                    .filter((item) =>
                        item.name.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((item) => (
                        <Todo
                            {...item}
                            key={item.id}
                            onDelete={() => onDeleteContact(item.id)}
                        />
                    ))}
            </List>
        );
    }
};

