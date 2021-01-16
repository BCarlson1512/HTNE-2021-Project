import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, StatusBar, Text, View, Alert, Box, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

var orderFlag = 0;
var formFlag = 1;
var profileFlag = 0;

function adminTickets(props) {

    if (orderFlag == 1) {
        return adminOrders();
    }
    else if (formFlag == 1) {
        return adminForm();
    }
    
}

function adminOrders(props) {
    return (
        console.log("hi"),
        <View style={styles.MaterializeContainer}>
            
            <Text style={styles.loadInPage}>Test Orders</Text>

            <StatusBar barStyle="light-content" />
            <MaterialIconTextButtonsFooter
            style={styles.materialIconTextButtonsFooter}
            ></MaterialIconTextButtonsFooter>
            
        </View>
    );
}

function adminForm() {
    return (

        <View style={styles.MaterializeContainer}>
            
            <Text style={styles.loadInPage}>Test Forms</Text>
            {console.log("hi")}
            <StatusBar barStyle="light-content" />
            <MaterialIconTextButtonsFooter
            style={styles.materialIconTextButtonsFooter}
            ></MaterialIconTextButtonsFooter>
            
        </View>
    );
}

function loadOrders() {
    orderFlag = 1;
    formFlag = 0;
    profileFlag = 0;
    adminTickets();
}

function MaterialIconTextButtonsFooter(props) {
    return (
      <View style={[styles.container, props.style]}>
        <TouchableOpacity style={styles.buttonWrapper1}
          onPress={() => loadOrders()}>
          
          <MaterialCommunityIconsIcon
            name="alert-circle-outline"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.ticketsOrders}>Tickets/Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeButtonWrapper}>
          <MaterialCommunityIconsIcon
            name="library-books"
            style={styles.activeIcon}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.formOptions}>Form Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <MaterialCommunityIconsIcon
            name="account-edit"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.profile}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    MaterializeContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#282c34'
    },
    materialIconTextButtonsFooter: {
      flex: 0.1,
      width: '100%',
      backgroundColor: "rgba(222,222,222,1)",
      bottom: 0,
    },
    loadInPage: {
        
        color: 'white',
        fontSize: 80
    },

    container: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        shadowColor: "#111",
        shadowOffset: {
          width: 0,
          height: -2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 3
      },
      buttonWrapper1: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 12,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
      },
      icon1: {
        backgroundColor: "transparent",
        color: "rgba(1,138,255,1)",
        fontSize: 24,
        opacity: 0.8
      },
      ticketsOrders: {
        fontSize: 14,
        color: "rgba(1,138,255,1)",
        backgroundColor: "transparent",
        paddingTop: 4,
        alignSelf: "center"
      },
      activeButtonWrapper: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 10,
        paddingHorizontal: 12,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
      },
      activeIcon: {
        backgroundColor: "transparent",
        color: "rgba(1,138,255,1)",
        fontSize: 24,
        opacity: 0.8
      },
      formOptions: {
        fontSize: 14,
        color: "rgba(1,138,255,1)",
        backgroundColor: "transparent",
        paddingTop: 4,
        alignSelf: "center"
      },
      buttonWrapper2: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 12,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
      },
      icon2: {
        backgroundColor: "transparent",
        color: "rgba(1,138,255,1)",
        fontSize: 24,
        opacity: 0.8
      },
      profile: {
        fontSize: 14,
        color: "rgba(1,138,255,1)",
        backgroundColor: "transparent",
        paddingTop: 4,
        alignSelf: "center"
      },
  });

export default adminTickets;