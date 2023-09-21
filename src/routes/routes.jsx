import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import Home from '../components/Home/Home';
import ErrorElement from '../components/ErrorElement/ErrorElement';
import Blogs from '../components/Blogs/Blogs';
import Jobs from '../components/Jobs/Jobs';
import AppliedJobs from '../components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/jobs',
				element: <Jobs />,
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/applied',
				element: <AppliedJobs />,
			},
			{
				path: '/statistics',
				element: <AppliedJobs />,
			},
		],
	},
]);

export default router;
