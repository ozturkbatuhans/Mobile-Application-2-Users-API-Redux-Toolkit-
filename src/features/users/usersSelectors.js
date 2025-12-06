import { createSelector } from '@reduxjs/toolkit';

export const selectUsersState = (state) => state.users;

export const selectUsers = createSelector(
  [selectUsersState],
  (usersState) => usersState.users
);

export const selectUsersSortedByName = createSelector(
  [selectUsers],
  (users) =>
    users && users.length > 0
      ? [...users].sort((a, b) => a.firstName.localeCompare(b.firstName))
      : []
);

export const selectUsersStatus = (state) => state.users.status;
export const selectUsersError = (state) => state.users.error;
