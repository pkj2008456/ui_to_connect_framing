import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';


function App() {
  const [showDeviceDetails, setShowDeviceDetails] = useState(false);

  const handleDeviceClick = () => {
    setShowDeviceDetails(showDeviceDetails => !showDeviceDetails);
  };

  return (
    <div>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container-fluid">
        <Main showDeviceDetails={showDeviceDetails} onDeviceClick={handleDeviceClick} />
      </div>
    </div>
  );
}

export default App;