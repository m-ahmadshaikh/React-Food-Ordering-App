import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from '../src/store/CartProvider';

function App() {
  const [isCartVisible, setisCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setisCartVisible((prevState) => !prevState);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onHideCart={toggleCartVisibility} />}
      <Header onShowCart={toggleCartVisibility} />
      <Meals />
    </CartProvider>
  );
}

export default App;
