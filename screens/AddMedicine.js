import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

const AddMedicinePage = ({ route }) => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [day, setDay] = useState("Mon");
  const [timeSlot, setTimeSlot] = useState("Morning");
  const [mealPreference, setMealPreference] = useState("Before");
  const [patientId, setPatientId] = useState("");

  const handleAddMedicine = async () => {
    if (name.trim() && dosage.trim() && patientId.trim()) {
      try {
        const schedule = [{ day, time: timeSlot, beforeMeal: mealPreference === "Before" }];
        const response = await axios.post("http://192.168.250.159:5000/medicines", {
          name,
          dosage,
          schedule,
          patientId,
        });

        if (response.status === 200) {
          alert("Medicine added successfully!");
          route.params.fetchMedicines();
          navigation.goBack();
        } else {
          alert("Failed to add medicine");
        }
      } catch (error) {
        console.error("Error adding medicine:", error);
      }
    } else {
      alert("Please enter medicine name, dosage, and patient ID");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Add New Medicine</Text>
        <TextInput style={styles.input} placeholder="Enter patient ID" value={patientId} onChangeText={setPatientId} />
        <TextInput style={styles.input} placeholder="Enter medicine name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Enter dosage (e.g., 500mg)" value={dosage} onChangeText={setDosage} />
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Day</Text>
          <Picker selectedValue={day} style={styles.picker} onValueChange={(itemValue) => setDay(itemValue)}>
            <Picker.Item label="Monday" value="Mon" />
            <Picker.Item label="Tuesday" value="Tue" />
            <Picker.Item label="Wednesday" value="Wed" />
            <Picker.Item label="Thursday" value="Thu" />
            <Picker.Item label="Friday" value="Fri" />
            <Picker.Item label="Saturday" value="Sat" />
            <Picker.Item label="Sunday" value="Sun" />
            <Picker.Item label="Weekdays" value="Weekdays" />
            <Picker.Item label="Weekends" value="Weekends" />
            <Picker.Item label="Everyday" value="Everyday" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Time</Text>
          <Picker selectedValue={timeSlot} style={styles.picker} onValueChange={(itemValue) => setTimeSlot(itemValue)}>
            <Picker.Item label="Morning" value="Morning" />
            <Picker.Item label="Afternoon" value="Afternoon" />
            <Picker.Item label="Evening" value="Evening" />
            <Picker.Item label="Night" value="Night" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Meal Preference</Text>
          <Picker selectedValue={mealPreference} style={styles.picker} onValueChange={(itemValue) => setMealPreference(itemValue)}>
            <Picker.Item label="Before Meal" value="Before" />
            <Picker.Item label="After Meal" value="After" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddMedicine}>
          <Text style={styles.buttonText}>Add Medicine</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddMedicinePage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F4FF",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#0256A3",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
    color: "#0256A3",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  addButton: {
    backgroundColor: "#0256A3",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
