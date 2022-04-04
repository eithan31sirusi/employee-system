import React from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";

const CustomCard = () => {
  return (
    <View style={styles.cardWarper}>
      <View style={styles.card}>
        <Text>This is a card from the react-native-elements</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWarper: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  card: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default CustomCard;
