import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const loadApi = async () => {
      const response = await api.get('/products');

      const data = await response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    };

    loadApi();
  }, []);

  return (
    <ProductList>
      {products &&
        products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
              </div>

              <span>Adicionar ao Carrinho</span>
            </button>
          </li>
        ))}
    </ProductList>
  );
};

export default Home;
