import React from 'react';
export default function Showcase() {
  const category = 'Sports';
  const title = 'Some Sports Article';
  const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum officia quibusdam mollitia deserunt animi soluta laudantium. Quam sapiente a dolorum magnam necessitatibus quis tempore facere totam. Dolor, sequi distinctio!';
  const link = 'article.html';
  return (
    <header id="showcase">
  <div className="container">
  <div className="showcase-container">
  <div className="showcase-content">
 <div className={`category category-${category.toLowerCase()}`}>{category}</div>
     <h1>{title}</h1>
  <p>{content}</p>
    <a href={link} className="btn btn-primary">Read More</a>
      </div>
   </div>
</div>
</header>
);}
