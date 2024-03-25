import React, { useState } from 'react';

export default function App() {
  const [hoveredElement, setHoveredElement] = useState(null); // State to track hovered element ID

  const handleHover = (id) => {
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const getStatistics = (label) => {
    const statistics = {
      positive: Math.floor(Math.random() * 100),
      negative: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 100), 
    };
    return statistics;
  };

  const elements = [
    { id: '1', label: 'Market Research', position: { x: 300, y: 5 } },
    { id: '2', label: 'External', position: { x: 200, y: 100 } },
    { id: '3', label: 'Internal', position: { x: 400, y: 100 } },
    { id: '4', label: 'B2C', position: { x: 100, y: 200 } },
    { id: '5', label: 'Planning', position: { x:  330, y: 200 } },
    { id: '6', label: 'PRD', position: { x: 180, y: 300 } },
    { id: '7', label: 'Specs', position: { x: 400, y: 300 } },
    { id: '8', label: 'Design', position: { x: 250, y: 400 } },
    { id: '9', label: 'Hardware', position: { x: 150, y: 500 } },
    { id: '10', label: 'Software', position: { x: 350, y: 500 } },
    { id: '11', label: 'Manufacturing', position: { x: 250, y: 600 } },
    { id: '12', label: 'Material', position: { x: 150, y: 700 } },
    { id: '13', label: 'Production', position: { x: 350, y: 700 } },
    { id: '14', label: 'Sales/Marketing', position: { x: 250, y: 800 } },
    { id: '15', label: 'Online', position: { x: -10, y: 900 } },
    { id: '16', label: 'Dealership', position: { x: 500, y: 900 } },
    { id: '17', label: 'Interview', position: { x: -400, y: 900 } },
    { id: '18', label: 'Public Data', position: { x: -600, y: 900 } },
    { id: '19', label: 'Health', position: { x: -200, y: 900 } },
  ];

  const edges = [
    { id: '1', source: '1', target: '2' },
    { id: '2', source: '2', target: '3' },
    { id: '3', source: '3', target: '4' },
    { id: '4', source: '4', target: '5' },
    { id: '5', source: '5', target: '6' },
    { id: '6', source: '6', target: '7' },
    { id: '7', source: '7', target: '8' },
    { id: '8', source: '8', target: '9' },
    { id: '9', source: '9', target: '10' },
    { id: '10', source: '10', target: '11' },
    { id: '11', source: '11', target: '12' },
    { id: '12', source: '12', target: '13' },
    { id: '13', source: '13', target: '14' },
    { id: '14', source: '14', target: '15' },
    { id: '15', source: '15', target: '16' },
    { id: '16', source: '16', target: '17' },
    { id: '17', source: '17', target: '18' },
    { id: '18', source: '18', target: '19' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
        {edges.map(edge => {
          const startPos = elements.find(el => el.id === edge.source).position;
          const endPos = elements.find(el => el.id === edge.target).position;
          return (
            <line
              key={edge.id}
              x1={startPos.x}
              y1={startPos.y}
              x2={endPos.x}
              y2={endPos.y}
              style={{
                stroke: 'black',
                strokeWidth: 2,
              }}
            />
          );
        })}
      </svg>

      <div>
        {elements.map((element) => (
          <div
            key={element.id}
            onMouseEnter={() => handleHover(element.label)}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'absolute', left: element.position.x, top: element.position.y, cursor: 'pointer' }}
          >
            {element.label}
          </div>
        ))}
      </div>

      {hoveredElement && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', padding: '5px', border: '1px solid #ccc' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>Statistics for {hoveredElement}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {Object.entries(getStatistics(hoveredElement)).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '5px', width: '150px', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '5px' }}>{key}</span>
                <div style={{ display: 'inline-block', width: `${value}px`, height: '10px', background: 'lightblue' }}></div>
                <span style={{ marginLeft: '5px' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
