import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const JobCard = ({ job }) => {
	const {
		id,
		logo,
		job_title,
		company_name,
		location,
		remote_or_onsite,
		salary,
		job_type,
	} = job;
	return (
		<>
			<div className="card card-compact bg-base-100 shadow-xl">
				<figure
					style={{ justifyContent: 'flex-start', padding: '2rem 1rem 1rem' }}
				>
					<img src={logo} alt={`${company_name}'s logo`} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{job_title}</h2>
					<p className="text-gray-500">{company_name}</p>
					<div className="my-3 space-x-6">
						<button className="btn-outline btn capitalize text-indigo-600 border-purple-600">
							{remote_or_onsite}
						</button>
						<button className="btn-outline btn capitalize text-indigo-600 border-purple-600">
							{job_type}
						</button>
					</div>
					<div className="flex gap-4">
						<div className="flex items-center gap-1">
							<Icon icon="ion:location-outline" />
							{location}
						</div>
						<div className="flex items-center gap-1">
							<Icon icon="solar:dollar-linear" />
							{salary}
						</div>
					</div>
					<div className="card-actions justify-start mt-3">
						<button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-2 rounded-md text-white font-semibold">
							<Link to={`/job/${id}`}>View Details</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

JobCard.propTypes = {
	job: PropTypes.object.isRequired,
};

export default JobCard;
