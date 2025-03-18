import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

export default function Appointment() {
  const navigation = useNavigation();
  
  // State for button press effect
  const [activeButton, setActiveButton] = useState(null);
  const [hoverButton, setHoverButton] = useState(null);
  const handlePress = (btn) => {
    setActiveButton(btn); // Turn blue
    setTimeout(() => setActiveButton(null), 100); // Revert to white after 300ms

    if (btn === 'call') navigation.navigate('CallDoctor');
  };


  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.location}>📍 Bengaluru </Text>
      </View>

      {/* Search Section */}
      <Text style={styles.heading}>Find your desired {'\n'} <Text style={styles.boldText}>Desired Right Now!</Text></Text>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Categories Section */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
          <Text style={styles.viewAll}>View All </Text>
        </TouchableOpacity>
      </View>

      {/* Categories Buttons */}
      <View style={styles.categoryContainer}>
        {['call', 'doctor', 'hospital'].map((btn) => (
          <Pressable
            key={btn}
            style={[
              styles.iconButton,
              (activeButton === btn || hoverButton === btn) && styles.iconButtonActive
            ]}
            onPress={() => {
              setActiveButton(btn);
              if (btn === 'call') navigation.navigate('CallDoctor');
            }}
            onPressOut={() => setActiveButton(null)}
            onMouseEnter={() => setHoverButton(btn)}
            onMouseLeave={() => setHoverButton(null)}
          >
            <Image source={
              btn === 'call'
                ? require('../assets/images/phone.png')
                : btn === 'doctor'
                ? require('../assets/images/doctor.png')
                : require('../assets/images/hospital.png')
            } style={styles.categoryIcon} />
          </Pressable>
        ))}
      </View>
    

      {/* Service List */}
      <ScrollView>
        <View style={styles.card}>
          <Image source={require('../assets/images/displaypic.png')} style={styles.userIcon} />
          <View style={styles.cardDetails}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.specialization}>Specialization</Text>
          </View>
          <TouchableOpacity style={styles.bookNow} onPress={() => navigation.navigate('BookNow')}>
            <Text style={styles.bookText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/images/displaypic.png')} style={styles.userIcon} />
          <View style={styles.cardDetails}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.specialization}>Specialization</Text>
          </View>
          <TouchableOpacity style={styles.bookNow} onPress={() => navigation.navigate('BookNow')}>
            <Text style={styles.bookText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E6EEFF', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  menuIcon: { fontSize: 30 },
  location: { fontSize: 14, color: 'gray' },
  heading: { fontSize: 20, marginTop: 20 },
  boldText: { fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', backgroundColor: '#FFF', padding: 10, borderRadius: 10, marginVertical: 10 },
  searchInput: { flex: 1 },
  categoryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  categoryTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAll: { color: 'blue' },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  
  // Default Icon Button Style
  iconButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    transition: 'background-color 0.3s',
  },

  // Change Background to Blue when Pressed or Hovered
  iconButtonActive: {
    backgroundColor: '#4169E1',
  },

  categoryIcon: { width: 50, height: 50 },


  card: { flexDirection: 'row', backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginVertical: 5, alignItems: 'center' },
  userIcon: { width: 50, height: 50, marginRight: 10 },
  cardDetails: { flex: 1 },
  name: { fontWeight: 'bold' },
  specialization: { color: 'gray' },
  bookNow: { backgroundColor: '#4169E1', padding: 10, borderRadius: 5 },
  bookText: { color: '#FFF' },
});
