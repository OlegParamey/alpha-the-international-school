import { ContainerHeader } from './ContentComponents';

type SectionTextBlockItemProps = {
	title?: string;
	block: React.ReactNode;
	isBlockFirst?: boolean;
	children: React.ReactNode | React.ReactNode[];
};

const SectionTextBlockItem: React.FC<SectionTextBlockItemProps> = ({
	title,
	block,
	isBlockFirst = false,
	children,
}) => {
	return (
		<div
			className={`flex ${
				isBlockFirst ? 'flex-col-reverse' : 'flex-col'
			} lg:flex-row items-center justify-around`}
		>
			{isBlockFirst && block}
			<div className="w-5/6">
				{title && <ContainerHeader title={title} />}
				<div className="mx-8 my-4 text-lg sm:text-xl text-black">{children}</div>
			</div>
			{!isBlockFirst && block}
		</div>
	);
};

export default SectionTextBlockItem;
