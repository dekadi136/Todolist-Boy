import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FontAwesome5 name="book" size={50} color="#1976D2" style={styles.icon} />
      <Text style={styles.title}>Daftar Buku Favorit</Text>
      <Text style={styles.subtitle}>Simpan dan kelola buku yang kamu sukai 📚</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(buku)/buku')}
      >
        <FontAwesome5 name="list" size={18} color="white" style={{ marginRight: 10 }} />
        <Text style={styles.buttonText}>Lihat Daftar Buku</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
