import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartVisible, setisCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setisCartVisible((prevState) => !prevState);
  };

  return (
    <Fragment>
      {isCartVisible && <Cart onHideCart={toggleCartVisibility} />}
      <Header onShowCart={toggleCartVisibility} />
      <Meals />
    </Fragment>
  );
}

export default App;
