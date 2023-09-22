import { useEffect, useState } from 'react';
import SectionIntro from '../SectionIntro/SectionIntro';
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = () => {
	const [jobs, setJobs] = useState([]);
	const [dataLength, setDataLength] = useState(4);

	useEffect(() => {
		// fetch('https://careerhub.free.beeceptor.com/jobs')
		const fetchJobs = async () =>
			await fetch('https://api.npoint.io/081cc9386a7ad960b5cb')
				.then(res => res.json())
				.then(data => setJobs(data));
		fetchJobs();
	}, []);

	const description =
		'Explore thousands of job opportunities with all the information you need. Its your future';
	return (
		<div>
			<SectionIntro title="Featured Jobs" description={description} />
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-16">
				{jobs.slice(0, dataLength).map(job => (
					<JobCard job={job} key={job.id} />
				))}
			</div>
			<div
				className={`flex justify-center mb-16 ${
					dataLength === jobs.length ? 'hidden' : 'block'
				}`}
			>
				<button
					className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-2 rounded-md text-white font-semibold"
					onClick={() => setDataLength(jobs.length)}
				>
					Show all
				</button>
			</div>
		</div>
	);
};

export default FeaturedJobs;
