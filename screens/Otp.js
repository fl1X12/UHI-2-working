import Constants from "expo-constants";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OtpScreen = ({ route }) => {
  const { phoneNumber, isDoctorLogin } = route.params || {};
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const navigation = useNavigation();
  const IP_ADDRESS=Constants.expoConfig.extra.IP_ADDRESS;

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setOtpError(true);
      return;
    }
    setOtpError(false);
    try {
      console.log("Verifying OTP for:", phoneNumber);
      const response = await fetch(`http://${IP_ADDRESS}:5500/verifyOTP`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("OTP verified successfully:", result);
        if (isDoctorLogin) {
          navigation.navigate("DocHome");
        } else {
          navigation.navigate("MainDrawer");
        }
      } else {
        console.error("OTP verification failed:", result.error);
      }
    } catch (error) {
      console.error("Network error verifying OTP:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>OTP sent to {phoneNumber || "Unknown"}</Text>

      <TextInput
        style={[styles.otpInput, otpError && styles.inputError]}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => {
          setOtp(text);
          setOtpError(false);
        }}
      />

      {otpError && <Text style={styles.errorText}>Please enter OTP</Text>}

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: "gray", 
    marginBottom: 20 
  },
  otpInput: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    fontSize: 18, 
    width: "80%", 
    textAlign: "center" 
  },
  inputError: { 
    borderColor: "red", 
    borderWidth: 2 
  },
  errorText: { 
    color: "red", 
    fontSize: 14, 
    marginTop: 5 
  },
  verifyButton: { 
    marginTop: 20, 
    backgroundColor: "#8881f7", 
    padding: 15, 
    borderRadius: 8 
  },
  buttonText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});

export default OtpScreen;