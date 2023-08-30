import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AllItems from './pages/AllItems';
import NewItems from './pages/NewItems';
import Cart from './pages/Cart';


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

// package.json안에 설정한 homepage의 주소를 자동으로 받아오는 명령어 
const basename = process.env.PUBLIC_URL; 
const routes = [
  {path : '/', element : <App/>},
  {path : '/items', element:<AllItems/>},
  {path : '/items/new', element:<NewItems/>},
  {path : '/cart', element : <Cart/>}
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
