import PropTypes from 'prop-types';

const PageHeading = ({ title }) => {
	return (
		<div className="lg:bg-hero-footer-background lg:bg-no-repeat lg:bg-left-bottom lg:h-56 mt-24">
			<h1 className="text-center text-5xl font-bold">{title}</h1>
		</div>
	);
};

PageHeading.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageHeading;
