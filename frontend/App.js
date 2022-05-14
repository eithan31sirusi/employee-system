import React from "react";

//React native navigation

import RootStack from "./navigators/RootStack";
import Users from "./screens/Users/Users";

import MangingEmployees from "./screens/MangingEmployees/MangingEmployees";

export default function App() {
  // return <RootStack />;
  return <MangingEmployees />;
}
