import { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { BookContext } from '../../context/BookContext';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { addBook } = useContext(BookContext);

  const handleAdd = () => {
    if (title.trim() && author.trim()) {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput value={title} onChangeText={setTitle} placeholder="📖 Judul Buku" />
      <TextInput value={author} onChangeText={setAuthor} placeholder="✍️ Nama Penulis" />
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="plus-circle" size={20} color="white" style={styles.icon} />
        <Button title="Tambah Buku" onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
});
