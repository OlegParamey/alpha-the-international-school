import type React from 'react';
import { CardContainer } from './ContentComponents';

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
	return (
		<section className="w-9/10">
			<CardContainer>
				<h2 className="w-full my-2 p-1 text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-900">
					{title}
				</h2>
				<div className="w-full mb-4">
					<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
				{children}
			</CardContainer>
		</section>
	);
};

export default Section;
