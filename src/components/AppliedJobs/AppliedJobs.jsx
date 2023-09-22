import { useLoaderData } from 'react-router-dom';
import PageHeading from '../PageHeading/PageHeading';
import { useEffect, useState } from 'react';
import { getJobIdsFromLS } from '../../Utils/localStorageDb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';
import { Icon } from '@iconify/react';
import Spinner from '../Spinner/Spinner';

const AppliedJobs = () => {
	const jobs = useLoaderData();
	const [appliedJobs, setAppliedJobs] = useState([]);
	const [displayJobs, setDisplayJobs] = useState([]);
	// console.log(jobs);
	const handleJobsFilter = filter => {
		if (filter === 'All') {
			setDisplayJobs(appliedJobs);
		} else if (filter === 'Remote') {
			const remoteJobs = appliedJobs.filter(
				job => job.remote_or_onsite === 'Remote'
			);
			setDisplayJobs(remoteJobs);
		} else if (filter === 'Onsite') {
			const onsiteJobs = appliedJobs.filter(
				job => job.remote_or_onsite === 'Onsite'
			);
			setDisplayJobs(onsiteJobs);
		}
	};
	useEffect(() => {
		const appliedJobIds = getJobIdsFromLS();
		console.log(appliedJobIds);
		if (jobs.length) {
			// const appliedJobs = [];
			// for (const id of appliedJobIds) {
			// 	const job = jobs.find(job => job.id === id);
			// 	if (job) {
			// 		appliedJobs.push(job);
			// 	}
			// }
			const appliedJobs = jobs.filter(job => appliedJobIds.includes(job.id));
			setAppliedJobs(appliedJobs);
			setDisplayJobs(appliedJobs);
		}
	}, [jobs]);

	return (
		<div className="px-3">
			<PageHeading title="Applied Jobs" />
			{displayJobs?.length ? (
				<div className="container">
					<div className="flex justify-end my-5">
						<div className="dropdown dropdown-hover dropdown-end">
							<label tabIndex={0} className="btn m-1">
								Filter By
								<Icon icon="iconoir:nav-arrow-down" height={20} />
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li onClick={() => handleJobsFilter('All')}>
									<a>All</a>
								</li>

								<li onClick={() => handleJobsFilter('Remote')}>
									<a>Remote</a>
								</li>

								<li onClick={() => handleJobsFilter('Onsite')}>
									<a>Onsite</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="space-y-6 my-16">
						{displayJobs?.map(job => (
							<AppliedJobCard job={job} key={job.id} />
						))}
					</div>
				</div>
			) : (
				<div className="flex justify-center min-h-[60vh]">
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default AppliedJobs;
