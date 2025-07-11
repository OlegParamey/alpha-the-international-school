import ImagePlaceholder from '../../assets/ImagePlaceholder';
import IconImagePlaceholder from '../../assets/IconImagePlaceholder';
import Section from '../../components/content/Section';
import SectionListBlockItem from '../../components/content/SectionListBlockItem';
import { CTAButton, PageHeader } from '../../components/content/ContentComponents';

export default function Home() {
	return (
		<div className="gradient min-h-screen max-w-screen pt-10">
			<div className="container mx-auto px-5 flex flex-col gap-5 md:flex-row justify-center items-center mb-6">
				<div className="flex flex-col gap-4">
					<PageHeader
						title={`Міжнародна інноваційна школа "Альфа"`}
						description="Унікальна школа в Європі, створена для Альфа-дітей — майбутніх
						дипломатів, бізнесменів, успішних підприємців та чесних партнерів."
					/>
					<EnrollmentButton />
				</div>
				<ImagePlaceholder />
			</div>
			<div className="flex flex-col justify-center items-center gap-y-10">
				<Section title={'Структура освітньої екосистеми'}>
					<SectionListBlockItem
						title={'Освітні програми:'}
						block={<ImagePlaceholder />}
						dataList={[
							'Державний український ліцей (1-11 класи за програмою НУШ)',
							'Болгарська прогресивна школа (адаптована під українських дітей)',
							'Бізнес-школа для розвитку soft skills',
						]}
					/>
					<SectionListBlockItem
						isBlockFirst
						title={'Додаткові компоненти:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Методична база знань',
							'Школа для вчителів та батьків',
							'Центр дослідження та управління якістю освіти',
							`Адміністративно-інформаційний центр.
							Створено Фондом за образователни трансформации`,
						]}
					></SectionListBlockItem>
				</Section>

				<Section title={'Цінності школи'}>
					<SectionListBlockItem
						title={'Основні принципи:'}
						block={<ImagePlaceholder />}
						dataList={[
							'Дитиноцентризм',
							'Сучасність та інноваційність',
							'Професіоналізм та академічна якість',
						]}
					/>
					<SectionListBlockItem
						isBlockFirst
						title={'Навички та компетенції:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Фінансова та медіа грамотності',
							'Самопізнання та розвиток Soft Skills',
							'Бізнес-освіта та проєктна діяльність',
						]}
					/>
					<SectionListBlockItem
						title={'Культура навчання:'}
						block={<ImagePlaceholder color="bg-yellow-500" />}
						dataList={[
							'Командна робота та демократичні стосунки',
							'Демократична атмосфера — партнерство учнів, батьків та адміністрації',
						]}
					/>
					<EnrollmentButton />
				</Section>
				<Section title={'Унікальність навчання'}>
					<SectionListBlockItem
						title={'Варіанти навчання (можна поєднувати):'}
						block={<ImagePlaceholder />}
						dataList={[
							'Основна болгарська школа + українська',
							'Основна українська школа + болгарська',
							'Вивчення декількох мов',
							'Soft Skills',
						]}
					/>
					<SectionListBlockItem
						isBlockFirst
						title={'Є можливість отримати такі документи:'}
						block={<ImagePlaceholder color="bg-green-500" />}
						dataList={[
							'Болгарський атестат (Ліцензія № РД14-213/06.07.17)',
							'Українське свідоцтво про освіту (Державний ліцей)',
							'IB Diploma Programme (11-12 класи) — перевага для вступу до провідних університетів Європи',
						]}
					/>
				</Section>
				<Section title="Альфа - це коли обирає дитина, а не коли обирають її">
					<ImagePlaceholder color="bg-blue-500" />
					<EnrollmentButton />
				</Section>
				<Section title={'Бачення та місія школи'}>
					<SectionListBlockItem
						isChildrenBeforeList
						title={'Бачення:'}
						block={<ImagePlaceholder />}
						dataList={[
							'Якісну академічну освіту',
							'Розвиток підприємницьких навичок',
							'Демократичну культуру',
						]}
						itemIcon=""
					>
						<p className="text-lg xl:text-2xl font-semibold text-gray-700">
							Стати провідною інноваційною школою Європи, яка виховує
							лідерів майбутнього через:
						</p>
					</SectionListBlockItem>
					<SectionListBlockItem
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
						itemIcon=""
					>
						<p className="text-lg 2xl:text-2xl font-semibold text-gray-700">
							Надати учням інструменти та знання для успішної
							самореалізації, навчити їх бути:
						</p>
					</SectionListBlockItem>
				</Section>
				<Section title="Об'єднані заради мети">
					<SectionListBlockItem
						title="Партнери та підтримка:"
						block={
							<div className="grid grid-cols-2 place-items-stretch gap-5 p-6 w-full sm:w-3/5 ">
								<IconImagePlaceholder isLeft />
								<IconImagePlaceholder />
								<IconImagePlaceholder isLeft />
								<IconImagePlaceholder />
								<IconImagePlaceholder isLeft />
								<IconImagePlaceholder />
							</div>
						}
						dataList={[
							'Донецький регіональний центр оцінювання якості освіти (НМТ, ЄВІ, ЄФВВ)',
							'Foundation Situational Center "Open Doors"',
							'Бізнес-клуб "Holders"',
							'Міжнародна організація жінок-лідерок «United Women»',
							'Клуб розвитку "Prowomen Power"',
							'Студія талантів "TOP STARS"',
						]}
					></SectionListBlockItem>
				</Section>
				<section className="container mx-auto text-center pb-10 text-white">
					<h2 className="w-full my-2 text-5xl font-bold leading-tight text-center ">
						Ласкаво просимо до нас!
					</h2>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<h3 className="my-4 text-3xl xl:text-4xl leading-tight">
						Міжнародна інноваційна школа "Альфа" — це простір для тих, хто
						хоче рухатися вперед, розвиватися та досягати вершин!
					</h3>
					<EnrollmentButton />
				</section>
			</div>
		</div>
	);
}

const EnrollmentButton = () => {
	return (
		<CTAButton href="https://docs.google.com/forms/d/e/1FAIpQLSdOxtCGl-MZz525cbQQCIwSla4Dwv5E4Hi_6dccQTxxycz8PQ/viewform">
			Приєднатися!
		</CTAButton>
	);
};
