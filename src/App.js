import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle/> 
    {/* 전역변수 css 적용 컴포넌트 */}
    <Nav/> 
    <Outlet/> 
    {/* Outlet : children과 같은 효과 */}
    </>
  );
}

export default App;
