import React from "react";
import { Icon } from 'react-native-elements/dist/Icon'
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Footer } from "../components/Footer";
import { useNavigation } from "@react-navigation/core";
const HomeUser = () => {
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', maxWidth:"100%", padding: 10, marginTop: getStatusBarHeight()}}>
        <TouchableOpacity>
        <Icon name="leftcircle" color="white" type="antdesign" style={{alignItems: 'center', padding: 10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LandingPage")} style={styles.logout}>
            <Text style={{color: 'black', fontWeight: 'bold',fontSize: 15}}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
          <Image
            source={require("../assets/logo.jpeg")}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
        </View>
      </View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate("VolLoc")}>
          <View style={styles.content}>
            <Text style={styles.button}>SEE YOUR NEARBY SAVIOURS</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("SOS")}>
          <View style={styles.content}>
            <Text style={styles.button}>EMERGENCY SOS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeUser;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    maxHeight: "100%"
  },
  header: {
    height: "35%",
    width: "100%",
    backgroundColor: "#579A78",
  },
  
  logout:{
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
      padding: 8,
      alignItems: 'center',
      height:30,
      width : 100,
      borderRadius: 10
  },
  main: {
    padding: 20,
  },
  navbar: {
    marginBottom: 80,
  },
  content: {
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    marginBottom: 30,
    borderColor: "#579A78"
  },
  button: {
    
  },
});
