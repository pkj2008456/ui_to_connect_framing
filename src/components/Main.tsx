import React from 'react';
import WeatherInfo from './WeatherInfo';
import ControlButtons from './ControlButtons';
import DeviceList from './DeviceList';

interface MainProps {
  showDeviceDetails: boolean;
  onDeviceClick: () => void;
}

const Main: React.FC<MainProps> = ({ showDeviceDetails, onDeviceClick }) => {
  return (
    <main>
      {showDeviceDetails ? (
        <div>
          {/* 這裡可以放置新的頁面內容 */}
          <h2 onClick={onDeviceClick}>Device Details</h2>
          <DeviceList onDeviceClick={onDeviceClick} />
          {/* 你可以根據需要添加更多內容 */}
        </div>
      ) : (
        <>
          <WeatherInfo />
          <ControlButtons />
          <h3>All Devices</h3>
          <DeviceList onDeviceClick={onDeviceClick} />
        </>
      )}
    </main>
  );
};

export default Main;