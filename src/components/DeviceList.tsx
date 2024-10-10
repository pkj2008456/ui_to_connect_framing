import React from 'react';
import DeviceCard from './DeviceCard';

const DeviceList: React.FC = () => {
  const devices = [
    { title: 'Ionizer 1', location: 'Balcony' },
    { title: 'Ionizer 2', location: 'Balcony' },
    { title: 'Cigar Humidor', location: 'Sensors', isOffline: true },
    { title: 'Kitchen Window', location: 'Kitchen' },
    { title: 'Kitchen Counter', location: 'Kitchen' },
  ];

  return (
    <div className="row rounded " style={{backgroundColor:"rgba(137, 179, 165,0.2)"}}>
      {devices.map((device, index) => (
        <div className="col-sm-6 col-md-4" key={index}>
          <DeviceCard {...device} />
        </div>
      ))}
    </div>
  );
};

export default DeviceList;
