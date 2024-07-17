import React, { useState, useEffect } from 'react';
import './middle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  name: string;
  price: number;
  image: string;
  gender: string;
  brand: string;
  [key: string]: string | number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://challenges.brainster.tech/ajax_data/data.json');
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const filterize = (filterName: string, type: string): Product[] => {
    return products.filter(product => product[type] === filterName);
  };

  const updateFilteredProducts = (filterName: string, type: string) => {
    const filtered = filterName === 'all' ? products : filterize(filterName.toUpperCase(), type);
    setFilteredProducts(filtered);
  };

  return (
    <div className='container bg-white '>
    <div className="row">
      <div className="col-md-3">
        <h3>Filter by:</h3>
        <ul className="sub-menu">
          <li data-type="all" className="active" onClick={() => updateFilteredProducts('all', 'all')}>
            <span>Show all</span><span className="badge" id="allBadge">{filteredProducts.length}</span>
          </li>
        </ul>
        <hr />
        <h4>Gender</h4>
        <ul className="sub-menu">
          <li data-type="gender" onClick={() => updateFilteredProducts('MALE', 'gender')}>
            <span>Male</span><span className="badge" id="maleBadge">{filterize('MALE', 'gender').length}</span>
          </li>
          <li data-type="gender" onClick={() => updateFilteredProducts('FEMALE', 'gender')}>
            <span>Female</span><span className="badge" id="femaleBadge">{filterize('FEMALE', 'gender').length}</span>
          </li>
        </ul>
        <hr />
        <h4>Brand</h4>
        <ul className="sub-menu">
          <li data-type="brand" onClick={() => updateFilteredProducts('LE GRAND BIKES', 'brand')}>
            <span>LE GRAND BIKES</span><span className="badge" id="leGrand">{filterize('LE GRAND BIKES', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('KROSS', 'brand')}>
            <span>KROSS</span><span className="badge" id="kross">{filterize('KROSS', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('EXPLORER', 'brand')}>
            <span>EXPLORER</span><span className="badge" id="explorer">{filterize('EXPLORER', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('VISITOR', 'brand')}>
            <span>VISITOR</span><span className="badge" id="visitor">{filterize('VISITOR', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('PONY', 'brand')}>
            <span>PONY</span><span className="badge" id="pony">{filterize('PONY', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('FORCE', 'brand')}>
            <span>FORCE</span><span className="badge" id="force">{filterize('FORCE', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('E-BIKES', 'brand')}>
            <span>E-BIKES</span><span className="badge" id="eBikes">{filterize('E-BIKES', 'brand').length}</span>
          </li>
          <li data-type="brand" onClick={() => updateFilteredProducts('IDEAL', 'brand')}>
            <span>IDEAL</span><span className="badge" id="ideal">{filterize('IDEAL', 'brand').length}</span>
          </li>
          {/* Add similar list items for other brands */}
        </ul>
      </div>
      <div className="col-md-9">
        <div className="row card-row">
          {filteredProducts.map(product => (
            <div className="col-md-4 card-cont" key={product.name}>
              <a href="#" className="inner">
                <div className="img-cont">
                  <img src={`img/${product.image}.png`} className="card-img img img-responsive" alt={product.name} />
                </div>
                <div className="content-cont">
                  <h2>{product.name}</h2>
                  <p className="price">{product.price} $</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductList;