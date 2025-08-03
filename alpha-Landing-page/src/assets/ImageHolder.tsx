interface ImageProps {
	isBig?: boolean;
	imgSrc?: string;
	isRoundedFull?: boolean;
}

export default function ImageHolder({
	imgSrc,
	isBig = false,
	isRoundedFull = false,
}: ImageProps) {
	return (
		<div className="w-full  mb-4 flex justify-center">
			<div
				className={`w-full ${isBig ? 'xl:max-w-4/7' : ''} ${
					isRoundedFull ? 'rounded-full' : 'rounded-2xl'
				} overflow-hidden `}
			>
				{imgSrc ? (
					<img
						src={imgSrc}
						alt="Image content"
						className="w-full h-full object-contain mx-auto"
					/>
				) : (
					<div className="w-full h-full bg-gray-200 flex items-center justify-center">
						<span className="text-gray-500">No image available</span>
					</div>
				)}
			</div>
		</div>
	);
}
