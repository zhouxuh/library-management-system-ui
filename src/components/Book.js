import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ book, deleteBook }) => {
  const nav = useNavigate();
  const editBook = (e, id) => {
    e.preventDefault();
    nav(`/updateBook/${id}`);
  };

  return (
    <tr key={book.id}>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{book.name}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{book.isbn}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{book.author}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-">
        <div className="text-lg text-gray-500">{book.quantity}</div>
      </td>

      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{book.price}</div>
      </td>

      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{book.date}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-base space-x-4">
        <button
          onClick={(e) => editBook(e, book.id)}
          className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
        >
          Edit
        </button>
        <button
          onClick={(e) => deleteBook(e, book.id)}
          className="rounded text-white font-semibold bg-red-400
            hover:bg-red-700 px-5 py-2 shadow border-b-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Book;
