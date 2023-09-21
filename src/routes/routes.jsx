import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import Home from '../components/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);

export default router;
