import React from 'react';

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

export default function Categories() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>
        <Item>
          <ItemImage
            source={{
              uri:
                'https://dicasdaflorida.com.br/wp-content/uploads/2014/07/comida-brasileira-restaurante-brasileiro.jpg',
            }}
          />
          <ItemTitle>brasileira</ItemTitle>
        </Item>

        <Item>
          <ItemImage
            source={{
              uri:
                'https://pagoquandopuder.com.br/wp-content/uploads/2019/09/Comida-saud%C3%A1vel-n%C3%A3o-%C3%A9-mais-cara-740x493.jpg',
            }}
          />
          <ItemTitle>Saúdavel</ItemTitle>
        </Item>

        <Item>
          <ItemImage
            source={{
              uri:
                'https://supermercadosrondon.com.br/guiadecarnes/images/postagens/as_7_melhores_carnes_para_churrasco_21-05-2019.jpg',
            }}
          />
          <ItemTitle>Carnes</ItemTitle>
        </Item>
      </CategoriesList>
    </Container>
  );
}
