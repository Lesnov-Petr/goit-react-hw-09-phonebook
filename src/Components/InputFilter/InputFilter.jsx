import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/filterContacts/filterAction";
import TextField from "@material-ui/core/TextField";

const InputFilter = () => {
  const dispatch = useDispatch();
  const onFilter = (e) => {
    let value = e.currentTarget.value;
    dispatch(filterContact(value));
  };
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="filter"
      label="Find contacts by name"
      name="filter"
      autoComplete="filter"
      onChange={onFilter}
    />
  );
};

export default InputFilter;
