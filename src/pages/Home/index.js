import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const { amount } = useSelector((state) => ({
    amount: state.cart.reduce((quantity, product) => {
      quantity[product.id] = product.amount;
      return quantity;
    }, {}),
  }));

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

  const handleAddProduct = (product) => {
    dispatch(CartActions.addToCart(product));
  };

  return (
    <ProductList>
      {products &&
        products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button type="button" onClick={() => handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao Carrinho</span>
            </button>
          </li>
        ))}
    </ProductList>
  );
};

export default Home;
