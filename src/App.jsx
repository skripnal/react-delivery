import Header from './components/Header/Header'
import styles from './App.module.scss'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
