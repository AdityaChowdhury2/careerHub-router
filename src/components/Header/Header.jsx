import { Link, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
	const links = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/jobs">Jobs</NavLink>
			</li>
			<li>
				<NavLink to="/blogs">Blogs</NavLink>
			</li>
			<li>
				<NavLink to="/statistics">Statistics</NavLink>
			</li>
		</>
	);
	return (
		<div>
			<ToastContainer />
			<div className="container navbar bg-base-100 mt-12">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{links}
						</ul>
					</div>
					<a className="normal-case text-xl font-bold cursor-pointer">
						CareerHub
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{links}</ul>
				</div>
				<div className="navbar-end">
					<button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-2 rounded-md text-white font-semibold">
						<Link to="/applied">Start Applying</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
