import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Container, TextName, Input, Button } from "./ContactForm.styled";


export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''});
    }

    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value})
  }
    render() {
        return (
            <Container onSubmit={this.handleSubmit}>
                <TextName>
                    Name<Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </TextName>
                <TextName>
                    Number<Input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </TextName>
                <Button type="submit">Add contact</Button>
            </Container>
        )
    }      
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};