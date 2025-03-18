const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// In-memory store for OTPs (for demonstration only)
const otpStore = {};

// Twilio configuration – replace these with your actual credentials
const accountSid = 'AC8c3b868b6de2434955bb494c68c3d4c6';
const authToken = '922319759ab9c1f729d9297f8d2ff6d1';
const twilioPhoneNumber = '+18623754950';
const client = twilio(accountSid, authToken);

// Endpoint to send OTP
app.post('/sendOTP', async (req, res) => {
  const { phoneNumber } = req.body;
  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required' });
  }
  
  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store the OTP temporarily (in production, add an expiry mechanism)
  otpStore[phoneNumber] = otp;
  
  try {
    // Use Twilio to send the OTP via SMS
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber
    });
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Endpoint to verify OTP
app.post('/verifyOTP', (req, res) => {
  const { phoneNumber, otp } = req.body;
  if (!phoneNumber || !otp) {
    return res.status(400).json({ error: 'Phone number and OTP are required' });
  }
  
  const storedOtp = otpStore[phoneNumber];
  if (storedOtp === otp) {
    // OTP is valid – remove it from the store
    delete otpStore[phoneNumber];
    return res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ error: 'Invalid OTP' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
