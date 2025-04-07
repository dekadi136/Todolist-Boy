import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Feather } from '@expo/vector-icons'; // icon library

export default function TodoList() {
  const { todos, removeTodo, startEdit } = useContext(TodoContext);

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => startEdit(item)}>
                <Feather name="edit" size={20} color="#4CAF50" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeTodo(item.id)}>
                <Feather name="trash-2" size={20} color="#f44336" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {todos.length === 0 && (
        <Text style={{ textAlign: 'center', color: '#888', marginTop: 30 }}>
          Tidak ada todolist, tolong buat todolist!
        </Text>
      )}
    </View>
  );  
}


const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  text: {
    flex: 1,
    marginRight: 10,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
});
