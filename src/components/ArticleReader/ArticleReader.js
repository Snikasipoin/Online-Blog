import React from 'react';
import './ArticleReader.css';
import { IoMdCloseCircle } from 'react-icons/io';

function ArticleReader({ article, onClose }) {
  return (
    <div className="article-reader">
      <button onClick={onClose} className="close-button">
        <IoMdCloseCircle
          style={{ color: 'rgb(190, 3, 3)', fontSize: '32px' }}
        />
        Назад
      </button>
      <h1>{article.title}</h1>
      <img
        src={article.previewImage}
        alt={article.title}
        className="preview-image"
      />
      <div className="article-info">
        <p>
          Автор: <strong>{article.author}</strong>
        </p>
        <p>Дата публикации: {article.creationDate}</p>
      </div>
      <div
        className="article-full-text"
        dangerouslySetInnerHTML={{ __html: article.fullText }}
      ></div>
    </div>
  );
}

export default ArticleReader;
