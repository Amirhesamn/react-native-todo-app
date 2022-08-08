import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
  },

  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  errorText : {
    color : "red",
    fontSize : 12,
    marginBottom : 20,
    padding : 0,
  }
});
