import { GradientWaveBottom, GradientWaveTop } from '../../assets/GradientWave';

export default function PreparingForSchool() {
	const buttonClass =
		'mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out';
	return (
		<div className="leading-normal tracking-normal text-white gradient">
			<div>
				<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
					<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
						<h1 className="my-4 text-5xl font-bold leading-tight">
							Main Hero Message to sell yourself!
						</h1>
						<p className="leading-normal text-2xl mb-8">
							Sub-hero message, not too long and not too short. Make it just
							right!
						</p>
						<button className={buttonClass}>Subscribe</button>
					</div>
					<div className="w-full md:w-3/5 py-6 text-center">
						<img className="w-full md:w-4/5 z-50" src="hero.png" />
					</div>
				</div>
			</div>
			<div className="relative -mt-12 lg:-mt-24">
				<GradientWaveTop />
			</div>
			<section className="bg-white  py-8">
				<div className="container max-w-5xl mx-auto m-8">
					<h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
						Title
					</h2>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<div className="flex flex-wrap">
						<div className="w-5/6 sm:w-1/2 p-6">
							<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
								Lorem ipsum dolor sit amet
							</h3>
							<p className="text-gray-600 mb-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Aliquam at ipsum eu nunc commodo posuere et sit amet
								ligula.
							</p>
						</div>
						<div className="w-full sm:w-1/2 p-6">
							<div className="bg-red-500 w-100 h-70">
								{/* МЕСТО ПОД КАРТИНКУ 1 */}
							</div>
						</div>
					</div>
					<div className="flex flex-wrap flex-col-reverse sm:flex-row">
						<div className="w-full sm:w-1/2 p-6 mt-6">
							<div className="bg-green-500 w-100 h-70">
								{/* МЕСТО ПОД КАРТИНКУ 2 */}
							</div>
						</div>
						<div className="w-full sm:w-1/2 p-6 mt-6">
							<div className="align-middle">
								<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
									Lorem ipsum dolor sit amet
								</h3>
								<p className="text-gray-600 mb-8">
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Aliquam at ipsum eu nunc commodo posuere et sit
									amet ligula.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white  py-8">
				<div className="container mx-auto flex flex-wrap pt-4 pb-12">
					<h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
						Title
					</h2>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
							<a
								href="#"
								className="flex flex-wrap no-underline hover:no-underline"
							>
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">
									xGETTING STARTED
								</p>
								<div className="w-full font-bold text-xl text-gray-800 px-6">
									Lorem ipsum dolor sit amet.
								</div>
								<p className="text-gray-800 text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Aliquam at ipsum eu nunc commodo posuere et sit
									amet ligula.
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
							<div className="flex items-center justify-start">
								<button className={buttonClass}>Action</button>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
							<a
								href="#"
								className="flex flex-wrap no-underline hover:no-underline"
							>
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">
									xGETTING STARTED
								</p>
								<div className="w-full font-bold text-xl text-gray-800 px-6">
									Lorem ipsum dolor sit amet.
								</div>
								<p className="text-gray-800 text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Aliquam at ipsum eu nunc commodo posuere et sit
									amet ligula.
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
							<div className="flex items-center justify-center">
								<button className={buttonClass}>Action</button>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
							<a
								href="#"
								className="flex flex-wrap no-underline hover:no-underline"
							>
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">
									xGETTING STARTED
								</p>
								<div className="w-full font-bold text-xl text-gray-800 px-6">
									Lorem ipsum dolor sit amet.
								</div>
								<p className="text-gray-800 text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Aliquam at ipsum eu nunc commodo posuere et sit
									amet ligula.
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
							<div className="flex items-center justify-end">
								<button className={buttonClass}>Action</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<GradientWaveBottom />
			<section className="container mx-auto text-center py-6">
				<h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
					Call to Action
				</h2>
				<div className="w-full mb-4">
					<div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
				<h3 className="my-4 text-3xl leading-tight">
					Main Hero Message to sell yourself!
				</h3>
				<button className={buttonClass}>Action!</button>
			</section>
		</div>
	);
}
