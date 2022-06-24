import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LogIn from './components/Authen/Login/Login';
import SignIn from './components/Authen/Signin/Signin';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';
import Collections from './pages/Collections/Collections';
import Introduction from './pages/Introduction/Introduction';
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Search from './components/Search/Search';


function App() {

  const [conditionLogIn, setConditionLogIn] = useState(false)
  const [conditionSignIn, setConditionSignIn] = useState(false)
  const [conditionCart, setConditionCart] = useState(false)
  const [inputData, setInputData] = useState('No matching products found')
  const [valueSearch, setValueSearch] = useState('')

  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Header setConditionLogIn={setConditionLogIn} setConditionCart={setConditionCart} inputData={inputData} setInputData={setInputData} />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>

      {conditionLogIn && <LogIn setConditionSignIn={setConditionSignIn} setConditionLogIn={setConditionLogIn} />}
      {conditionSignIn && <SignIn setConditionLogIn={setConditionLogIn} setConditionSignIn={setConditionSignIn} />}
      {conditionCart && <Cart setConditionCart={setConditionCart} />}
      {inputData && <Search inputData={inputData} />}
      <Footer />


    </div>
  )
}


export default App;
