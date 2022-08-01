import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:8080/api/v1/';

class BookService {
  saveBook(book) {
    return axios.post(BOOK_API_BASE_URL + 'book', book);
  }

  getBooks() {
    return axios.get(BOOK_API_BASE_URL + 'books');
  }
}

export default new BookService();
