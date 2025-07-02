import type React from 'react';

// CardContainer: White rounded card with shadow, hover effects, and gradient top border
// ContainerHeader: Header with icon and title for card sections
// DetailItem: Blue gradient background item with icon and text, slides right on hover
// HighlightItem: Simple item with green icon and text, subtle hover background
// CTAButton: Green gradient call-to-action button with hover lift effect
// PriceBadge: Red-pink gradient badge for displaying price information
// DateBadge: Yellow-orange gradient pill-shaped badge for dates
// WarningBox: Yellow warning box with left border for important notices
// StepItem: Numbered step with purple gradient circle and description

interface CardContainerProps {
	children: React.ReactNode;
	className?: string;
}

interface CardContainerHeaderProps {
	title: string;
	icon?: string;
}

interface DetailItemProps {
	icon: string;
	children: React.ReactNode;
	className?: string;
}

interface HighlightItemProps {
	icon: string;
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
	description: string;
}

/**
 * White rounded card with shadow, hover effects, and gradient top border
 */
const CardContainer: React.FC<CardContainerProps> = ({ children, className = '' }) => {
	return (
		<div
			className={`
      bg-white rounded-3xl p-1.5 pb-5 sm:p-8 shadow-2xl transition-all
      duration-700 ease-out relative overflow-hidden lg:col-span-2 xl:col-span-1
      hover:shadow-3xl border-t-4 border-gradient-to-r from-yellow-400 to-orange-500
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
		<div className="flex flex-row items-center my-6 justify-center sm:justify-normal">
			{icon && <div className="text-4xl">{icon}</div>}
			<h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 ">
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
    flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-4 
    transition-all duration-300 hover:from-blue-100 hover:to-indigo-100 hover:translate-x-2
    ${className}
  `}
	>
		<div className="text-indigo-600 mr-4 flex-shrink-0 text-xl">{icon}</div>
		<span className="text-gray-700">{children}</span>
	</div>
);

/**
 * Simple item with icon and text, subtle hover background
 */
const HighlightItem: React.FC<HighlightItemProps> = ({ icon, children }) => (
	<div className="flex items-start p-3 rounded-lg transition-all duration-300 hover:bg-blue-50">
		<span className="mr-3 flex-shrink-0 text-lg">{icon}</span>
		<span className="text-gray-700">{children}</span>
	</div>
);

/**
 * Green gradient call-to-action button with hover lift effect
 */
const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className = '' }) => {
	const baseClasses = `flex  text-center justify-center mx-auto w-3/4 sm:w-2/5
  p-2 md:px-8 md:py-4 rounded-full font-bold text-lg transition-all
  duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r 
  from-green-500 to-emerald-500 text-white hover:from-green-600 
  hover:to-emerald-600 shadow-lg hover:shadow-green-500/25`;

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`${baseClasses} ${className}`}
		>
			{children}
		</a>
	);
};

/**
 * Red-pink gradient badge for displaying price information
 */
const PriceBadge: React.FC<BadgeProps> = ({ data }) => (
	<div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl text-center mb-6 shadow-lg">
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
    text-white px-6 py-3 rounded-full font-bold text-lg mb-6`}
		>
			{data}
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
		<div className="text-yellow-800 font-semibold">{children}</div>
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
		<span className="text-gray-700">{children}</span>
	</div>
);

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
	return (
		<div className="text-center text-white ">
			<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
			<p className="text-xl md:text-2xl opacity-90">{description}</p>
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
};
