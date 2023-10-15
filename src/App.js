import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';



function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}

export default App;
