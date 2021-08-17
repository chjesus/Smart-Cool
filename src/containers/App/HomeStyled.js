import styled from 'styled-components';
import { Layout, Row } from 'antd';

const { Content } = Layout;

export const HomeContent = styled(Content)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  :after,
  :before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  :after {
    clip-path: polygon(100% 0, 0 0, 0 100%);
    background-color: #0299e8;
  }

  :before {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    background-color: #008dd4;
  }
`;

export const Div = styled.div`
  position: relative;
  z-index: 4;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 96px;

  & .ant-row {
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  font-family: 'Lucida Sans', sans-serif;
  margin: 0;
`;

export const TitleOpcion = styled.h2`
  font-size: 30px;
  color: #fff;
  font-family: 'Lucida Sans', sans-serif;
  text-decoration: underline;
`;

export const Text = styled.p`
  margin: 0;
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  font-style: italic;
`;

export const RowAntd = styled(Row)`
  height: 100%;
`;

export const IconContainer = styled.span`
  position: absolute;
  z-index: 6;
  right: 15%;
  color: #fff;
  font-size: 250px;
`;
