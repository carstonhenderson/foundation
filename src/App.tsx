import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Components from './docs/pages/components'
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
                <Route path="/components" element={<Components />} />
            </Routes>
        </BrowserRouter>
	)
}

export default App
