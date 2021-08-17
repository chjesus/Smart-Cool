import React, { useEffect, useState } from 'react';
import { Breadcrumb, Row, Col } from 'antd';

import 'firebase/database';
import { useFirebaseApp, useDatabaseList } from 'reactfire';

import TypeChart from '../components/Chart';

import { Content, Title } from '../styled';

function Temperature() {
  const { firebase_ } = useFirebaseApp();
  const [values, setValues] = useState([]);

  const refTThe1 = firebase_.database().ref('Refrigerador');
  const { data, status } = useDatabaseList(refTThe1);

  const options = {
    greenFrom: -20,
    greenTo: 0,
    redFrom: 10,
    redTo: 40,
    yellowFrom: 0,
    yellowTo: 10,
    majorTicks: [
      '-20',
      '-15',
      '-10',
      '-5',
      '0',
      '5',
      '10',
      '15',
      '20',
      '25',
      '30',
      '35',
      '40',
    ],
    minorTicks: 1,
    max: 40,
    min: -20,
  };

  useEffect(() => {
    if (status === 'success') {
      let contador = 0;
      const interval = setInterval(() => {
        const arrayAux = [];
        data.forEach((e) => {
          const { snapshot } = e;
          if (snapshot.key.includes('TThe')) {
            const arrayKeys = Object.keys(snapshot.val());
            const key = arrayKeys[contador];
            const value = snapshot.val();
            arrayKeys.length - 2 > contador
              ? arrayAux.push(value[key])
              : clearInterval(interval);
          }
        });
        contador++;
        setValues(arrayAux);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <Content>
      <Breadcrumb style={{ marginBottom: '16px' }}>
        <Breadcrumb.Item>
          <Title>Temperaturas:</Title>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={[32, 32]} justify="space-between">
        {values.map((e, index) => (
          <Col span="auto" key={index}>
            <TypeChart
              type="Gauge"
              data={[
                ['Label', 'Value'],
                [`TThe${index + 1}`, e],
              ]}
              options={options}
            />
          </Col>
        ))}
      </Row>
    </Content>
  );
}

export default Temperature;
