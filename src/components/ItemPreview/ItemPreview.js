import React from 'react';
import './ItemPreview.css';

function Tags(props) {
  return (
    <div className="tags">
      {props.tags.map(function (tag, index) {
        return (
          <span key={index} className="tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}

function Preview(props) {
  return (
    <div className="preview">
      <img src={props.imageSrc} alt="Preview" className="preview-image" />
      <Tags tags={props.tags} />
    </div>
  );
}

function ArticleHeader(props) {
  return (
    <div className="article-header">
      <h2>{props.title}</h2>
      <div className="article-info">
        <div>
          <span className="author-name">{props.author}</span> &nbsp;•&nbsp;
          <span className="date">{props.date}</span>
        </div>
      </div>
    </div>
  );
}

function ArticleDescription(props) {
  return <p className="article-description">{props.description}</p>;
}

function ViewPostButton(props) {
  return (
    <button className="view-post-button" onClick={props.onClick}>
      View Post
    </button>
  );
}

function ItemPreview(props) {
  const {
    previewImage,
    tags,
    title,
    author,
    creationDate,
    description,
    fullText,
  } = props.article;

  return (
    <div className="article-card">
      <Preview imageSrc={previewImage} tags={tags} />
      <ArticleHeader title={title} author={author} date={creationDate} />
      <ArticleDescription description={description} />
      <ViewPostButton onClick={props.onViewPost} />
    </div>
  );
}

export default ItemPreview;
