import React from 'react';

const Book = ({ book }) => {
  return (
    <tr key={book.id}>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{book.name}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{book.isbn}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{book.author}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-">
        <div className="text-sm text-gray-500">{book.quantity}</div>
      </td>

      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{book.price}</div>
      </td>

      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{book.date}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a className="text-blue-700 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a className="text-red-700 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Book;
