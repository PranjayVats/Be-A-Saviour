import { useNavigation } from "@react-navigation/core";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";
import { Footer } from "../components/Footer";
import { Icon } from 'react-native-elements/dist/Icon'

const HomeVolunteer = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LandingPage");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', maxWidth:"100%", padding: 10, marginTop: getStatusBarHeight()}}>
        <TouchableOpacity>
        <Icon name="leftcircle" color="white" type="antdesign" style={{alignItems: 'center', padding: 10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.logout}>
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
        
          <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Upload")} style={styles.button}>
            <Text>Upload Your Identity Proof</Text>
          </TouchableOpacity>
          
        
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeVolunteer;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  header: {
    height: "40%",
    width: "100%",
    backgroundColor: "#579A78",
  },
  main: {
    padding: 20,
    justifyContent: "center",
    alignItems: 'center'
  },
  logout:{
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
    height:30,
    width : 100,
    borderRadius: 10,
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
  },
  button: {
    backgroundColor: "white",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
