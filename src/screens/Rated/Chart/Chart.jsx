//React and Core Components
import { useState, useRef, useEffect } from 'react';

//Inbuilt Components

//Third components
import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from 'd3';

//Styles Components

const Chart = ({ data }) => {
  console.log(data);
  const [margin, setMargin] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [width, setWidth] = useState(500 - margin.left - margin.right);
  const [height, setHeight] = useState(300 - margin.top - margin.bottom);

  const AxisBottom = ({ scale, transform }) => {
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current) {
        select(ref.current).call(axisBottom(scale));
      }
    }, [scale]);
    return <g ref={ref} transform={transform} />;
  };

  const AxisLeft = ({ scale }) => {
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current) {
        select(ref.current).call(axisLeft(scale));
      }
    }, [scale]);
    return <g ref={ref} />;
  };

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.1);

  const scaleY = scaleLinear().domain([0, 100]).range([height, 0]);

  const bars = data.map(({ label, value }) => (
    <rect
        key={label}
        x={scaleX(label)}
        y={scaleY(value)}
        width={scaleX.bandwidth()}
        height={height - scaleY(value)}
        fill="orange"
        />
    ));
    console.log(bars);

  return (
    <svg width={width} height={height}>
      <AxisBottom scale={scaleX} transform={`(0, ${height})`} />
      <AxisLeft scale={scaleY}  />
        
    </svg>
  );
};

export default Chart;
