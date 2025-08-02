interface ImageProps {
	isBig?: boolean;
	imgSrc?: string;
	isRoundedFull?: boolean;
}

export default function ImagePlaceholder({
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
				<img
					src={imgSrc}
					alt={imgSrc}
					className="w-full h-full object-contain mx-auto"
				/>
				{/* МЕСТО ПОД КАРТИНКУ */}
			</div>
		</div>
	);
}
