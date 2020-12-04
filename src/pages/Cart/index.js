import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  const { cart } = useSelector((state) => ({
    cart: state.cart,
  }));

  const dispatch = useDispatch();

  const handleRemoveToCart = (id) => {
    dispatch(CartActions.removeFromCart(id));
  };

  const handleIncrement = (product) => {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  };

  const handleDecrement = (product) => {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  };

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => handleDecrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => handleIncrement(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$1599,98</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveToCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
