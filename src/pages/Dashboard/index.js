import React from 'react';

import { withNavigationFocus } from 'react-navigation';
import { Container } from './styles';

import Address from '../../components/Address';
import Input from '../../components/Input';
import Coupon from '../../components/Coupon';
import Offers from '../../components/Offers';
import Categories from '../../components/Categories';

import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';
import Restaurant from '../../components/Restaurant';

function Dashboard() {
  return (
    <Container>
      <Address />
      <Input placeholder="item ou loja" />
      <Coupon />
      <Offers />
      <Categories />
      <Restaurant />
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerTitleStyle: {
    display: 'none',
  },
  headerStyle: {
    height: 70,
  },
  headerRight: () => <HeaderRight />,
  headerLeft: () => <HeaderLeft />,
};

export default withNavigationFocus(Dashboard);
