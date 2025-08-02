import type React from 'react';
import ImagePlaceholder from '../../assets/ImagePlaceholder';
import {
	CardContainer,
	ContainerHeader,
	HighlightItem,
	DateBadge,
	WarningBox,
	PageHeader,
	BorderContainer,
} from '../../components/content/ContentComponents';

const LangClases: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div>
					<PageHeader
						title={`Мовні курси для дітей`}
						description="Відкрийте нові горизонти"
					/>
				</div>

				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					{/* Болгарська мова */}
					<CardContainer>
						<ContainerHeader title={`Курси болгарської мови`} icon={'📚'} />

						<ImagePlaceholder imgSrc="langClasses/1.jpg" />

						<WarningBox>
							🔹Для учнів, які бажають покращити свій рівень володіння
							болгарською мовою, у Школі “Альфа” організовано мовні курси.
							Заняття проходять у групах, сформованих за віком і початковим
							рівнем знань, що дозволяє зробити навчання максимально
							ефективним та адаптованим для кожної дитини.
						</WarningBox>

						<DateBadge data="Кожен день ( крім пʼятниці ) з 15:10 - діагностики рівня мови та формування мовних груп." />

						<BorderContainer>
							<div className="space-y-4 mb-6">
								<h4 className="font-bold text-gray-800 mb-4 flex items-center">
									<span className="mr-2 text-xl">🕘</span>
									Формат навчання:
								</h4>
								<HighlightItem icon="🔸">
									1 заняття на тиждень по 2 годинии
								</HighlightItem>
								<HighlightItem icon="🔸">
									2 заняття на тиждень по 2 годинии
								</HighlightItem>
							</div>
						</BorderContainer>

						<WarningBox>
							💬 Якщо дитина вже володіє болгарською, діагностика покаже, чи
							потрібно проходити повний курс, чи потрібно вдосконалити,
							систематизувати знання, чи потрібен інтенсивний курс.
						</WarningBox>
						<WarningBox>
							❗️Для учасників літнього табору “Альфа” — курс включено у
							вартість табору( 2 раза по 1 зан. на тиждень)
						</WarningBox>
					</CardContainer>
				</div>
			</div>
		</div>
	);
};

export default LangClases;
