import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AllItems from './pages/AllItems';
import NewItems from './pages/NewItems';
import Cart from './pages/Cart';
import { useAuthContext } from './context/AuthConfirm';
import Clothes from './pages/Clothes';
import Kitchen from './pages/Kitchen';
import Bedding from './pages/Bedding';
import Daily from './pages/Daily';
import Acc from './pages/Acc';
import SlipWear from './pages/SlipWear';
import Clean from './pages/Clean';
import CategoryPage from './components/CategoryPage';
import DetailPage from './pages/DetailPage';
import Search from './pages/Search';
import Login from './pages/Login';
import Join from './pages/Join';

/*
  gh-pages로 연동하게 되면 주소 뒤에 /repository 이름이 붙게 된다.
  ex) localhost:3000 => localhost:3000/repo명

  그러나 리액트의 기본 주소는 /로 되어 있어서 경로가 달라지게 되는 걸 못받아온다.


*/

/* 설치
  yarn add react-router-dom
  yarn add react-icons
  yarn add styled-components
*/

 
// 구버전 
//  const router = createBrowserRouter([
//     {
//        path : '/', // home
//        element : <App/> , // href
//        errorElement : <NotFound/>,
//        children : [
//          {path : '/items', element:<AllItems/>},
//          {path : '/items/new', element:<NewItems/>},
//          {path : '/cart', element : <Cart/>}
//   ]}
//  ])



const ProtectedRouter=({checkAdmin, children})=>{
    const {user} = useAuthContext();
    // 비회원   
    if(!user || (checkAdmin && !user.isAdmin)){
      return <Navigate to='/' replace/> 
    }
    return children
  }

const basename = process.env.PUBLIC_URL; 
// package.json안에 설정한 homepage의 주소를 자동으로 받아오는 명령어 
const routes = [
  {
    path : '/',
    element : <App/>,
    errorElement : <NotFound/>,
    children : [
      {path : '/items',  element:<AllItems/>},
      {path : '/items/new', 
      element: 
      // 회원 인증이 되었으면 NewItems꺼내옴
      <ProtectedRouter>
          <NewItems/>
      </ProtectedRouter> 
      },
      // 회원 인증이 되었으면 Cart꺼내옴
      {path : '/cart', element : 
      <ProtectedRouter>
        <Cart/>
      </ProtectedRouter>
      },

      {
        path : '/items/:category',
        element : <CategoryPage/>
      },

      {
        path : '/items/detail/:id',
        element : <DetailPage/>
      },

      {
        path : '/search',
        element : <Search/>
      },

      {
        path : '/login',
        element : <Login/>
      },

      {
        path : '/join',
        element : <Join/>
      }

 
      



      // {
      //   path : '/items/의류',
      //   element : <Clothes/>,
      // },
      // {
      //   path : '/items/주방',
      //   element : <Kitchen/>,
      // },
      // {
      //   path : '/items/침구',
      //   element : <Bedding/>,
      // },
      // {
      //   path : '/items/생활용품',
      //   element : <Daily/>,
      // },
      // {
      //   path : '/items/패션 잡화',
      //   element : <Acc/>,
      // },
      // {
      //   path : '/items/슬립 웨어',
      //   element : <SlipWear/>,
      // },
      // {
      //   path : '/items/청소용품',
      //   element : <Clean/>,
      // },
       
    ]

  }

  // {path : '/', element : <App/>},
  // {path : '/items', element:<AllItems/>},
  // {path : '/items/new', element:<NewItems/>},
  // {path : '/cart', element : <Cart/>}
]

const router = createBrowserRouter(routes, {basename : basename});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
