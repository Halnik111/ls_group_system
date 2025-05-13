import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Work from "./pages/Work";
import HistoryDatabase from "./pages/HistoryDatabse";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";

function App() {
    return (
        <AuthProvider>
            <HashRouter>
                <div className={'h-screen flex overflow-hidden font-inter'}>
                    <div className={'hidden w-1/6 md:flex flex-col gap-2 bg-gray-800 text-white'}>
                        <div className={'hidden md:flex cursor-pointer justify-center lg:block text-xl font-bold bg-red-100 text-black p-4'}>
                            LS-Group
                        </div>
                        <Sidebar />
                    </div>
                    <div className={'w-full md:w-5/6 bg-gray-950 text-white'}>
                        <Navbar />
                        <Routes>
                            <Route path={'/'}>
                                <Route element={<ProtectedRoute allowedRoutes={['user', 'admin']}/>}>
                                    <Route index element={<Home />}/>
                                    <Route path={'carWork'} element={<Work />}/>
                                    <Route path={'database'} element={<HistoryDatabase />}/>
                                </Route>
                                <Route path={'login'} element={<Login />}/>
                                <Route path={'logout'} element={<Login signOut={true}/>}/>
                                <Route path={'/unauthorized'} element={<Unauthorized />}/>
                            </Route>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
