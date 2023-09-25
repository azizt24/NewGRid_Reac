import React from 'react';
import ent1Image from '../../public/images/ent1.jpg'; // Import the image

const articles = [
  {
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet',
    image: ent1Image, // Use the imported image
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
  // Other articles...
];

export default function Home() {
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor Picks</h2>
        <div className="articles-container">
          {articles.map((article, index) => (
            <article
              className={`card ${index % 2 === 0 ? 'bg-dark' : 'bg-primary'}`}
              key={index}
            >
              <img src={article.image} alt="" />
              <div className={`category category-${article.category.toLowerCase()}`}>
                {article.category}
              </div>
              <h3>
                <a href="article.html">{article.title}</a>
              </h3>
              <p>{article.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
