type LogoImageProps = {
	imgSrc: string;
	isLeft?: boolean;
};

const LogoImage = ({ imgSrc, isLeft = false }: LogoImageProps) => {
	return (
		<div className={` m${isLeft ? 'l' : 'r'}-auto w-30 h-30 `}>
			<img
				className="rounded-lg hover:shadow-xl xl:opacity-80 hover:xl:opacity-100 duration-300"
				src={imgSrc}
				alt={imgSrc}
			/>
		</div>
	);
};

export default LogoImage;
