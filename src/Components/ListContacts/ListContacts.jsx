import { useSelector } from "react-redux";
import ContactItem from "../ContactItem";
import { contactsSelectors } from "../../redux/allContacts";

const ListContacts = () => {
  const isFilterName = useSelector(contactsSelectors.getIsFilterContacts);

  return (
    <ul>
      {isFilterName.map(({ id, name, number }) => (
        <ContactItem id={id} key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ListContacts;
