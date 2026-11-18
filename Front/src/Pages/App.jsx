
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Inicio'

export default function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Inicio />} />

            </Routes>

        </BrowserRouter>
    )

}
