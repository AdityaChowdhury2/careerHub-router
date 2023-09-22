import PropTypes from 'prop-types';

const SectionIntro = ({ title, description }) => {
	return (
		<div className="text-center">
			<h2 className="text-5xl font-bold">{title}</h2>
			<p className="text-gray-200 font-medium">{description}</p>
		</div>
	);
};

SectionIntro.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
export default SectionIntro;
