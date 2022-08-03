import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<BookList />} />
          <Route path="/" element={<BookList />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/updateBook/:id" element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
