import { ProductCatalog, Cart } from '@/components';
import classes from '@/App.module.scss';
import ThemesChanger from './components/ThemesChanger/ThemesChanger';
import CreateProduct from './components/CreateProduct/CreateProduct';

function App() {
  return (
    <div>
      <div>
        <CreateProduct />
      </div>
      <div>
        <ThemesChanger />
      </div>
      <div className={classes.all}>
        <ProductCatalog />
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
