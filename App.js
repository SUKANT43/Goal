import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image,StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import goalImage from "./assets/goal.png";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [val, setVal] = useState([]);
  const [goal, setGoal] = useState('');

  // Show the modal
  function visibility() {
    setVisible(true);
  }

  // Handle goal input change
  function text(e) {
    setGoal(e);  
  }

  // Add new goal to the list
  function click() {
    if (goal.trim().length === 0) return;
    setVal([...val, goal]);
    setGoal('');
    alert("Goal is Added");
  }

  // Delete a goal
  function del(e) {
    setTimeout(() => {
      setVal(val.filter((val, index) => index !== e));
      alert("Goal is Deleted");
    }, 200);
  }

  // Close the modal
  function closeModal() {
    setGoal('');
    setVisible(false);
  }

  return (
    <View style={styles.main}>
      <StatusBar/>
      {/* Display the image */}
      <Image source={goalImage} style={styles.image} />
      <View style={styles.cancel}>
      <Button title="Add new Goal" color={"purple"} onPress={visibility} />
      </View>
      {/* Pass closeModal as a prop */}
      {visible && <GoalInput text={text} click={click} goal={goal} visible={visible} closeModal={closeModal} />}
      <GoalItem val={val} del={del} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 20,
    height: "100%",
  },
  image: {
    width: 100, // Customize the size
    height: 100,
    marginBottom: 20, // Add spacing around the image
  },
  cancel:{
    borderRadius:"20%"
  }
});
