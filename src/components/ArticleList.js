import React, { useState } from 'react';
import articles from '../data/articles';
import ItemPreview from './ItemPreview/ItemPreview';
import ArticleReader from './ArticleReader/ArticleReader';

function ArticleList({ tag }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleViewPost = (article) => {
    setSelectedArticle(article);
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  const handleCloseReader = () => {
    setSelectedArticle(null);
  };

  const filtered = !tag
    ? articles
    : articles.filter((article) => article.tags.includes(tag));

  return (
    <div>
      {}
      {selectedArticle ? (
        <ArticleReader article={selectedArticle} onClose={handleCloseReader} />
      ) : (
        filtered.map((article) => (
          <ItemPreview
            key={article.id}
            article={article}
            onViewPost={() => handleViewPost(article)}
          />
        ))
      )}
    </div>
  );
}

export default ArticleList;
