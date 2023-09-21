import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<div className="container">
			<h1>hello world</h1>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
