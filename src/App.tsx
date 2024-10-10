import './App.css';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import ControlButtons from './components/ControlButtons';
import DeviceList from './components/DeviceList';
function App() {
  return (
    <div className="container">
      <Header />
      <WeatherInfo />
      <ControlButtons />
      <h3>All Devices</h3>
      <DeviceList />
    </div>
  );
}

export default App;