import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/46/D16-5355-446/D16-5355-446_zoom1.jpg?ts=1599149600&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$799,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/46/D16-5355-446/D16-5355-446_zoom1.jpg?ts=1599149600&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$799,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/46/D16-5355-446/D16-5355-446_zoom1.jpg?ts=1599149600&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$799,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/46/D16-5355-446/D16-5355-446_zoom1.jpg?ts=1599149600&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$799,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/46/D16-5355-446/D16-5355-446_zoom1.jpg?ts=1599149600&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$799,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/46/D16-5355-446/D16-5355-446_zoom1.jpg?ts=1599149600&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$799,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
