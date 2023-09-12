import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default function App() {
     const [todos, setTodos] = useState([
          {Text: "Onvail Frontend", key: "1"},
          {Text: "Take my bath", key: "2"},
          {Text: "Read the book i bought", id: "3"}
     ])
     
  return (
    <View style={styles.container}>
          <Header />
          <View style={styles.content}>
               {/* forms */}
                <View style={style.list}>
                  <FlatList 
                    data={todos}
                    renderItem={({item}) => (
                      <Text>{item.text}</Text>
                    )}
                  />
                </View>
          </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
  
});
