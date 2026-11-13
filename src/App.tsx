
import { useEffect, useState } from "react";
import CreateBook from "./components/CreateBook";
import { getBooks, type Book } from "./services/booksApi";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  async function loadBooks() {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h1>Könyvtár</h1>

      <CreateBook onBookCreated={loadBooks} />

      <hr />

      <h2>Könyvek listája</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Szerző: {book.author}</p>
          <p>Db: {book.pieces}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
