import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Avatar,
  Info,
  Name,
  Message,
  ProfileButton,
} from './styles';

function Person() {
  return (
    <Container>
      <ProfileButton>
        <Avatar
          source={{
            uri: 'https://avatars.githubusercontent.com/u/62979208?v=4',
          }}
        />
        <Info>
          <Name>Nikolas Santana</Name>
          <Message>Editar perfil</Message>
        </Info>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#999999" />
      </ProfileButton>
    </Container>
  );
}

export default withNavigation(Person);
