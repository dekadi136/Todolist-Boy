import { View, StyleSheet } from 'react-native';
import BookForm from '../../components/molecules/BookForm';
import BookList from '../../components/organisms/BookList';
import { BookProvider } from '../../context/BookContext';

export default function BookScreen() {
  return (
    <BookProvider>
      <View style={styles.container}>
        <BookForm />
        <BookList />
      </View>
    </BookProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
