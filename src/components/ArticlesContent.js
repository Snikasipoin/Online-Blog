import ArticleList from './ArticleList';
import TagsOutputs from './TagsOutputs';
import { useState } from 'react';

function ArticlesContent() {
  const [selectedTag, setSelectedTag] = useState(null);
  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };
  return (
    <>
      <div className="leftRow">
        <ArticleList tag={selectedTag} />
      </div>
      <div className="rightRow">
        <h1>Категории</h1>
        <div className="tagsWrapepr">
          <TagsOutputs
            onTagChange={handleTagChange}
            selectedTag={selectedTag}
          />
        </div>
      </div>
    </>
  );
}

export default ArticlesContent;
