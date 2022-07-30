import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './docs/pages/home'
import Layout from './docs/pages/layout'
import Typography from './docs/pages/typography'

let App = () => {
	return (
	    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/typography" element={<Typography />} />
            </Routes>
        </BrowserRouter>
	)
}

export default App
