import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArticlesContent from './components/ArticlesContent';
import CreateArticle from './components/CreateArticle/CreateArticle';
import { useState } from 'react';

function App() {
  const [activeContent, setActiveContent] = useState('articles'); // Управление отображением контента

  const handleArticleCreated = () => {
    setActiveContent('articles');
  };

  return (
    <div className="App">
      <Header onChangeContent={setActiveContent} />{' '}
      <div className="contentWrapper">
        {activeContent === 'create' ? (
          <CreateArticle onArticleCreated={handleArticleCreated} />
        ) : (
          <ArticlesContent />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
