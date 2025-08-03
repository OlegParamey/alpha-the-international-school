import ImageHolder from '../../assets/ImageHolder';
import LogoImage from '../../assets/LogoImage';
import Section from '../../components/content/Section';
import SectionListBlockItem from '../../components/content/SectionListBlockItem';
import { CTAButton, PageHeader } from '../../components/content/ContentComponents';

export default function Home() {
	return (
		<div className="gradient min-h-screen max-w-screen pt-10">
			<div className="container mx-auto px-5 flex flex-col gap-5 lg:flex-row justify-between items-center mb-6">
				<div className="flex flex-col gap-4">
					<PageHeader
						title={`Міжнародна інноваційна школа "Альфа"`}
						description="Унікальна школа в Європі, створена для Альфа-дітей — майбутніх
						дипломатів, бізнесменів, успішних підприємців та чесних партнерів."
					/>
					<EnrollmentButton />
				</div>
				<ImageHolder imgSrc="home/1.jpg" />
			</div>
			<div className="flex flex-col justify-center items-center gap-y-10">
				<Section title={'Структура освітньої екосистеми'}>
					<SectionListBlockItem
						title={'Освітні програми:'}
						block={<ImageHolder imgSrc="home/2.jpg" />}
						dataList={[
							'Державний український ліцей (1-11 класи за програмою НУШ)',
							'Болгарська прогресивна школа (адаптована під українських дітей)',
							'Бізнес-школа для розвитку soft skills',
						]}
					/>
					<SectionListBlockItem
						isBlockFirst
						title={'Додаткові компоненти:'}
						block={<ImageHolder imgSrc="home/3.jpg" isBig />}
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
						block={<ImageHolder imgSrc="home/4.jpg" />}
						dataList={[
							'Дитиноцентризм',
							'Сучасність та інноваційність',
							'Професіоналізм та академічна якість',
						]}
					/>
					<SectionListBlockItem
						isBlockFirst
						title={'Навички та компетенції:'}
						block={<ImageHolder imgSrc="home/5.jpg" />}
						dataList={[
							'Фінансова та медіа грамотності',
							'Самопізнання та розвиток Soft Skills',
							'Бізнес-освіта та проєктна діяльність',
						]}
					/>
					<SectionListBlockItem
						title={'Культура навчання:'}
						block={<ImageHolder imgSrc="home/6.jpg" />}
						dataList={[
							'Командна робота та демократичні стосунки',
							'Демократична атмосфера — партнерство учнів, батьків та вчителів',
						]}
					/>
					<EnrollmentButton />
				</Section>
				<Section title={'Унікальність навчання'}>
					<SectionListBlockItem
						title={'Варіанти навчання (можна поєднувати):'}
						block={<ImageHolder imgSrc="home/7.jpg" />}
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
						block={<ImageHolder imgSrc="home/8.jpg" isBig isRoundedFull />}
						dataList={[
							'Болгарський атестат (Ліцензія № РД14-213/06.07.17)',
							'Українське свідоцтво про освіту (Державний ліцей)',
							'IB Diploma Programme (11-12 класи) — перевага для вступу до провідних університетів Європи',
						]}
					/>
				</Section>
				<Section title="Альфа - це коли обирає дитина, а не коли обирають її">
					<ImageHolder imgSrc="home/9.jpg" isBig />
					<EnrollmentButton />
				</Section>
				<Section title={'Бачення та місія школи'}>
					<SectionListBlockItem
						isChildrenBeforeList
						title={'Бачення:'}
						block={<ImageHolder imgSrc="home/10.jpg" />}
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
						block={<ImageHolder imgSrc="home/11.jpg" />}
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
								<LogoImage isLeft imgSrc="partners/1.jpg" />
								<LogoImage imgSrc="partners/2.jpg" />
								<LogoImage isLeft imgSrc="partners/3.jpg" />
								<LogoImage imgSrc="partners/4.jpg" />
								<LogoImage isLeft imgSrc="partners/5.jpg" />
								<LogoImage imgSrc="partners/6.jpg" />
							</div>
						}
						dataList={[
							'Донецький регіональний центр оцінювання якості освіти (НМТ, ЄВІ, ЄФВВ)',
							'Центр підтримки бізнесу',
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
