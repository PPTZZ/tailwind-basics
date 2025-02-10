import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Typography from './Componets/Typography/Typography.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
        <Route path='/typography' element={<Typography/>}/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
