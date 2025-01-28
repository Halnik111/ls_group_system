import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Order from "./pages/Order";
import VehicleDatabase from "./pages/VehicleDatabase";

function App() {
  return (
      <HashRouter>
        <div className={'h-screen flex overflow-hidden font-inter'}>
            <div className={'hidden w-1/6 md:flex flex-col gap-2 bg-gray-800 text-white'}>
                <div className={'hidden md:flex justify-center lg:block text-xl font-bold bg-red-100 text-black p-4'}>
                    LS-Group
                </div>
                <Sidebar />
            </div>
            <div className={'w-full md:w-5/6 bg-gray-950 text-white'}>
                <Navbar />
                <Routes>
                    <Route path={'/'}>
                        <Route index element={<Home />}/>
                        <Route path={'carOrder'} element={<Order />}/>
                        <Route path={'car_database'} element={<VehicleDatabase />}/>
                    </Route>
                </Routes>
            </div>
        </div>
      </HashRouter>
  );
}

export default App;
