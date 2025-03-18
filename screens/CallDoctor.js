import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function CallDoctorScreen() {
  const navigation = useNavigation();
  const [selectedDoctor, setSelectedDoctor] = useState('Personal Doctor number');

  // Create sample doctors array - replace with real data
  const doctors = [
    { name: 'Dr. John Doe', description: 'Cardiologist' },
    { name: 'Dr. Jane Smith', description: 'Pediatrician' },
    { name: 'Dr. Mike Johnson', description: 'Dermatologist' }
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.menuIcon}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Call for</Text>
        <Text style={styles.subtitle}>The Best!</Text>
      </View>

      {/* Dropdown & Input */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedDoctor}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDoctor(itemValue)}
        >
          <Picker.Item label="Personal Doctor number" value="Personal Doctor number" />
          <Picker.Item label="Emergency Doctor" value="Emergency Doctor" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter number" 
          keyboardType="phone-pad" 
        />
      </View>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      {/* Doctor List */}
      <View style={styles.doctorList}>
        {doctors.map((doctor, index) => (
          <View key={`doctor-${index}`} style={styles.doctorCard}>
            {/* Use Image component with defaultSource as fallback */}
            <Image 
              source={require('../assets/images/displaypic.png')} 
              style={styles.avatar}
              defaultSource={require('../assets/images/displaypic.png')}
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.description}>{doctor.description}</Text>
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Image 
                source={require('../assets/images/phone.png')} 
                style={styles.callIcon}
                defaultSource={require('../assets/images/phone.png')}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E6EEFF', 
    padding: 20 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 20 
  },
  backButton: {
    padding: 5,
  },
  menuIcon: { 
    fontSize: 30 
  },
  titleContainer: {
    marginBottom: 15
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  subtitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'black' 
  },
  dropdownContainer: { 
    backgroundColor: '#FFF', 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    marginVertical: 10
  },
  picker: { 
    height: 50, 
    width: '100%' 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    padding: 10, 
    borderRadius: 10 
  },
  countryCode: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginRight: 10 
  },
  input: { 
    flex: 1, 
    fontSize: 16 
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 10
  },
  orText: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  doctorList: { 
    marginTop: 10 
  },
  doctorCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20,
    marginRight: 10 
  },
  doctorInfo: {
    flex: 1
  },
  doctorName: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  description: { 
    fontSize: 14, 
    color: 'gray' 
  },
  callButton: {
    padding: 5
  },
  callIcon: { 
    width: 30, 
    height: 30
  },
});