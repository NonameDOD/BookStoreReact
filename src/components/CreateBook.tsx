
import { useState, type FormEvent } from "react";
import { createBook } from "../services/booksApi";

interface Props {
  onBookCreated: () => void;
}

function CreateBook({ onBookCreated }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [pieces, setPieces] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      await createBook({
        title,
        author,
        pieces: Number(pieces),
      });

      setMessage("Sikeres feltöltés!");

      setTitle("");
      setAuthor("");
      setDescription("");
      setPieces("");

      // Könyvek listájának frissítése
      onBookCreated();

    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Hiba történt!"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Új könyv feltöltése</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Könyv címe</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Szerző</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Leírás</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Db: </label>
          <input
            type="number"
            min="0"
            value={pieces}
            onChange={(e) => setPieces(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Küldés..." : "Küldés"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateBook;
