import React, {Component} from "react";
import { AddContact, Section, H1, Search} from "./styled";
import { InputName } from "components/InputName";
import { InputNumber } from "components/InputNumber";
import { Contacts } from "components/ButtonAdd";
import { nanoid } from 'nanoid';

export class Input extends Component {

 state = {
   contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      name: '',
      filter: '',
      number: ''
  }

handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
};

handleNumberChange = (e) => {
    this.setState({
        number: e.target.value ,
    })
};

handleNameChange = (e) => {
    this.setState({
        name: e.target.value,
    })
};

handleSubmit = (e) => {
  e.preventDefault();
  const { name, number } = this.state;
   const existingContact = this.state.contacts.find((contact) => {
  return contact.name.toLowerCase() === name.toLowerCase() && contact.number === number;
  });
  if (existingContact) {
    alert(`${name} is already in contacts.`);
    return;
  }
  const id = nanoid();
  const newContact = { id, name, number };
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
    name: '',
    number: ''
  }));
};

  render() {
      const { state, handleChange, handleNameChange, handleNumberChange, handleSubmit} = this;
      return (
        <Section>
          <H1>Phonebook</H1>
          <Search onSubmit={handleSubmit}>
            <InputName handleNameChange={handleNameChange} name={this.state.name} />
            <InputNumber handleNumberChange={handleNumberChange} number={this.state.number}/>
          <AddContact type="submit" >Add Contact</AddContact>
        </Search>
          <Contacts state={state} handleChange={handleChange}/>
        </Section>
      );
    };
};