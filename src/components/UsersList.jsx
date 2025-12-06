import React from 'react';
import { FlatList } from 'react-native';
import UserItem from './UserItem';

const UsersList = ({ users }) => {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 10 }}
      renderItem={({ item }) => <UserItem user={item} />}
    />
  );
};

export default UsersList;
