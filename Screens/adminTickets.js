import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, StatusBar, Text, View, Alert, Box, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import {WebView} from "react-native-webview";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const orderHtml = require("../android/src/main/assets/orderTableHtml.html")

var orderFlag = 0;
var formFlag = 1;
var profileFlag = 0;



function adminTickets(props) {
    return (
        <View style={styles.MaterializeContainer}>
            
            <StatusBar barStyle="light-content" />
            <MaterialIconTextButtonsFooter
            style={styles.materialIconTextButtonsFooter}
            ></MaterialIconTextButtonsFooter>

            <Text style={styles.loadInPage}>Current Orders</Text>

            <WebView style={styles.containerTable} source={{uri: "file:C:/orderSystem/html/orderTableHtml.html"}}/>
            
        </View>
    );
}





function MaterialIconTextButtonsFooter(props) {
    return (
      <View style={[styles.container, props.style]}>
        
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
      justifyContent: 'flex-start',
      backgroundColor: '#282c34'
    },
    materialIconTextButtonsFooter: {
      flex: 0.1,
      width: '100%',
      backgroundColor: "rgba(222,222,222,1)",
      bottom: 0,
      marginBottom: 0
    },
    loadInPage: {
        marginVertical: 20,
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
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

      containerTable: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#282c34",
        color:'white'
      },

      buttonWrapper1: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 12,
        
        maxWidth: '50%',
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
        
        maxWidth: '50%',
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
        
        maxWidth: '50%',
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