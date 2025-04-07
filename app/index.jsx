import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4779/4779611.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Selamat Datang di ToDoList</Text>
      <Text style={styles.subtitle}>Aplikasi Todo List By I Wayan Dika Darma Putra (35)</Text>
      <View style={styles.buttonContainer}>
        <Button title="Buat ToDo List" color="#4CAF50" onPress={() => router.push('/(todo)/todo')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
