import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListContainer from './containers/ProductListContainer';
import CartListContainer from './containers/CartListContainer';
import MessageContainer from './containers/MessageContainer';

function App() {
  return (
    <div>
      {/* Header */}
      {/* <Header /> */}

      <main id="mainContainer">
        <div className="container">
          {/* Products */}
          <ProductListContainer />
          {/* Message */}
          <MessageContainer />
          {/* Cart */}
          <CartListContainer />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
