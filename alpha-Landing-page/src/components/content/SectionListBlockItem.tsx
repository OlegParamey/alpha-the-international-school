import { HighlightItem, ContainerHeader } from './ContentComponents';

type SectionListBlockItemProps = {
	title?: string;
	dataList: string[];
	block: React.ReactNode;
	isBlockFirst?: boolean;
	isChildrenBeforeList?: boolean;
	children?: React.ReactNode | React.ReactNode[];
};

const SectionListBlockItem: React.FC<SectionListBlockItemProps> = ({
	title,
	dataList,
	block,
	isBlockFirst = false,
	isChildrenBeforeList = false,
	children,
}) => {
	return (
		<div
			className={`flex ${
				isBlockFirst ? 'flex-col-reverse' : 'flex-col'
			} lg:flex-row items-center justify-around`}
		>
			{isBlockFirst && block}
			<div className="w-full">
				{title && <ContainerHeader title={title} />}
				{isChildrenBeforeList && children}
				<div className="my-4 text-lg sm:text-xl">
					{dataList.map((element, index) => (
						<HighlightItem key={index} icon="🔸">
							{element}
						</HighlightItem>
					))}
				</div>
				{!isChildrenBeforeList && children && (
					<div className="mx-8">{children}</div>
				)}
			</div>
			{!isBlockFirst && block}
		</div>
	);
};

export default SectionListBlockItem;
