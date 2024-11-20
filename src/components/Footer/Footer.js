import './Footer.css';
import { FaCaretSquareUp } from 'react-icons/fa';

function Footer() {
  function scrollTo() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return scrollTo;
  }
  return (
    <div className="footer">
      <span>
        <p>© Copyright blog 2024</p>
        <a href="https://github.com/Snikasipoin/Online-Blog">
          Политика конфиденциальности
        </a>
      </span>
      <button onClick={scrollTo()}>
        ВВЕРХ
        <FaCaretSquareUp size="36px" color="white" />
      </button>
    </div>
  );
}

export default Footer;
