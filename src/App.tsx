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
      {showDeviceDetails&&(<button
          type="button"
          className="btn-close-custom end-0 sticky-top"
          aria-label="Close"
          onClick={handleDeviceClick}
          style={{ zIndex: 1050 }} 
        >
          &times; {/* 使用 &times; 符號來表示關閉 */}
        </button>)}
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