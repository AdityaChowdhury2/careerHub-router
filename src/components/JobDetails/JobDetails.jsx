import { useLoaderData, useParams } from 'react-router-dom';
import PageHeading from '../PageHeading/PageHeading';
import { Icon } from '@iconify/react';
import { setJobIdInLS } from '../../Utils/localStorageDb';
import { toast } from 'react-toastify';
const JobDetails = () => {
	const data = useLoaderData();
	console.log(data);
	const params = useParams();
	console.log(typeof params.jobId);
	const job = data.find(job => job.id === Number(params.jobId));
	console.log(job);
	const {
		id,
		salary,
		job_title,
		contact_information,
		educational_requirements,
		experiences,
		job_description,
		job_responsibility,
		// job_type,
		// location,
		// remote_or_onsite,
		// company_name,
	} = job;
	const { address, email, phone } = contact_information;
	return (
		<div className="">
			<PageHeading title="Job Details" />
			<div className="grid grid-cols-1 lg:grid-cols-12 container my-32 gap-12 px-5 lg:px-2">
				<div className="lg:col-span-8 text-justify">
					<p className="text-gray-500">
						<span className="font-bold text-black">Job Description: </span>
						{job_description}
					</p>
					<p className="text-gray-500 mt-6">
						<span className="font-bold text-black">Job Responsibility: </span>
						{job_responsibility}
					</p>
					<p className="font-bold mt-6">Educational Requirements: </p>
					<p className="my-6 text-gray-500">{educational_requirements}</p>
					<p className="my-6 font-bold">Experiences</p>
					<p className="text-gray-500">{experiences}</p>
				</div>
				<div className="lg:col-span-4 ">
					<div className="p-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-slate-100 bg-blend-overlay rounded-lg ">
						<h4 className="font-bold">Job Details</h4>
						<div className="divider"></div>
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<Icon icon="solar:dollar-linear" color="#7e90fe" height="20" />
								<p className="text-gray-500">
									<span className="font-semibold text-black">Salary : </span>{' '}
									{salary} (Per Month)
								</p>
							</div>
							<div className="flex items-center gap-2">
								<Icon icon="ion:calendar-outline" color="#7e90fe" height="20" />
								<p className="text-gray-500">
									<span className="font-semibold text-black">Job Title : </span>{' '}
									{job_title}
								</p>
							</div>
						</div>
						<h4 className="font-bold mt-8">Contact Information</h4>
						<div className="divider"></div>
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<Icon icon="solar:phone-outline" color="#7e90fe" height="20" />
								<p className="text-gray-500">
									<span className="font-semibold text-black">Phone : </span>{' '}
									{phone}
								</p>
							</div>
							<div className="flex items-center gap-2">
								<Icon icon="mdi-light:email" color="#7e90fe" height="20" />
								<p className="text-gray-500">
									<span className="font-semibold text-black">Email : </span>{' '}
									{email}
								</p>
							</div>
							<div className="flex items-center  gap-2 lg:items-start">
								<Icon icon="codicon:location" color="#7e90fe" height="32" />
								<p className="text-gray-500">
									<span className="font-semibold text-black">Address: </span>{' '}
									{address}
								</p>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<button
							className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-2 rounded-md text-white font-semibold w-full"
							onClick={() => {
								const res = setJobIdInLS(id);
								res
									? toast.success('Application submitted successfully')
									: toast.error('You already have an application');
							}}
						>
							Apply Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
