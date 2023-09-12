import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
     const [people, setPeople] = useState([
          {name: "Bright", id: "1"},
          {name: "Paul", id: "2"},
          {name: "Ralph", id: "3"},
          {name: "Uche", id: "4"},
          {name: "Beh", id: "5"},
          {name: "Greg", id: "6"},
     ])
     
     const pressHandler = (id) => {
          setPeople((prevPeople) => {
               return prevPeople.filter(person => person.id != id)
          })
     }

  return (
    <View style={styles.container}>
          <FlatList 
               numColumns={2}
               keyExtractor={(item) => item.id}
               data={people}
               renderItem={({item}) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                         <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
               )}
          />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
  },
  item: {
     marginTop: 24,
     padding: 30,
     backgroundColor: "pink",
     fontSize: 24,
     marginHorizontal: 10,
     marginTop: 24
  }
});
