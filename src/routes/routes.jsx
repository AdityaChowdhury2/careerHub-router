import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import Home from '../components/Home/Home';
import ErrorElement from '../components/ErrorElement/ErrorElement';
import Blogs from '../components/Blogs/Blogs';
import Jobs from '../components/Jobs/Jobs';
import AppliedJobs from '../components/AppliedJobs/AppliedJobs';
import JobDetails from '../components/JobDetails/JobDetails';

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
				loader: () => fetch('/jobs.json'),
			},
			{
				path: '/statistics',
				element: <AppliedJobs />,
			},
			{
				path: '/job/:jobId',
				element: <JobDetails />,
				loader: () => fetch('/jobs.json'),
			},
		],
	},
]);

export default router;
