import { View, TextInput, Text, Button, StyleSheet, Modal } from "react-native";
import goalImage from "./assets/goal.png";

export default function GoalInput(props) {
  const { click, text, goal, visible, closeModal } = props;

  return (
    <View>
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Write your goals</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.in}
              placeholder="Enter your goal"
              placeholderTextColor="#888"
              onChangeText={text}
              value={goal}
            />
            <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={closeModal} color="#6a1b9a"  />
              <Button title="Add Goal" onPress={() => { click(); closeModal(); }} color="#6a1b9a" />
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 20,
  },
  text: {
    backgroundColor: "#6a1b9a",
    color: "white",
    padding: 15,
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#fff", // Background color for input container
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Shadow effect for iOS
  },
  in: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    width: 250,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Align buttons horizontally
    width: "100%",
    marginTop: 10, // Add some space between input and buttons
  },
});
