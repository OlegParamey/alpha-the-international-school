import type React from 'react';
import ImagePlaceholder from '../../assets/ImagePlaceholder';
import IconImagePlaceholder from '../../assets/IconImagePlaceholder';
import {
	CardContainer,
	ContainerHeader,
	HighlightItem,
	CTAButton,
	PageHeader,
} from '../../components/UI/ContentComponents';

export default function Home() {
	return (
		<div className="gradient min-h-screen max-w-screen pt-10">
			<div className="container mx-auto px-5 flex flex-col gap-5 md:flex-row justify-center items-center mb-6">
				<PageHeader
					title={`Міжнародна інноваційна школа "Альфа"`}
					description="Унікальна школа в Європі, створена для Альфа-дітей — майбутніх
						дипломатів, бізнесменів, успішних підприємців та чесних партнерів."
				/>
				<ImagePlaceholder />
			</div>
			<div className="flex flex-col justify-center items-center gap-y-10">
				<Section title={'Структура освітньої екосистеми'}>
					<SectionTextBlockItem
						title={'Освітні програми:'}
						block={<ImagePlaceholder />}
						dataList={[
							'Державний український ліцей (1-11 класи за програмою НУШ)',
							'Болгарська прогресивна школа (адаптована під українських дітей)',
							'Бізнес-школа для розвитку soft skills',
						]}
					/>
					<SectionTextBlockItem
						isBlockFirst
						title={'Додаткові компоненти:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Методична база знань',
							'Школа для вчителів та батьків',
							'Центр дослідження та управління якістю освіти',
							'Адміністративно-інформаційний центр',
						]}
					>
						<p className="italic text-xs text-gray-500 ">
							Створено Фондом за образователни трансформации
						</p>
					</SectionTextBlockItem>
				</Section>
				<Section title="Об'єднані заради мети">
					<SectionTextBlockItem
						title="Партнери та підтримка:"
						block={
							<div className="grid grid-cols-2 place-items-stretch gap-5 p-6 w-full sm:w-3/5 ">
								<IconImagePlaceholder isLeft />
								<IconImagePlaceholder />
								<IconImagePlaceholder isLeft />
								<IconImagePlaceholder />
							</div>
						}
						dataList={[
							'Донецький регіональний центр оцінювання якості освіти',
							'Foundation Situational Center «Open Doors»',
							'Бізнес-клуб «Holders»',
							'Міжнародна організація жінок-лідерок «United Women»',
						]}
					></SectionTextBlockItem>
				</Section>
				<Section title={'Цінності школи'}>
					<SectionTextBlockItem
						title={'Основні принципи:'}
						block={<ImagePlaceholder />}
						dataList={[
							'Дитиноцентризм',
							'Сучасність та інноваційність',
							'Професіоналізм та академічна якість',
						]}
					/>
					<SectionTextBlockItem
						isBlockFirst
						title={'Навички та компетенції:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Фінансова та медіа грамотності',
							'Самопізнання та розвиток Soft Skills',
							'Бізнес-освіта та проєктна діяльність',
						]}
					/>
					<SectionTextBlockItem
						title={'Культура навчання:'}
						block={<ImagePlaceholder color="bg-yellow-500" />}
						dataList={[
							'Командна робота та демократичні стосунки',
							'Демократична атмосфера — партнерство учнів, батьків та адміністрації',
						]}
					/>
				</Section>
				<Section title={'Освітні програми та гнучкість'}>
					<SectionTextBlockItem
						title={'Варіанти навчання (можна поєднувати):'}
						block={<ImagePlaceholder />}
						dataList={[
							'Основна болгарська школа + українська',
							'Основна українська школа + болгарська',
							'+ Поглиблене вивчення англійської мови',
							'+ Soft Skills',
						]}
					/>
					<SectionTextBlockItem
						isBlockFirst
						title={'Документи про освіту (є можливість отримати 3):'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Болгарський атестат (Ліцензія № РД14-213/06.07.17)',
							'Українське свідоцтво про освіту (Державний ліцей)',
							'IB Diploma Programme (11-12 класи) — перевага для вступу до провідних університетів Європи',
						]}
					/>
				</Section>
				<Section title="Головна відмінність">
					<ImagePlaceholder color="bg-blue-500" />
					<div className="text-black text-2xl font-semibold text-center p-4">
						<h2>⭐ "Альфа - це коли обирає ви, а не коли обирають вас" ⭐</h2>
					</div>
				</Section>
				<Section title={'Фокус розвитку'}>
					<SectionTextBlockItem
						title={'Розвиток під менторством:'}
						block={<ImagePlaceholder />}
						dataList={['Учителів', 'Коучів', 'Бізнес-експертів']}
					/>
					<SectionTextBlockItem
						isBlockFirst
						title={'Напрямки:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={['Soft Skills', 'Бізнес-освіта', 'Особистий зріст']}
					/>
				</Section>
				<Section title={'Бачення та місія школи'}>
					<SectionTextBlockItem
						isChildrenBeforeList
						title={'Бачення:'}
						block={<ImagePlaceholder />}
						dataList={[
							'Якісну академічну освіту',
							'Розвиток підприємницьких навичок',
							'Демократичну культуру',
						]}
					>
						<p className="text-lg font-semibold text-gray-700">
							Стати провідною інноваційною школою Європи, яка виховує
							лідерів майбутнього через:
						</p>
					</SectionTextBlockItem>
					<SectionTextBlockItem
						isChildrenBeforeList
						isBlockFirst
						title={'Напрямки:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Фінансово грамотними',
							'Соціально відповідальними',
							'Креативними особистостями',
							'Здатними адаптуватися у стрімко мінливому світі',
						]}
					>
						<p className="text-lg font-semibold text-gray-700">
							Надати учням інструменти та знання для успішної
							самореалізації, навчити їх бути:
						</p>
					</SectionTextBlockItem>
				</Section>
				<section className="container mx-auto text-center pb-10 text-white">
					<h2 className="w-full my-2 text-5xl font-bold leading-tight text-center ">
						Заклик до дії
					</h2>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<h3 className="my-4 text-3xl leading-tight">
						Міжнародна інноваційна школа "Альфа" — це простір для тих, хто
						хоче рухатися вперед, розвиватися та досягати вершин!
					</h3>
					<CTAButton href="https://docs.google.com/forms/d/e/1FAIpQLSdOxtCGl-MZz525cbQQCIwSla4Dwv5E4Hi_6dccQTxxycz8PQ/viewform">
						Приєднатися!
					</CTAButton>
				</section>
			</div>
		</div>
	);
}

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
	return (
		<section className="w-9/10">
			<CardContainer>
				<h2 className="w-full my-2 p-1 text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-900">
					{title}
				</h2>
				<div className="w-full mb-4">
					<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
				{children}
			</CardContainer>
		</section>
	);
};

type SectionItemProps = {
	title: string;
	dataList: string[];
	block: React.ReactNode;
	isBlockFirst?: boolean;
	isChildrenBeforeList?: boolean;
	children?: React.ReactNode | React.ReactNode[];
};

const SectionTextBlockItem: React.FC<SectionItemProps> = ({
	title,
	dataList,
	block,
	isBlockFirst = false,
	isChildrenBeforeList = false,
	children,
}) => {
	return (
		<div
			className={`flex ${
				isBlockFirst ? 'flex-col-reverse' : 'flex-col'
			} lg:flex-row items-center justify-around`}
		>
			{isBlockFirst && block}
			<div className="w-5/6">
				<ContainerHeader title={title} />
				{isChildrenBeforeList && children}
				<div className="my-4 text-lg sm:text-xl">
					{dataList.map((element, index) => (
						<HighlightItem key={index} icon="🔸">
							{element}
						</HighlightItem>
					))}
				</div>
				{!isChildrenBeforeList && children && (
					<div className="mx-8">{children}</div>
				)}
			</div>
			{!isBlockFirst && block}
		</div>
	);
};
