import logo from './logo.svg';
import './App.css';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

export const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
];

export const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/20201' } 

function App() {
  const { booksData, blogsData, coursesData } = props;

  const bookdet = booksData && booksData.length > 0 ? (
    <ul>
      {booksData.map((book)=>(
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  ) : (
    <p>No books available</p>
  );

  const content = blogsData && blogsData.length > 0 && (
    <ul>
      {blogsData.map((blog)=>(
        <div key={blog.id} className='blog-item'>
          <h2>{blog.title}</h2>
          <h3>{blog.author}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  let coursedet = <p>Loading courses...</p>
  if(coursesData && coursesData.length > 0){
    coursedet = (
      <ul>
        {coursesData.map((course)=>(
          <div key={course.id}>
            <h2>{course.name}</h2>
            <h4>{course.date}</h4>
          </div>
        ))}
      </ul>
    );
  }
  return (
    <div className="app-container">
      <div className='layout-grid'>
        <div className='mystyle1'>
          <h1>Course Details</h1>
          {coursedet}
        </div>
        <div className='st2'>
          <h1>Book Details</h1>
          {bookdet}
        </div>
        <div className='st3'>
          <h1>Blog Details</h1>
          {content}
        </div>
      </div>
    </div>
  );
}

export default function MainApp(){
  return <App booksData={books} blogsData={blogs} coursesData={courses} />;
}
