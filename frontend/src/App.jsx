import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Groups from './pages/Groups';
import { GoalProvider } from './context/GoalContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <main>
      <UserProvider>
        <GoalProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/groups" element={<Groups />} />
            </Routes>
          </BrowserRouter>
        </GoalProvider>
      </UserProvider>
    </main>
  );
}