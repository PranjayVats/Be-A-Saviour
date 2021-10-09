import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import footerbg from "../assets/splash.png";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image style={styles.backgroundImage} />
      <View style={styles.footerContent}>
        <Text style={styles.supportText}>Support</Text>
        <Text style={styles.touch}>
          To get in touch with us, write us at mankeswapnil0@gmail.com
        </Text>
        <Text style={styles.rights}>
          All Rights Reserved | © 2021
        </Text>
      </View>
    </View>
  );
};

export { Footer };

const styles = StyleSheet.create({
  footer: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    marginTop: 20,
    backgroundColor: "#579A78",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
    maxHeight: 200,
    maxWidth: Dimensions.get("screen").width,
    zIndex: 1,
  },
  footerContent: {
    position: "absolute",
    top: 55,
    left: 0,
    marginLeft: 20,
    marginRight: 40,
    minHeight: 200,
    maxWidth: Dimensions.get("screen").width,
    zIndex: 2,
  },
  supportText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  touch: {
    color: "#fff",
    fontSize: 15,
    marginTop: 8,
  },
  rights: {
    marginTop: 30,
    color: "#bdbdbd",
  },
});
