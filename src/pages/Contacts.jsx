import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet';
import {Filter} from "../components/Filter/Filter";
import {fetchContacts} from "../redux/contacts/operations";
import AddContact from "../components/mui_components/add_contact";
import {Toaster} from 'react-hot-toast';
import MultiActionAreaCard from "../components/mui_components/contact_card";

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ width: '100%' }}>
      <div style={{marginTop: '5%'}}>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <AddContact/>
      </div>
      <div>
        <Filter/>
      </div>
      <div>
        <MultiActionAreaCard/>
      </div>
      <Toaster/>
    </div>
  );
}
