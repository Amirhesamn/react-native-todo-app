import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "./styles/global";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handlePress = (key) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.key !== key);
    });
  };

  const addTodoHandler = (todo) => {
    if (todo.length > 3) {
      setTodos((currentTodos) => {
        return [{ text: todo, key: Math.random() }, ...currentTodos];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 chars", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={addTodoHandler} />
          <View style={styles.list}>
            {todos.length === 0 ? (
              <Text style={styles.emptyText}>There is nothing todo yet!</Text>
            ) : (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={handlePress} />
                )}
              />
            )}
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    margin: 20,
    marginBottom: 50,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
  },
});
