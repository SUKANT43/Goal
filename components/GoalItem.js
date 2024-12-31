import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  const { val, del } = props;
  return (
    <View style={styles.goalContainer}>
      <FlatList
        style={styles.goalList}
        data={val}
        renderItem={({ item, index }) => (
          <Pressable
            android_ripple={{
              color: "#ddd", // Light grey ripple color for better contrast
              borderless: true, // Remove ripple bounds around the item
              radius: 30, // Optional: Customize ripple radius
            }}
            onPress={() => del(index)}
          >
            <Text style={styles.out}>{item}</Text>
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()} // Ensure unique key for each item
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  goalList: {
    marginTop: 20,
    paddingBottom: 10,
  },
  out: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default GoalItem;
