import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import TodoForm from '../../components/molecules/TodoForm';
import TodoList from '../../components/organisms/TodoList';
import { TodoProvider } from '../../context/TodoContext';

export default function TodoScreen() {
  return (
    <TodoProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>📝 To-Do List</Text>
          <TodoForm />
          <ScrollView style={styles.listWrapper}>
            <TodoList />
          </ScrollView>
        </View>
      </SafeAreaView>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  listWrapper: {
    marginTop: 10,
    flex: 1,
  },
});
