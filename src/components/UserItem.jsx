import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserItem = ({ user }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },
  email: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
});

export default UserItem;
