import SectionIntro from '../SectionIntro/SectionIntro';

const JobCategories = () => {
	const description =
		'Explore thousands of job opportunities with all the information you need. Its your future';
	return (
		<div>
			<SectionIntro title="Job Category List" description={description} />
		</div>
	);
};

export default JobCategories;
