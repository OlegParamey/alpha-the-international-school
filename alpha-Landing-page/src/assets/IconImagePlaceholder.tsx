export default function IconImagePlaceholder({ isLeft = false }) {
	return <div className={`bg-yellow-500 m${isLeft ? 'l' : 'r'}-auto w-20 h-20`}></div>;
}
