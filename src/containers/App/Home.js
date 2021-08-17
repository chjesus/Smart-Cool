import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Row, Col, Button } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import {
  HomeContent,
  Div,
  Title,
  Text,
  RowAntd,
  TitleOpcion,
  IconContainer,
} from './HomeStyled';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2332453_m2bffer12l.js'],
});

function Home() {
  return (
    <Layout>
      <HomeContent>
        <Div>
          <RowAntd gutter={[16, 16]} justify="space-around" align="middle">
            <Col span={24}>
              <Title>SmartCool UNET</Title>
              <Text>
                Monitorea, Visualiza y obtengan datos de temperatura de un
                Refrigerador
              </Text>
            </Col>
            <Col span={24}>
              <TitleOpcion>Elija tu opcion:</TitleOpcion>
              <Row gutter={[16, 16]}>
                <Col>
                  <Link to="/dashboard/temperaturas">
                    <Button ghost>Monitorea</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/dashboard/graficas">
                    <Button ghost>Ver Graficas</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </RowAntd>
          <IconContainer>
            <IconFont type="icon-temperature-" />
          </IconContainer>
        </Div>
      </HomeContent>
    </Layout>
  );
}

export default Home;
