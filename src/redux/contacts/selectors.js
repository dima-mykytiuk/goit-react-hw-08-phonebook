import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContactItems = createSelector([selectContacts, selectFilter], (contacts, filter) => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())));
