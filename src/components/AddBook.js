import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const AddBook = () => {
  const [book, setBook] = useState({
    id: '',
    isbn: '',
    name: '',
    author: '',
    quantity: '',
    price: '',
    date: '',
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setBook({ ...book, [e.target.name]: value });
  };

  const saveBook = (e) => {
    console.log('in saveBook');
    e.preventDefault();
    BookService.saveBook(book)
      .then((response) => {
        if (response.status === 201) {
          alert('Added book successfully.');
        }
        console.log(response);
        nav('/bookList');
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response.data);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setBook({
      id: '',
      isbn: '',
      name: '',
      author: '',
      quantity: '',
      price: '',
      date: '',
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl tracking-wider">
          <h1>Add New Book</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Book Name
          </label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">ISBN</label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={book.quantity}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">Price</label>
          <input
            type="text"
            name="price"
            value={book.price}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Publish Date
          </label>
          <input
            type="text"
            name="date"
            value={book.date}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveBook}
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400
            hover:bg-red-700 px-6 py-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
