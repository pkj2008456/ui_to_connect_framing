import React from 'react';

interface DeviceCardProps {
  title: string;
  location: string;
  isOffline?: boolean;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ title, location, isOffline }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{location} {isOffline && '| Offline'}</p>
        <button className="btn btn-secondary">Toggle</button>
      </div>
    </div>
  );
};

export default DeviceCard;
