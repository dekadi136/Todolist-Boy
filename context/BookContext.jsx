import { createContext, useState } from 'react';

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    setBooks([...books, { id: Date.now(), title, author }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, newTitle, newAuthor) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, title: newTitle, author: newAuthor } : book
      )
    );
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, editBook }}>
      {children}
    </BookContext.Provider>
  );
}
