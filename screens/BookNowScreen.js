import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BookNowScreen() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.menuIcon}>{'\u2190'}</Text> 
        </TouchableOpacity>
      </View>

      <Text style={styles.textBox}>Book Now Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6EEFF' },
  header: { position: 'absolute', top: 50, left: 20 },
  menuIcon: { fontSize: 30 },
  textBox: { fontSize: 20 },
});
