import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';

export default function BookAppointment({route}) {
  const navigation = useNavigation(); 
  const doctorId=route.params?.doctorId
  const name=route.params?.name
  const specialization=route.params?.specialization


  console.log(doctorId);
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left-thick" size={28} color="black" style={{ marginLeft: -10 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
      {/* Avatar inside a bordered box */}
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle-outline" size={60} color="black" />
      </View>

      {/* Name and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{specialization}</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,                    // Needed so container fills whole screen
    justifyContent: 'flex-start', // Start from top
    alignItems: 'center', 
    backgroundColor: '#E6EEFF', 
    flexDirection: 'column' 
  },
  header: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      paddingVertical: 100,
      paddingHorizontal: 150,
      alignItems: 'center',
      margin: 50,
      elevation: 5,              
  },
  arrow: { 
    position: 'absolute', 
    top: 15, 
    left: 30, 
    backgroundColor: '#E6EEFF',   // <-- not "back", it should be backgroundColor
    zIndex: 10,                   // Keep it on top
  },
  menuIcon: { 
    fontSize: 30 
  },
  textBox: { 
    flex: 1, 
    textAlign: 'center',          // Center the text inside header
    fontSize: 20, 
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 70,
    width: '90%',  
    height:200,              // Make it responsive
  },
  name:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  description:{
    fontSize: 16,
    color: 'gray',
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 5,
    marginRight: 15,
    width: 75,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding:20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
