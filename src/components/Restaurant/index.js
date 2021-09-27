import React from 'react';

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from './style';

export default function Restaurant() {
  return (
    <Container>
      <Header>
        <Title>Restaurantes</Title>
      </Header>

      <CategoriesList horizontal>
        <Item>
          <ItemImage
            source={{
              uri:
                'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201801241007_74ed657c-ff28-4357-b6b2-30c53390b5db.jpg',
            }}
          />
          <ItemTitle>Habibs</ItemTitle>
        </Item>

        <Item>
          <ItemImage
            source={{
              uri: 'http://www.sergel.com.br/images/logo-rodape1.png',
            }}
          />
          <ItemTitle>Sergel</ItemTitle>
        </Item>

        <Item>
          <ItemImage
            source={{
              uri: 'https://clipartart.com/images/dominos-logo-clipart-5.png',
            }}
          />
          <ItemTitle>dominos</ItemTitle>
        </Item>
      </CategoriesList>
    </Container>
  );
}
