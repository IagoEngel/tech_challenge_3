import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';
import { PostProvider } from './context/PostContext';
import Header from './components/Header';
import { Body } from './components/Body';
import { ProfessorProvider } from './context/ProfessorContext';
import { LoginScreen } from './screen/LoginScreen';
import { CreatePostScreen } from './screen/CreatePostScreen';
import { EditPostScreen } from './screen/EditPostScreen';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ProfessorProvider>
        <PostProvider>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Body />
              </>
            }
            />
            <Route path='/login' element={
              <LoginScreen />
            }/>
            <Route path='/create' element={
              <>
                <Header />
                <CreatePostScreen />
              </>
            }/>
            <Route path='/edit' element={
              <>
                <Header />
                <EditPostScreen />
              </>
            }/>
          </Routes>
        </PostProvider>
      </ProfessorProvider>
    </Router>
  );
}

export default App;
