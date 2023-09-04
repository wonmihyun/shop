import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthConfirm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
          <GlobalStyle/> {/* 전역변수 css 적용 컴포넌트 */}
          <Nav/> 
          <Outlet/> {/* Outlet : children과 같은 효과 */}
      </AuthContextProvider>
    </QueryClientProvider>
    
    </>
  );
}

export default App;
