import type React from 'react';
import ImagePlaceholder from '../../assets/ImagePlaceholder';
import {
	CardContainer,
	DetailItem,
	HighlightItem,
	CTAButton,
	DateBadge,
	WarningBox,
	StepItem,
	PageHeader,
	BorderContainer,
	PriceBadge,
} from '../../components/content/ContentComponents';

const SeaCamp: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div>
					<PageHeader title={`🌊 "Альфа" на морі`} />
				</div>

				{/* Events Grid */}
				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					{/* Табір на морі */}
					<CardContainer>
						<ImagePlaceholder imgSrc="events/2.jpg" isBig />

						<DateBadge data="6 липня - 13 липня" />

						<DetailItem icon="📍">м. Кітен, Болгарія</DetailItem>
						<DetailItem icon="👫">
							Для школярів від 5 до 11 класу
							<br />
							<small className="text-gray-500">
								(1-4 кл можемо записати з мамою 👩‍👧)
							</small>
						</DetailItem>

						<div
							className={`italic text-gray-600 mb-6 p-4 
							bg-gradient-to-r from-blue-50 to-cyan-50 
							rounded-xl border-l-4 border-blue-400 sm:text-lg xl:text-2xl`}
						>
							🌊 КОЖНА ДИТИНА ЗАСЛУГОВУЄ НА ВІДПОЧИНОК НА МОРІ! 🏖
							<br />
							💥 Тиждень у Болгарії — яскраві канікули!
						</div>
						<div className="space-y-4 mb-6">
							<BorderContainer>
								<h4 className="font-bold text-gray-800 mb-2 flex items-center">
									<span className="mr-2 text-green-500 text-xl">
										✅
									</span>
									Супровід:
								</h4>
								<HighlightItem icon="👥">
									Найвідповідальніші вчителі (1 наставник на кожні 10
									дітей)
								</HighlightItem>
							</BorderContainer>
							<BorderContainer>
								<h4 className="font-bold text-gray-800 mb-2 flex items-center">
									<span className="mr-2 text-green-500 text-xl">
										✅
									</span>
									Безпека:
								</h4>
								<HighlightItem icon="🏖">Власний пляж</HighlightItem>
								<HighlightItem icon="🏊">
									Працюють рятувальники
								</HighlightItem>
								<HighlightItem icon="⚕️">
									Чергування лікарів
								</HighlightItem>
							</BorderContainer>
							<BorderContainer>
								<h4 className="font-bold text-gray-800 mb-2 flex items-center">
									<span className="mr-2 text-green-500 text-xl">
										✅
									</span>
									Дозвілля:
								</h4>
								<HighlightItem icon="🎭">
									Аніматори 24/7 (навіть на пляжі!)
								</HighlightItem>
								<HighlightItem icon="⚽">
									Спортивні майданчики
								</HighlightItem>
								<HighlightItem icon="💃">
									Дискотеки на території
								</HighlightItem>
								<HighlightItem icon="🏊">Власний басейн</HighlightItem>
								<HighlightItem icon="🎪">
									Велика сцена, шоу та фестивалі
								</HighlightItem>
							</BorderContainer>
							<BorderContainer>
								<h4 className="font-bold text-gray-800 mb-2 flex items-center">
									<span className="mr-2 text-green-500 text-xl">
										✅
									</span>
									Харчування:
								</h4>
								<HighlightItem icon="🍽">
									Українські кухарі, шведський стіл
								</HighlightItem>
							</BorderContainer>
						</div>
						<WarningBox>
							🚌 Транспорт: організована поїздка комфортабельним автобусом
							(оплачується окремо)
						</WarningBox>
						<WarningBox>
							☝️ У таборі також можуть відпочивати діти разом із батьками!
						</WarningBox>

						<Booking />
						<div className="space-y-4 mb-6">
							<PriceBadge data={'💶 320€ / 7 днів'} />
							<DetailItem icon="🏨">
								Готель "Лазурний" (найкращий корпус табору «Разом»)
							</DetailItem>
						</div>
						<CTAButton href="https://forms.gle/vQtyq6R2amcDBK3m6">
							📝 Приєднатись до відпочинку
						</CTAButton>
					</CardContainer>
				</div>
			</div>
		</div>
	);
};

const Booking = () => {
	return (
		<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6">
			<h4 className="font-bold text-gray-800 mb-4 flex items-center">
				<span className="mr-2 text-yellow-500 text-xl">🔒</span>
				Щоб забронювати місце:
			</h4>
			<div className="space-y-4">
				<StepItem number={1}>Заповніть анкету (на кожну дитину окремо)</StepItem>
				<StepItem number={2}>
					Внесіть передоплату 100€ за адресою: гр. София, бул. „Сливница" № 188,
					вход „Б", етаж 2 (Каріна / Діана)
				</StepItem>
				<StepItem number={3}>Готуйте валізу 🧳</StepItem>
			</div>
		</div>
	);
};

export default SeaCamp;
