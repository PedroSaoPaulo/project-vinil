import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";

import NewMusic from "./src/components/NewMusic";
import Header from "./src/components/Header";

import Axios from "axios";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    Axios.get("http://10.10.0.213:3001/items").then((response) => {
      setMusicList(response.data);
    });
  }, [musicList]);
  

  const appendItem = () => {
    if (inputText === "") return;

    Axios.post("http://10.10.0.213:3001/item", { item: inputText });

    setInputText("");
  };

  const deleteItem = (id) => {
    Axios.delete(`http://10.10.0.213:3001/item/${id}`);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            style={styles.textInput}
            placeholder="Informe sua música"
            placeholderTextColor="#569DAA"
          />
        </View>
        <View style={styles.inputSubmitContainer}>
          <Button onPress={appendItem} color="#569DAA" title="OK" />
        </View>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          data={musicList}
          renderItem={({ item }) => (
            <NewMusic props={item} onPress={deleteItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9EDDD",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
  },

  textInputContainer: {
    margin: 5,
    justifyContent: "center",
  },

  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  inputSubmitContainer: {
    margin: 5,
    justifyContent: "center",
  },

  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
