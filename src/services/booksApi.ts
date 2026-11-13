
export interface Book {
  id: number;
  title: string;
  author: string;
  pieces: number;
}

const API_URL = "http://127.0.0.1:8000/api/books";

export async function getBooks(): Promise<Book[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Nem sikerült lekérni a könyveket!");
  }

  return response.json();
}

export async function createBook(book: Omit<Book, "id">) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(book),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Sikertelen feltöltés!");
  }

  return data.data;
}
