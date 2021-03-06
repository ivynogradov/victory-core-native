/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg from "react-native-svg";
import { VictoryLabel, VictoryTooltip, VictoryContainer } from "../lib";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e1d7cd",
    flex: 1
  }
});

const Demo = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Svg height="400" width="300">
        <VictoryLabel
          x={150}
          y={150}
          text="Hello"
          textAnchor="middle"
          style={{
            fontSize: "14px",
            letterSpacing: "normal",
            fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
            fill: "black",
            stroke: "transparent",
            padding: 8,
            textAnchor: "start",
            strokeWidth: 0
          }}
        />
        <VictoryLabel
          x={150}
          y={200}
          text="wow"
          angle={"45"}
          textAnchor="middle"
          style={{
            fontSize: 25,
            fill: "black"
          }}
        />
        <VictoryTooltip active
          x={100}
          y={300}
          text={"Wow!\nTooltips!"}
        />
        <VictoryTooltip active
          x={150}
          y={350}
          text={"Wow!\nTooltips!"}
          style={{
            fontSize: 15
          }}
        />
      </Svg>
      <VictoryContainer height={400} width={300}>
        <VictoryTooltip active
          x={150}
          y={100}
          text={"Wow!\nTooltips!"}
          style={{
            fontSize: 15
          }}
        />
      </VictoryContainer>
    </ScrollView>
  );
};

AppRegistry.registerComponent("Demo", () => Demo);