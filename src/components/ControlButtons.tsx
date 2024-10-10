import React from 'react';

const ControlButtons: React.FC = () => {
  return (
    <div className="d-flex justify-content-around my-4 ">
      <button className="btn btn-danger">Turn off all lights</button>
      <button className="btn btn-success">Dining all ON</button>
      <button className="btn btn-info">Kitchen all ON</button>
    </div>
  );
};

export default ControlButtons;
