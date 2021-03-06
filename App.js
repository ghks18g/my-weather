import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loding";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
