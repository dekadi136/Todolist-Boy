import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

export default function BookList() {
  const { books, removeBook, editBook } = useContext(BookContext);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const startEditing = (book) => {
    setEditingId(book.id);
    setNewTitle(book.title);
    setNewAuthor(book.author);
  };

  const saveEdit = () => {
    editBook(editingId, newTitle, newAuthor);
    setEditingId(null);
    setNewTitle('');
    setNewAuthor('');
  };

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          {editingId === item.id ? (
            <>
              <TextInput value={newTitle} onChangeText={setNewTitle} placeholder="Judul Baru" />
              <TextInput value={newAuthor} onChangeText={setNewAuthor} placeholder="Penulis Baru" />
              <Button title="💾 Simpan Perubahan" onPress={saveEdit} />
            </>
          ) : (
            <>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>✍️ {item.author}</Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => startEditing(item)} style={styles.editBtn}>
                  <MaterialIcons name="edit" size={22} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeBook(item.id)} style={styles.deleteBtn}>
                  <FontAwesome name="trash" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: '#e1f5fe',
    marginBottom: 12,
    borderRadius: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#03a9f4',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0077c2',
    marginBottom: 4,
  },
  author: {
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  editBtn: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 6,
  },
  deleteBtn: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 6,
  },
});
