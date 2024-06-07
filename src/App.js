import { Nav } from './components/Nav/index.tsx';
import  Hero  from './components/Hero/index.tsx';
import './styles/App.css';
import HomeScroll from './components/HomeScroll/index.tsx';

function App() {
  return (
    <div className="App">
        <Nav/>   
        <Hero/>
        {/* <HomeScroll/> */}
    </div>
  );
}

export default App;
