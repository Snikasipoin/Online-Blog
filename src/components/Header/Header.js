import HeaderTitle from './Header-title';
import './Header.css';
import NavBar from '../NavBar';

function Header({ onChangeContent }) {
  return (
    <>
      <HeaderTitle />
      <NavBar onChangeContent={onChangeContent} />
    </>
  );
}
export default Header;
