//import Product from './components/Product/Product.tsx';
import Row from './components/Row/Row.tsx';
import ProductCatalog from './components/ProductCatalog/ProductCatalog.tsx';
import MyButton from './components/MyButton/MyButton.tsx';

function App() {
  const positions = [
    {
      id: 1,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
  ];

  // const products = [
  //   {
  //     id: 1,
  //     title: 'имя продукта 1',
  //   },
  //   {
  //     id: 2,
  //     title: 'имя продукта 2',
  //   },
  // ];

  // const productList = products.map((product) => (
  //   <li key={product.id}>
  //     <a href="">{product.title}</a>
  //   </li>
  // ));

  return (
    <>
      {/* <ProductCatalog products={products} />
      {productList} */}
      <Row>
        <ProductCatalog products={positions} />
      </Row>
      <MyButton />
      <div
        onClick={() => alert('Клик на div')}
        onClickCapture={() => alert('Клик на duv Capture')}
        style={{
          width: '200px',
          border: '1px solid red',
          height: '200px',
        }}
      >
        <button
          onClick={(event) => {
            alert('Клик на кнопку');
            event.stopPropagation();
          }}
        >
          кнопка bubble
        </button>
      </div>
    </>
  );
}

export default App;
