import { Outlet , Routes , Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthConfirm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './components/Products';
import SliderItem from './components/SliderItem';
import AllItems from './pages/AllItems';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        {/* <SliderItem/> */}
          <GlobalStyle/> {/* 전역변수 css 적용 컴포넌트 */}
          <Nav/>

          <Routes>
            <Route path='/' element={<AllItems/>}/>
          </Routes>
          
          {/* <div className='container'>
            <Products/>
          </div>  */}
            
          <Outlet/> {/* Outlet : children과 같은 효과 */}
      </AuthContextProvider>
    </QueryClientProvider>
    
    </>
  );
}

export default App;
