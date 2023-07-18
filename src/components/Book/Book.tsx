import { useLoaderData } from 'react-router-dom';
import { Books } from './Books';

const Book = () => {
  const loaderData = useLoaderData();

  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      {loaderData.map((book) => (
        <Books
          key={book.id}
          name={book.name}
          des={book.des}
          image={book.image}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default Book;
