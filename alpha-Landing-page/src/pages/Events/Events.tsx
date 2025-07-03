import type React from 'react';
import ImagePlaceholder from '../../assets/ImagePlaceholder';
import {
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
} from '../../components/content/ContentComponents';

const SchoolEventsPage: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div className="mb-6">
					<PageHeader
						title={`📚 Оздоровчі заходи школи "Альфа"`}
						description="Приєднуйтесь до нашої освітньої спільноти"
					/>
				</div>

				{/* Events Grid */}
				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					{/* Літній табір */}
					<CardContainer>
						<ContainerHeader title={`Літній табір "Альфа"`} icon={'☀️'} />

						<ImagePlaceholder color="bg-sky-500" />

						<DateBadge data="З 1 червня 2025" />

						<div className="space-y-4 mb-6">
							<DetailItem icon="🕘">Пн–Пт, з 9:00 до 18:00</DetailItem>
							<DetailItem icon="👫">Для дітей з 1 по 11 класи</DetailItem>
							<DetailItem icon="📍">
								гр. София, бул. „Сливница" № 188, вход „Б", етаж 2
							</DetailItem>
						</div>

						<WarningBox>
							💛 Це літо ваша дитина запам'ятає надовго. Простір свободи,
							творчості, розвитку та справжніх пригод.
						</WarningBox>

						<div className="space-y-2 mb-6">
							<HighlightItem icon="🏕">
								Екскурсії та походи мальовничими місцями Софії
							</HighlightItem>
							<HighlightItem icon="📚">
								Легка підготовка до школи за програмою НУШ
							</HighlightItem>
							<HighlightItem icon="💬">
								Англійська, болгарська та українська
							</HighlightItem>
							<HighlightItem icon="🎨">
								Творчі майстерні, креативні заняття, арт-активності
							</HighlightItem>
							<HighlightItem icon="🍎">
								Здорові звички, фруктові дні, вітаміни
							</HighlightItem>
							<HighlightItem icon="📊">
								Система мотивації й заохочення: бали, сюрпризи, сміх
							</HighlightItem>
							<HighlightItem icon="🚀">
								Лідерство, soft skills, профорієнтація через гру та
								взаємодію
							</HighlightItem>
							<HighlightItem icon="🤝">
								Підтримка тьюторів, дружнє спілкування з носіями мов
							</HighlightItem>
						</div>

						<WarningBox>🔔 Кількість місць обмежена!</WarningBox>

						<ContactData />
						<CTAButton href="https://forms.gle/Dt4hbF8dTsWw8vXk8">
							📝 Записатися в літній табір
						</CTAButton>
					</CardContainer>

					{/* Табір на морі */}
					<CardContainer>
						<ContainerHeader title={`"Альфа" на морі`} icon={'🌊'} />

						<ImagePlaceholder color="bg-sky-500" />

						<DateBadge data="6 липня - 13 липня" />

						<PriceBadge data="💶 320€ / 7 днів" />

						<div className="space-y-4 mb-6">
							<DetailItem icon="📍">м. Кітен, Болгарія</DetailItem>
							<DetailItem icon="🏨">
								Готель "Лазурний" (найкращий корпус табору «Разом»)
							</DetailItem>
							<DetailItem icon="👫">
								Для школярів від 5 до 11 класу
								<br />
								<small className="text-gray-500">
									(1-4 кл можемо записати з мамою 👩‍👧)
								</small>
							</DetailItem>
						</div>
						<div
							className={`italic text-gray-600 mb-6 p-4 
							bg-gradient-to-r from-blue-50 to-cyan-50 
							rounded-xl border-l-4 border-blue-400`}
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

const ContactData = () => {
	return (
		<div
			className={`bg-gradient-to-r from-blue-50 to-cyan-50 
		rounded-xl border-l-4 border-blue-400 p-6 mb-6`}
		>
			<h4 className="font-bold text-gray-800 mb-4 flex items-center">
				<span className="mr-2 text-xl">📞</span>
				Контакти:
			</h4>
			<div className="space-y-3">
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600 text-lg">📱</span>
					<span>+380972827263 (Telegram/Viber/WhatsApp)</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600 text-lg">📱</span>
					<span>+359876509588 (Болгарія)</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600 text-lg">📧</span>
					<span>schoolalphabg@gmail.com</span>
				</div>
			</div>
		</div>
	);
};

export default SchoolEventsPage;
