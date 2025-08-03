import type React from 'react';
import ImageHolder from '../../assets/ImageHolder';
import {
	CardContainer,
	DetailItem,
	HighlightItem,
	CTAButton,
	DateBadge,
	WarningBox,
	PageHeader,
} from '../../components/content/ContentComponents';

const SummerCamp: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div>
					<PageHeader title={`☀️ Літній табір "Альфа" в м. Софія`} />
				</div>

				{/* Events Grid */}
				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					{/* Літній табір */}
					<CardContainer>
						<ImageHolder imgSrc="events/1.jpg" isBig />

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
				</div>
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
			<h4 className="font-bold sm:text-lg xl:text-2xl text-gray-800 mb-4 flex items-center">
				<span className="mr-2 text-xl">📞</span>
				Контакти:
			</h4>
			<div className="space-y-3 sm:text-lg xl:text-xl">
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">📱</span>
					<span>+380972827263 (Telegram/Viber/WhatsApp)</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">📱</span>
					<span>+359876509588 (Болгарія)</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">📧</span>
					<span>schoolalphabg@gmail.com</span>
				</div>
			</div>
		</div>
	);
};

export default SummerCamp;
