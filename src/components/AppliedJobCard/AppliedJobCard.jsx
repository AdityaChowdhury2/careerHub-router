import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const AppliedJobCard = ({ job }) => {
	const {
		id,
		logo,
		job_title,
		company_name,
		remote_or_onsite,
		location,
		salary,
		job_type,
	} = job;
	return (
		<div className="flex flex-col lg:flex-row gap-4 justify-between items-center p-8 border rounded-lg">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="lg:bg-gray-200 flex justify-center items-center px-12 rounded-md">
					<img src={logo} alt="" className="w-36" />
				</div>
				<div className="card-body p-2 lg:p-8">
					<h2 className="card-title">{job_title}</h2>
					<p className="text-gray-500 font-semibold">{company_name}</p>
					<div className="my-3 space-x-6">
						<button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold rounded p-[1px]">
							<p className="bg-white w-full h-full rounded-[3px]">
								<span className="flex w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text rounded px-3 py-[2px]">
									{remote_or_onsite}
								</span>
							</p>
						</button>
						<button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold rounded p-[1px]">
							<p className="bg-white w-full h-full rounded-[3px]">
								<span className="flex w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text rounded px-3 py-[2px]">
									{job_type}
								</span>
							</p>
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
				</div>
			</div>
			<div>
				<button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-2 rounded-md text-white font-semibold">
					<Link to={`/job/${id}`}>View Details</Link>
				</button>
			</div>
		</div>
	);
};

AppliedJobCard.propTypes = {
	job: PropTypes.object.isRequired,
};

export default AppliedJobCard;
