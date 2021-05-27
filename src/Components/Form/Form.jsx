import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addContact } from "../../redux/allContacts/opirationsContacts";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import contactsSelectors from "../../redux/allContacts/contacts-selectors";

const Form = ({ contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleAddContact = (event) => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  const handleChangeName = (e) => {
    if (contacts.length === 0) {
      setName(e.target.value);
    }
    contacts.some(({ name }) =>
      name.toLowerCase() === e.target.value.toLowerCase()
        ? alert(`${name} is already in contacts`)
        : setName(e.target.value)
    );
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleAddContact}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={name}
        autoComplete="email"
        autoFocus
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Number"
        name="number"
        value={number}
        autoComplete="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        onChange={handleChangeNumber}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        add Contact
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});
export default connect(mapStateToProps)(Form);

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
