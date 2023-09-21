import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
const ErrorElement = () => {
	return (
		<div className="container">
			<h1 className="font-bold mt-4 text-center mb-10">This is a Error Page</h1>
			<Link
				to="/"
				className=" flex items-center w-56 mx-auto gap-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-2 rounded-md text-white font-semibold"
			>
				<Icon icon="uil:arrow-left" />
				<span>Go back to home</span>
			</Link>
		</div>
	);
};

export default ErrorElement;
