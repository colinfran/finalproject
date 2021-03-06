import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import {Typography, Colors} from 'react-native-ui-lib';
// import { login } from '../api/auth'
import { AsyncStorage, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from "react-native"
import { signUserIn } from '../api/auth';
import renderIf from "../assets/renderIf";

import SplashScreen from './SplashScreen';


import { Permissions, Notifications } from 'expo';

Colors.loadColors({
  red: 'red',
});


export default class SignupLogin extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(this);

    this.state = {
      loading: false,
      email:"",
      password: "",
      token: "",
    };


  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',

  };

  componentDidMount(){
    this.registerForPushNotificationsAsync();
  }


  async registerForPushNotificationsAsync () {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let tokenVar = await Notifications.getExpoPushTokenAsync();
    console.log('PushNotificationToken:'+ tokenVar);
    this.setState({token: tokenVar})
  }

  async onLogin() {
    if (this.state.email == "" || this.state.password == "")
      return;
    this.setState({loading:true});
    // console.log("Here");
    // var loggedIn = signUserIn(this.state.email, this.state.password);
    console.log("email: " + this.state.email);
    console.log("email: " + this.state.password);

    var userSignedIn = signUserIn(this.state.email, this.state.password, this);
    // console.log('userSignedIn: '+userSignedIn);
    // if (userSignedIn)
    //   return this.props.navigation.navigate('Emergencies');

  }

  async onSignup() {
    this.props.navigation.navigate('Signup', { token: this.state.token});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        {renderIf(
          this.state.loading,
          <SplashScreen/>
        )}

        {renderIf(
          !this.state.loading,
          <TouchableWithoutFeedback
            style={{ flex: 1, flexDirection: "column" }}
            onPress={() => Keyboard.dismiss()}
          >
          <View flex red paddingH-25 paddingT-40>

          <Text red text10>Welcome</Text>

            <Text red text50>Sign In</Text>
            <View style={[{padding: 16}]}></View>

            <TextInput text50
              placeholder="Email"
               dark10
               returnKeyType = {"next"}
               onChangeText={(value) => this.setState({email: value})}
               value={this.state.email}
               onSubmitEditing={() => { this.passwordTextInput.focus(); }}
               />
            <TextInput text50
              ref={(input) => { this.passwordTextInput = input; }}
              placeholder="Password"
              secureTextEntry dark10
              returnKeyType={"go"}
              onChangeText={(value) => this.setState({password: value})}
              value={this.state.password}
              onSubmitEditing={this.onLogin}
              />
            <View marginT-100 center>
              <Button text70 white background-red label="Login" onPress={this.onLogin}/>
              <Button link text70 red label="Sign Up" marginT-20 onPress={this.onSignup}/>
            </View>
          </View>
        </TouchableWithoutFeedback>

        )}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
