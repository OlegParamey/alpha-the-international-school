import type React from 'react';

// CardContainer: White rounded card with shadow, hover effects, and gradient top border
// ContainerHeader: Header with icon and title for card sections
// DetailItem: Blue gradient background item with icon and text, slides right on hover
// HighlightItem: Simple item with icon and text, subtle hover background
// CTAButton: Green gradient call-to-action button with hover lift effect
// PriceBadge: Red-pink gradient badge for displaying price information
// DateBadge: Yellow-orange gradient pill-shaped badge for dates
// WarningBox: Yellow warning box with left border for important notices
// StepItem: Numbered step with purple gradient circle and description
// PageHeader: White text header with description

interface CardContainerProps {
	children: React.ReactNode;
	className?: string;
}

interface CardContainerHeaderProps {
	title: string;
	icon?: string;
}

interface DetailItemProps {
	icon?: string;
	children: React.ReactNode;
	className?: string;
}

interface HighlightItemProps {
	icon?: string;
	children: React.ReactNode;
}

interface CTAButtonProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

interface BadgeProps {
	data: string;
}

interface WarningBoxProps {
	children: React.ReactNode;
}

interface StepItemProps {
	number: number;
	children: React.ReactNode;
}

interface PageHeaderProps {
	title: string;
	description?: string;
}

interface BorderContainerProps {
	children: React.ReactNode | React.ReactNode[];
}

/**
 * White rounded card with shadow, hover effects, and gradient top border
 */
const CardContainer: React.FC<CardContainerProps> = ({ children, className = '' }) => {
	return (
		<div
			className={`
      bg-white rounded-3xl p-2.5 pb-5 sm:p-8 shadow-2xl transition-all
      duration-700 ease-out relative overflow-hidden lg:col-span-2 xl:col-span-1
      hover:shadow-3xl border-t-4 border-gradient-to-r from-yellow-400 to-orange-500 text-xl
      ${className}`}
		>
			<div
				className={`absolute top-0 left-0 right-0 h-2
          bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500`}
			></div>
			{children}
		</div>
	);
};

/**
 * Header with icon and title for card sections
 */
const ContainerHeader: React.FC<CardContainerHeaderProps> = ({ title, icon = null }) => {
	return (
		<div className="flex flex-row items-center my-6 justify-center w-full">
			{icon && <div className="text-4xl">{icon}</div>}
			<h2 className="text-2xl sm:text-4xl xl:text-5xl text-center font-bold text-gray-800 ">
				{title}
			</h2>
		</div>
	);
};

/**
 * Blue gradient background item with icon and text, slides right on hover
 */
const DetailItem: React.FC<DetailItemProps> = ({ icon, children, className = '' }) => (
	<div
		className={`
    flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-4 
    transition-all duration-300 hover:from-blue-100 hover:to-indigo-100 hover:translate-x-2
    ${className}
  `}
	>
		{icon && icon.length > 0 && (
			<div className="text-indigo-600 mr-4 flex-shrink-0 text-xl xl:text-2xl">
				{icon}
			</div>
		)}
		<span className="text-gray-700 sm:text-lg xl:text-2xl w-full">{children}</span>
	</div>
);

/**
 * Simple item with icon and text, subtle hover background
 */
const HighlightItem: React.FC<HighlightItemProps> = ({ icon, children }) => (
	<div className="flex items-start p-2 sm:p-3 mb-1 rounded-lg transition-all duration-300 hover:bg-blue-50 ">
		{icon && icon.length > 0 && (
			<span className="mr-3 flex-shrink-0 text-lg xl:text-2xl">{icon}</span>
		)}
		<span className="text-gray-700 text-base sm:text-lg xl:text-2xl">{children}</span>
	</div>
);

/**
 * Green gradient call-to-action button with hover lift effect
 */
const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className = '' }) => {
	const baseClasses = `flex text-center justify-center flex-1 mx-auto w-3/4 sm:w-2/5 sm:min-w-85
  p-2 md:px-8 md:py-4 rounded-full font-bold text-lg md:2xl xl:text-4xl transition-all
  duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r 
  from-green-500 to-emerald-500 text-white hover:from-green-400 
  hover:to-emerald-400 shadow-lg hover:shadow-green-500/25`;

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`${baseClasses} ${className}`}
		>
			{children}
			{/* <span className="flex items-center animate-pulse text-sm xl:text-xl mr-1">
				🔴
			</span> */}
			<div className=" animate-pulse size-3 xl:size-5 m-1 bg-red-600 rounded-full"></div>
		</a>
	);
};

/**
 * Red-pink gradient badge for displaying price information
 */
const PriceBadge: React.FC<BadgeProps> = ({ data }) => (
	<div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 sm:p-5 rounded-2xl text-center shadow-lg">
		<div className="text-3xl font-bold">{data}</div>
	</div>
);

/**
 * Yellow-orange gradient pill-shaped badge for dates
 */
const DateBadge: React.FC<BadgeProps> = ({ data }) => {
	return (
		<div
			className={`inline-block bg-gradient-to-r from-yellow-400 to-orange-500 
    text-white px-8 sm:px-6 py-3 sm:py-5 rounded-full font-bold text-lg xl:text-2xl mb-6 w-full sm:w-fit`}
		>
			🗓 {data}
		</div>
	);
};

/**
 * Yellow warning box with left border for important notices
 */
const WarningBox: React.FC<WarningBoxProps> = ({ children }) => (
	<div
		className={`bg-gradient-to-r from-yellow-50 to-amber-50 
  border-l-4 border-yellow-400 p-4 rounded-lg my-4`}
	>
		<div className="text-yellow-800 font-semibold sm:text-lg xl:text-2xl">
			{children}
		</div>
	</div>
);

/**
 * Numbered step with purple gradient circle and description
 */
const StepItem: React.FC<StepItemProps> = ({ number, children }) => (
	<div className="flex items-center p-4 bg-white rounded-xl shadow-sm mb-4 border border-gray-100">
		<div
			className={`bg-gradient-to-r from-indigo-600 to-purple-600 
      text-white w-8 h-8 rounded-full flex 
      items-center justify-center font-bold mr-4 flex-shrink-0`}
		>
			{number}
		</div>
		<span className="text-gray-700 xl:text-2xl">{children}</span>
	</div>
);

/**
 * White text header with description
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
	return (
		<div className="text-center text-white ">
			<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">{title}</h1>
			{description && (
				<p className="text-xl md:text-2xl xl:text-3xl opacity-90 italic">
					{description}
				</p>
			)}{' '}
		</div>
	);
};

/**
 * Adds border for children
 */
const BorderContainer: React.FC<BorderContainerProps> = ({ children }) => {
	return (
		<div className="bg-white p-1 px-4 mb-4 border border-teal-300 rounded-2xl">
			{children}
		</div>
	);
};

export {
	CardContainer,
	ContainerHeader,
	DetailItem,
	HighlightItem,
	CTAButton,
	PriceBadge,
	DateBadge,
	WarningBox,
	StepItem,
	PageHeader,
	BorderContainer,
};
