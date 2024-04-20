import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = async (props: Props) => {
	return (
		<div className='relative flex flex-col gap-4'>
			<section className='flex flex-col m-2'>
				<Workflow description='adnasda' id='dajksdkasd' name='Workflow 1' publish={false} />
				{/* <MoreCredits /> */}
			</section>
		</div>
	);
};

export default Workflows;
