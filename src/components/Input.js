import useInput from './Hooks/useInput';

function Input() {
  const input = useInput();
  console.log(input.value);
  return (
    <div>
      <input
        type="text"
        placeholder="ПОИСК"
        className="control"
        {...input}
      ></input>
    </div>
  );
}

export default Input;
