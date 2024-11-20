import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Стили редактора
import './CreateArticle.css';
import articles from '../../data/articles';

function CreateArticle({ onArticleCreated }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0]; // Формат YYYY-MM-DD
    setCurrentDate(date);
  }, []);

  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleTagRemove = (tag) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    if (!title || !author || !description || !content) {
      alert('Заполните все обязательные поля!');
      return;
    }

    const newArticle = {
      id: articles.length + 1,
      title,
      previewImage: coverImage || 'https://via.placeholder.com/150',
      creationDate: currentDate,
      author,
      description,
      fullText: content,
      tags,
    };

    articles.push(newArticle);

    if (onArticleCreated) onArticleCreated(newArticle);

    alert('Статья успешно добавлена!');
    setTitle('');
    setAuthor('');
    setCoverImage('');
    setDescription('');
    setContent('');
    setTags([]);
  };

  return (
    <div className="create-article">
      <h2>Создание статьи</h2>
      <div className="form-group">
        <label>Название статьи</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите название"
        />
      </div>
      <div className="form-group">
        <label>Автор</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Введите имя автора"
        />
      </div>
      <div className="form-group">
        <label>Дата</label>
        <input type="text" value={currentDate} disabled={true} />
      </div>
      <div className="form-group">
        <label>Ссылка на обложку</label>
        <input
          type="text"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          placeholder="Введите ссылку на изображение"
        />
      </div>
      <div className="form-group">
        <label>Описание</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание статьи"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Теги</label>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tagInput">
              {tag}{' '}
              <button type="button" onClick={() => handleTagRemove(tag)}>
                ✖
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagAdd}
          placeholder="Введите тег и нажмите Enter"
        />
      </div>
      <div className="form-group">
        <label>Текст статьи</label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Напишите вашу статью здесь..."
          minHeight="250px"
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Отправить
      </button>
    </div>
  );
}

export default CreateArticle;
