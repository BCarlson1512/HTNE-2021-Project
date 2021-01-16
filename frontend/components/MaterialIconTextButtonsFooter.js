import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";





const styles = StyleSheet.create({
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

  loadInPage: {

  }
});

export default MaterialIconTextButtonsFooter;
