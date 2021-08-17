import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Layout } from 'antd';

import App from '../../routes';
import SiderBar from '../SiderBar';
import Topbar from '../TopBar';

function Main() {
  const match = useRouteMatch();

  return (
    <Layout style={{ height: '100vh' }}>
      <SiderBar />
      <Layout>
        <Topbar />
        <App match={match} />
      </Layout>
    </Layout>
  );
}

export default Main;
