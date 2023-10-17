import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/contacts/filterSlice";
import {selectContacts, selectFilter} from "redux/contacts/selectors";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {InputLabel} from "@mui/material";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  return (
    contacts.length > 1 ? (
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center', margin: '20px'}}>
        <InputLabel style={{fontSize: '20px'}} htmlFor="filter">Search by name</InputLabel>
        <TextField
          style={{maxWidth: '395px', width: '100%'}}
          onChange={event => {dispatch(changeFilter(event.target.value))}}
          margin="normal"
          id="filter"
          label="Name*"
          name="filter"
          autoComplete={filter}
          autoFocus
        />
      </div>
    ) : null
  );
}
