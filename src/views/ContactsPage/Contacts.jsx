import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { contactsSelectors } from "../../redux/allContacts";
import { loadingContacts } from "../../redux/allContacts/opirationsContacts";
import Form from "../../Components/Form";
import InputFilter from "../../Components/InputFilter";
import Loader from "react-loader-spinner";
import ListContacts from "../../Components/ListContacts";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  Phonebook: {
    width: 200,
    marginRight: 20,
  },
});

const Contacts = () => {
  const style = useStyles();
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingContacts());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <div className={style.Phonebook}>
        <Form />
      </div>

      <div className={style.contacts}>
        <InputFilter />
        {isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        ) : (
          <ListContacts />
        )}
      </div>
    </div>
  );
};

export default Contacts;
