import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoctorHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DoctorHome Screen</Text>
      <Text style={styles.subtitle}>Welcome to the doctor login home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff'
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: { 
    fontSize: 16, 
    color: 'gray'
  },
});

export default DoctorHome;