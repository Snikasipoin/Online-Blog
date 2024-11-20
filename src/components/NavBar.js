import Input from '../components/Input';
import { IoSearchSharp } from 'react-icons/io5';

function NavBar({ onChangeContent }) {
  return (
    <div className="navBar">
      <div className="container">
        <div>
          <button onClick={() => onChangeContent('articles')}>
            Список статей
          </button>
          <button onClick={() => onChangeContent('create')}>
            Создать статью
          </button>
        </div>
        {/* <div className="inputHeader">
          <IoSearchSharp size="27px" color="white" />
          <Input />
        </div> */}
      </div>
    </div>
  );
}
export default NavBar;
