import React from 'react';
import { Menu, Card } from 'antd';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import { CardAntd, AvatarAntd } from './SiderContentStyled';
const { Meta } = Card;

function SiderBar() {
  const match = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <CardAntd>
        <Meta
          avatar={
            <AvatarAntd src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Smart Cool"
          description="Administrator Panel"
        />
      </CardAntd>
      <Menu selectedKeys={[location.pathname]} mode="inline" theme="dark">
        <Menu.Item key={`${match.url}/temperaturas`}>
          <Link to="/dashboard/temperaturas">Temperaturas</Link>
        </Menu.Item>
        <Menu.Item key={`${match.url}/graficas`}>
          <Link to="/dashboard/graficas">Graficas</Link>
        </Menu.Item>
        <Menu.Item key="/home">
          <Link to="/home">Home</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default SiderBar;
