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
				<div className="mb-6">
					<PageHeader
						title={`Мовні курси для дітей`}
						description="Відкрийте нові горизонти"
					/>
				</div>

				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					{/* Болгарська мова */}
					<CardContainer>
						<ContainerHeader title={`Болгарська мова рівня A1`} icon={'📚'} />

						<ImagePlaceholder color="bg-sky-500" />

						<WarningBox>
							❗ Для всіх учнів, які планують у 2025–2026 навчальному році
							отримати документ про освіту болгарського державного зразка,
							необхідно до 1 вересня пройти курс болгарської мови рівня А1.
							Це обовʼязкова умова для подальшої легалізації навчання та
							інтеграції у державну систему Болгарії.
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
