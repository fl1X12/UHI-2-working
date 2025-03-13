import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const SchedulePage = () => {
  const navigation = useNavigation();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
          <Icon name="menu" size={28} color="black" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="calendar" size={24} color="black" style={{ marginRight: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PrescriptionList")}>
            <Icon name="notebook" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="microphone" size={28} color="black" style={{ marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Time Selection Tabs */}
      <View style={styles.tabContainer}>
        {["Morning", "Afternoon", "Evening", "Night"].map((time) => (
          <TouchableOpacity key={time} style={styles.tab}>
            <Text style={styles.tabText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Prescription List */}
      <ScrollView>
        {days.map((day, index) => (
          <TouchableOpacity key={index} style={styles.dayCard}>
            <Text style={styles.dayText}>{day}</Text>
            <View style={styles.iconRow}>
              <Icon name="pill" size={20} color="black" />
              <Icon name="pill" size={20} color="black" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Icon name="chevron-left" size={24} color="black" />
        <Icon name="food" size={24} color="black" />
        <Text style={styles.footerText}>Before</Text>
        <Icon name="chevron-right" size={24} color="black" />
        <Icon name="chevron-left" size={24} color="black" />
        <Icon name="food-off" size={24} color="black" />
        <Text style={styles.footerText}>After</Text>
        <Icon name="chevron-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default SchedulePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE8FF",
  },
  header: {
    backgroundColor: "#6DA5FA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  tab: {
    backgroundColor: "#6DA5FA",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  tabText: {
    color: "white",
    fontWeight: "bold",
  },
  dayCard: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    gap: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
