import { Outlet } from 'react-router';
import './tailwind.css';
import { Link } from 'react-router';
function App() {
	return (
		<>
			<div>
				<Link to={'/'}>Home</Link>
				<Link to={'/typography'}>Typography</Link>
				<Outlet />
			</div>
		</>
	);
}

export default App;
