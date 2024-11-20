import articles from '../data/articles';
import useInput from './Hooks/useInput';
import TagButton from './TagButton/TagButton';
// import Input from './Input';

function getUniqueTags() {
  const allTags = articles.reduce(function (acc, article) {
    return acc.concat(article.tags);
  }, []);

  const uniqueTags = Array.from(new Set(allTags));

  return uniqueTags;
}

function TagsOutputs({ onTagChange, selectedTag }) {
  const input = useInput();
  const tags = getUniqueTags();
  return (
    <>
      <input
        type="text"
        placeholder="ПОИСК ПО КАТЕГОРИЯМ"
        className="control"
        {...input}
      ></input>
      {tags
        .filter((tag) => tag.toLowerCase().includes(input.value))
        .map((tag) => {
          return (
            <TagButton
              key={tag}
              tagName={tag}
              onClick={onTagChange}
              selectedTag={selectedTag}
            />
          );
        })}
    </>
  );
}
export default TagsOutputs;
