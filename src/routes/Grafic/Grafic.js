import React, { useEffect, useState } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import { useFirebaseApp, useDatabaseList } from 'reactfire';

import TypeChart from '../components/Chart';
import { Content, Title } from '../styled';

function Grafic() {
  const { firebase_ } = useFirebaseApp();

  const [age, setAge] = useState([]);
  const [month, setMonth] = useState([]);
  const [day, setDay] = useState([]);
  const [hour, setHour] = useState([]);
  const [min, setMin] = useState([]);

  const [TThe1, setTThe1] = useState([]);
  const [TThe2, setTThe2] = useState([]);
  const [TThe3, setTThe3] = useState([]);
  const [TThe4, setTThe4] = useState([]);

  const [dataTThe1, setDataTThe1] = useState([]);
  const [dataTThe2, setDataTThe2] = useState([]);
  const [dataTThe3, setDataTThe3] = useState([]);
  const [dataTThe4, setDataTThe4] = useState([]);

  const columns = [
    { type: 'datetime', label: 'Time' },
    { type: 'number', label: 'Temp' },
  ];

  const options = {
    hAxis: {
      title: 'Time',
      format: 'yyyy/MM/dd',
      titleTextStyle: { color: 'black', fontSize: 22, bold: true },
      viewWindowMode: 'explicit',
    },
    vAxis: {
      title: 'Temp (°C)',
      format: 'short',
      titleTextStyle: { color: 'black', fontSize: 22, bold: true },
      viewWindowMode: 'explicit',
      viewWindow: {
        max: 40,
        min: -30,
      },
    },
    height: 400,
  };

  const refRefrigerador = firebase_.database().ref('Refrigerador');
  const { data, status } = useDatabaseList(refRefrigerador);

  useEffect(() => {
    if (status === 'success') {
      data.forEach((e) => {
        const { snapshot } = e;
        getValues(snapshot);
      });
    }
  }, [status]);

  useEffect(() => {
    const TThe4Length = TThe4.length;
    if (TThe4Length) {
      setDataTThe1(setValueGrafic(TThe1));
      setDataTThe2(setValueGrafic(TThe2));
      setDataTThe3(setValueGrafic(TThe3));
      setDataTThe4(setValueGrafic(TThe4));
    }
  }, [TThe4]);

  const getValues = (snapshot) => {
    const key = snapshot.key;
    switch (key) {
      case 'Ano':
        const dataAge = getData(snapshot);
        setAge(dataAge);
        break;
      case 'Mes':
        const dataMonth = getData(snapshot);
        setMonth(dataMonth);
        break;
      case 'Dia':
        const dataDay = getData(snapshot);
        setDay(dataDay);
        break;
      case 'Hora':
        const dataHour = getData(snapshot);
        setHour(dataHour);
        break;
      case 'Minutos':
        const dataMin = getData(snapshot);
        setMin(dataMin);
        break;
      case 'TThe1':
        const dataTThe1 = getData(snapshot);
        setTThe1(dataTThe1);
        break;
      case 'TThe2':
        const dataTThe2 = getData(snapshot);
        setTThe2(dataTThe2);
        break;
      case 'TThe3':
        const dataTThe3 = getData(snapshot);
        setTThe3(dataTThe3);
        break;
      case 'TThe4':
        const dataTThe4 = getData(snapshot);
        setTThe4(dataTThe4);
        break;
      default:
        break;
    }
  };

  const getData = (snapshot) => {
    const snapValue = snapshot.val();
    const keys = Object.keys(snapValue);
    const data = [];

    keys.forEach((e) => {
      data.push(snapValue[e]);
    });

    const newData = data.slice(data.length - 500);

    return newData;
  };

  const setValueGrafic = (TThe) => {
    const arrayAux = [];
    TThe.forEach((e, index) => {
      const ageAux = age[index];
      const dayAux = day[index];
      const monthAux = month[index];
      const hourAux = hour[index];
      const minAux = min[index];

      const date = new Date(ageAux, monthAux, dayAux, hourAux, minAux, 0, 0);
      arrayAux.push([date, e]);
    });

    return arrayAux;
  };

  return (
    <Content>
      <Breadcrumb style={{ marginBottom: '16px' }}>
        <Breadcrumb.Item>
          <Title>Grafics:</Title>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col span="12">
          <TypeChart
            type="LineChart"
            data={[columns, ...dataTThe1]}
            options={options}
            title="TThe1 incurred over time."
          />
        </Col>
        <Col span="12">
          <TypeChart
            type="LineChart"
            data={[columns, ...dataTThe2]}
            options={options}
            title="TThe2 incurred over time."
          />
        </Col>
        <Col span="12">
          <TypeChart
            type="LineChart"
            data={[columns, ...dataTThe3]}
            options={options}
            title="TThe3 incurred over time."
          />
        </Col>
        <Col span="12">
          <TypeChart
            type="LineChart"
            data={[columns, ...dataTThe4]}
            options={options}
            title="TThe4 incurred over time."
          />
        </Col>
      </Row>
    </Content>
  );
}

export default Grafic;
