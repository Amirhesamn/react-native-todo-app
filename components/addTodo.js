import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function addTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const [errText, setErrText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };

  const handleSubmit = (val) => {
    const myPromis = new Promise((resolve) => {
      submitHandler(val);
      resolve();
    });
    myPromis.then(
      () => {
        setText("");
        setErrText("");
      },
      () => setErrText("Something bad Happend!")
    );
  };
  return (
    <View>
      <TextInput
        style={globalStyles.input}
        placeholder="New Todo ..."
        onChangeText={changeHandler}
        value={text}
      />
      {errText !== "" && <Text style={globalStyles.errorText}>{errText}</Text>}
      <Button
        onPress={() => handleSubmit(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}
