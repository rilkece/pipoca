//React and Core Components
import { useCallback, useState } from 'react';

//Inbuilt Components
import Circles  from './Circles';
import  Chart  from './Chart/Chart';

//Third components

//Styles Components

const Rated = () => {
  //CHART
  const [teste, setTeste] = useState([
    { label: 'Movie1', value: 100 },
    { label: 'Movie2', value: 200 },
    { label: 'Movie3', value: 50 },
    { label: 'Movie4', value: 150 },
    { label: 'Movie5', value: 150 },
    { label: 'Movie6', value: 100 },
    { label: 'Movie7', value: 200 },
    { label: 'Movie8', value: 50 },
    { label: 'Movie9', value: 150 },
    { label: 'Movie10', value: 150 },
  ]);

  //CIRCLES
  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70, 80, 65, 75]);
  const updateData = useCallback(() => {
    console.log('updateData');
    const count = 5 + Math.round(Math.random() * 15);
    const values = [];
    for (let i = 0; i < count; i++) {
      values[i] = 10 + Math.round(Math.random() * 70);
    }
    setData(values);
  }, []);

  console.log('Rated component rendered');
  return (
    <>
      {/* <button onClick={updateData}>Update Data</button>
      <Circles data={data} /> */}
      <br/>
      <Chart data={teste} />     
    </>
  );
};

export default Rated;
