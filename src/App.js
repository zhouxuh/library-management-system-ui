import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
