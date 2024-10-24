import './App.css'
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import Header from './components/Header.jsx';
import Stats from './components/Stats.jsx';
import ProgressBar from './components/ProgressBar.jsx';

function App() {
  return (
    <div className='body'>
      <div className="grid">
      <Sidebar className="Sidebar"  />
      <div className="right">
        <Header  className="Header" />
        <div className="uhead">
          <AboutUs className="AboutUs" />
          <Stats className="Stats" />
        </div>
        <ProgressBar className="ProgressBar" />
      </div>
      </div>
      <Footer className="Footer"/>
    </div>
  )
}
export default App;