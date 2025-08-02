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
			className={`flex p-2 ${
				isBlockFirst ? 'flex-col-reverse' : 'flex-col'
			} lg:flex-row items-center justify-around`}
		>
			{isBlockFirst && block}
			<div className="w-5/6">
				{title && <ContainerHeader title={title} />}
				<div className="my-4 md:mx-4 text-base md:text-lg lg:text-xl xl:text-2xl text-black">
					{children}
				</div>
			</div>
			{!isBlockFirst && block}
		</div>
	);
};

export default SectionTextBlockItem;
