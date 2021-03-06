import React from "react";
import { TouchableOpacity,TouchableHighlight, TextInput, Image, StyleSheet, Text, View, Dimensions, ListView, FlatList, Platform, StatusBar, ScrollView, Button } from "react-native";
import { SafeAreaView} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Grid from 'react-native-grid-component';
import { MapView } from "expo";

export default class AboutCreators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static navigationOptions = {
    title: "About The Creators",
    headerStyle: {
      backgroundColor: "red"
    },
    headerTintColor: "#fff"
  };


  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 0,
            textAlign: "center",
            alignItems: "center",
            paddingTop: 10
          }}
        >
        <Text>About the creators</Text>
        </View>
      </View>
    );
  }
}
