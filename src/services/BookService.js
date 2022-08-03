import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:8080/api/v1/';

class BookService {
  saveBook(book) {
    return axios.post(BOOK_API_BASE_URL + 'book', book);
  }

  getBooks() {
    return axios.get(BOOK_API_BASE_URL + 'books');
  }

  getBookById(id) {
    return axios.get(BOOK_API_BASE_URL + 'book/' + id);
  }

  updateBook(book, id) {
    return axios.put(BOOK_API_BASE_URL + 'book/' + id, book);
  }

  deleteBook(id) {
    return axios.delete(BOOK_API_BASE_URL + 'book/' + id);
  }
}

export default new BookService();
