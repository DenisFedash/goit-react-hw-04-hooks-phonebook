import React from "react";
import PropTypes from 'prop-types';
import { List, ListItem, ButtonList } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => <ListItem key={id}>
                <p>{name}: {number}</p>
                <ButtonList onClick={() => onDeleteContact(id)}>Delete</ButtonList>
            </ListItem>)}
        </List>
    )    
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};