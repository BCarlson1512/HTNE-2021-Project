import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, Footer, ScrollView, StatusBar, Text, View, Alert, Box, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from "react-native-table-component";
import {MaterialCommunityIconsIcon} from "react-native-vector-icons/MaterialCommunityIcons";

//const orderHtml = require("../android/src/main/assets/orderTableHtml.html")

var orderFlag = 0;
var formFlag = 1;
var profileFlag = 0;


export default class adminTickets extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      tableHead: ['E-Mail', 'Description', 'Status'],
      tableData: [
        ["bepis@bepis.com", "Looking for a web application", "Incomplete"],
        ["john@deer.com", "Looking at purchasing a product", "Complete"],
        ["john@deer.com", "Looking at purchasing a product", "Complete"],
        
      ]
    }
  }


    render () {
      const state = this.state;

      

      return (
        <SafeAreaView style={styles.SafeAreaContainer}>
        <ScrollView style={styles.MaterializeContainer}>
            <Text style={styles.loadInPage}>Current Orders</Text>

            <Table borderStyle={{borderWidth: 2, borderColor: '#fff' }}>
              <Row data={this.state.tableHead} style={styles.head}/>
              <Rows data={this.state.tableData} textStyle={styles.text}/>
            </Table>
        </ScrollView>
        

          <TouchableOpacity title="Profile Options" style={styles.button1}>
            <Text style={styles.text1}>Profile Options</Text>
          </TouchableOpacity>
          <TouchableOpacity title="Form Options (Coming Soon)" style={styles.button2}>
            <Text style={styles.text2}>Form Options (Coming Soon!)</Text>
          </TouchableOpacity>


        </SafeAreaView>
      );
    }
}







const styles = StyleSheet.create({
    MaterializeContainer: {
      flex: 0.9,
      backgroundColor: '#282c34', 
      
    },
    SafeAreaContainer: {
      flex: 1,
      backgroundColor: '#fff'
    },
    materialIconTextButtonsFooter: {
      flex: 0.1,
      width: '100%',
      backgroundColor: "rgba(222,222,222,1)",
      bottom: 0,
      marginBottom: 0
    },
    loadInPage: {
        marginVertical: 60,
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 60,
    },

    head: { height: 40, backgroundColor: '#f1f8ff', color:'black', textAlign:'center'},
    text: {
      color: 'white', 
      textAlign:'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'dodgerblue',
      
    },

    text1: {
      color: 'white', 
      textAlign:'center',
      alignItems: 'center',
      justifyContent: 'center',
     
      height: 40,
    },

    text2: {
      color: 'white', 
      textAlign:'center',
      alignItems: 'center',
      justifyContent: 'center',
      
      height: 40,
    },

    button1: {
      alignItems: "center",
      backgroundColor: "dodgerblue",
      padding: 10
    },

    button2: {
      alignItems: "center",
      backgroundColor: "darkblue",
      padding: 10
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
        
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 12,
        alignItems: "center",
        color: 'black'
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

