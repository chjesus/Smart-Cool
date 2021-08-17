import styled from 'styled-components';
import { Layout, Card, Avatar } from 'antd';

const { Sider } = Layout;
export const CardAntd = styled(Card)`
  background-color: transparent;
  border: 0;
  color: #fff;
  .ant-card-meta-title {
    color: inherit;
  }

  .ant-card-meta-description {
    color: inherit;
    font-weight: 200;
  }
`;

export const AvatarAntd = styled(Avatar)`
  background-color: #fff;
  border: 2px solid #1890ff;
`;

export const SiderAntd = styled(Sider)`
  flex: 0 0 300px !important;
  width: 300px !important;
  max-width: initial !important;
  min-width: initial !important;
`;
