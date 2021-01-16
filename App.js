import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert, Box, TouchableWithoutFeedback, SafeAreaView, Platform } from 'react-native';
import LoginSignup from './Screens/LoginSignup';
import TicketAdmin from './Screens/adminTickets';

const boxWidth = '80%';
const boxHeight = '60%';

export default function App() {
  return (<TicketAdmin/>)
}

