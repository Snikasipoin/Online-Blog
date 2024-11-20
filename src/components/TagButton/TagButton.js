import './TagButton.css';

function TagButton({ tagName, onClick, selectedTag }) {
  const capitalizedTag = function (tag) {
    return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
  };
  const buttonActive = tagName === selectedTag;
  function handleButtonClick() {
    if (buttonActive) onClick(null);
    else onClick(tagName);
  }
  return (
    <>
      <button
        className={`${buttonActive ? 'active' : ''} tagButton`}
        onClick={handleButtonClick}
      >
        {capitalizedTag(tagName)}
      </button>
    </>
  );
}
export default TagButton;
