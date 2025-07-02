export default function ImagePlaceholder({ color = 'bg-red-500' }: { color?: string }) {
	return (
		<div className="p-6 w-full">
			<div className={`${color} w-full h-100 rounded-2xl mx-auto`}>
				{/* МЕСТО ПОД КАРТИНКУ */}
			</div>
		</div>
	);
}
