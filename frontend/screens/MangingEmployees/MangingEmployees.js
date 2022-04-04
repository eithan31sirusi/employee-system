import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { InnerContainer } from "../../styles/global/styles.components";

const MangingEmployees = () => {
  return (
    <>
      <CustomCard />
    </>
  );
};

const CustomCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text>Add Employee</Text>
        <Text>Employees List</Text>
      </View>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#178f7a",
    height: 200,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: "50%",
    backgroundColor: "#000",
  },
});

export default MangingEmployees;
