import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';
import Book from './Book';

const BookList = () => {
  const nav = useNavigate();

  const [loading, setloading] = useState(true);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const getAllBooks = async () => {
      setloading(true);
      try {
        const response = await BookService.getBooks();
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    getAllBooks();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => nav('/addBook')}
          className="rounded bg-blue-700 text-white px-6 py-2 font-semibold"
        >
          Add New Book
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Book Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                ISBN
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Author
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Quantity
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Price
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Publish Date
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Operations
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {books.map((book) => (
                <Book book={book} key={book.id}></Book>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default BookList;
