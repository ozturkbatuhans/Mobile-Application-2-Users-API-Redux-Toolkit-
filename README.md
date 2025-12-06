# Mobile Application 2 – Users API (Redux Toolkit)

This project is a React Native (Expo) application that demonstrates how to fetch data from an external API using **Redux Toolkit**, **createAsyncThunk**, **extraReducers**, and **createSelector**.

The application retrieves a list of users from the DummyJSON API and displays them in a styled list.

---

## Features

- Fetches data from an external API (`https://dummyjson.com/users`)
- Uses **Redux Toolkit** for state management
- Implements **createAsyncThunk** for asynchronous API calls
- Handles loading and error states with **extraReducers**
- Uses **createSelector** for derived and memoized state
- Clear separation between:
  - Container components (Redux logic)
  - Pure UI components (presentation only)

---

## Project Structure
    src/
    store/
    store.js
    features/
    users/
    usersSlice.js
    usersSelectors.js
    components/
    UsersContainer.jsx
    UsersList.jsx
    UserItem.jsx
    App.js


---

## Redux Logic Explained

### createAsyncThunk
`fetchUsers` is created using `createAsyncThunk` to asynchronously fetch users from the API.

It automatically generates:
- `pending`
- `fulfilled`
- `rejected`

actions, which are handled in `extraReducers`.

### extraReducers
`extraReducers` updates the state based on the async request status:
- `loading` while fetching
- `succeeded` when data is received
- `failed` when an error occurs

### createSelector
`createSelector` is used to create memoized selectors.
In this project, users are sorted alphabetically by `firstName`.

---

## Components

### UsersContainer
- Connects to the Redux store
- Dispatches `fetchUsers`
- Reads users, status, and error from the store
- Decides what to render based on the current state

### UsersList & UserItem
- Pure UI components
- Receive data via props only
- Do not depend on Redux directly

---

## ▶️ How to Run the Project

1. Install dependencies:

       npm install

2. Start the Expo development server:

        npx expo start

3. Open the app using Expo Go or an emulator.
