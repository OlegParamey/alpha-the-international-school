import ImagePlaceholder from '../../assets/ImagePlaceholder';
import Section from '../../components/content/Section';
import SectionListBlockItem from '../../components/content/SectionListBlockItem';
import SectionTextBlockItem from '../../components/content/SectionTextBlockItem';
import SoftSkillsTable from './SoftSkillsTable';
import { CTAButton, PageHeader } from '../../components/content/ContentComponents';

export default function LeaderClub() {
	return (
		<div className="gradient min-h-screen max-w-screen pt-10">
			<div className="container mx-auto px-5 flex flex-col gap-5 md:flex-row justify-center items-center mb-6">
				<div className="flex flex-col gap-4">
					<PageHeader
						title={`Клуб Лідерів "Альфа" для старшокласників`}
						description="Простір сили, свободи і впливу."
					/>
					<EnrollmentButton />
				</div>
				<ImagePlaceholder />
			</div>
			<div className="flex flex-col justify-center items-center gap-y-10">
				<Section title={'✨ Ключова ідея:'}>
					<SectionTextBlockItem block={<ImagePlaceholder />}>
						<b>Клуб Лідерів "Альфа"</b> — це не табір. Це —{' '}
						<b>
							тренувальна база майбутніх дипломатів, підприємців і
							змінотворців
						</b>
						, де <b>старшокласники (8–11 класи)</b> стають менторами для
						молодших учнів, реалізують власні проєкти, розвивають soft skills,
						беруть участь у симуляціях, іграх, і навіть… заробляють{' '}
						<b>100 лв/місяць!</b>
					</SectionTextBlockItem>
					<SectionTextBlockItem
						isBlockFirst
						block={<ImagePlaceholder color="bg-green-500" />}
					>
						<b>Модераторка та фасилітаторка табору — Діана Парамей</b>,
						власниця Міжнародної інноваційної школи "Альфа",амбасадор
						Міжнародної організації лідерок "United Women", ментор, керівниця
						освітніх трансформацій.
					</SectionTextBlockItem>
				</Section>
				<Section title="📆 Формат та організаційна інформація">
					<SectionListBlockItem
						block={<ImagePlaceholder color="bg-yellow-500" />}
						dataList={[
							'🗓 Тривалість: 4 тижні (червень–липень)',
							'🕗 Графік: 10:00–16:00, пн–пт (може коригуватись разом)',
							'🎯 Формат: змішане навчання, проєкти, менторство, гра',
							'👥 Учасники: 5–15 лідерів з 8–11 класів (з будь-яких шкіл — запрошуй друзів!)',
							'📍 Місце: Міжнародна інноваційна школа "Альфа", Софія',
							'💵 Бонус: Стипендія 100 лв/місяць за участь та відповідальність',
						]}
					/>
				</Section>
				<Section title={'🧠 Soft Skills у дії: модулі тижня'}>
					<SoftSkillsTable />
				</Section>
				<Section title={'🎲 Ігрові активності (з інтелектом та змістом)'}>
					<SectionListBlockItem
						block={<ImagePlaceholder />}
						dataList={[
							'🎭 Мафія-лідерів: психологічна ролева гра на довіру, маніпуляцію, логіку',
							'🧩 Квест "Агенти впливу": командна гра-розслідування з лідерськими завданнями',
							'💬 Дебатний клуб "У променях Альфи": рольові дебати з оцінкою аргументації',
							'🎲 "Світ без дорослих": настільна стратегія самоврядування та управління ресурсами',
							'🎤 "Пітч вечір": презентації власних ідей перед менторською радою',
						]}
					/>
				</Section>
				<Section title="🌱 Менторство молодших">
					<SectionListBlockItem
						isChildrenBeforeList
						title="Кожен старшокласник-лідер стає наставником для молодших:"
						block={<ImagePlaceholder />}
						dataList={[
							'Приймає участь у проведенні ігор, міні-занять, підтримці під час табору',
							'Допомагає у творчих проєктах (STEM, арт, читання)',
							'Розвиває в собі терпіння, лідерство, вміння пояснювати просто',
						]}
					>
						<p className="text-base sm:text-xl">
							🧩 <b>Формат</b>: 2 години на день — менторська зона <br />
							💬 <b>Інструменти</b>: “Діалогові картки наставника”,
							“Міні-гід ментора”
						</p>
					</SectionListBlockItem>
				</Section>
				<Section title={'📈 Проєктна діяльність'}>
					<SectionListBlockItem
						title="Кожен старшокласник-лідер стає наставником для молодших:"
						block={<ImagePlaceholder />}
						dataList={[
							'Тематичний день',
							'Медіа-студія «Альфа-TV»',
							'Програма антибулінгу',
							'Альтернативна валюта табору',
							'Insta-блог «Альфа очима лідерів»',
						]}
					>
						<p className="text-base sm:text-xl">
							Кожна команда працює над <b>реальним проєктом табору</b>.{' '}
							<b>Пітчинг в кінці тижня</b>, зворотній зв’язок, публікація
							результатів.
						</p>
					</SectionListBlockItem>
				</Section>
				<Section title={'🧭 Супровід'}>
					<SectionTextBlockItem block={<ImagePlaceholder />}>
						<p className="text-lg sm:text-2xl xl:text-3xl font-semibold text-gray-700">
							💎<b>Діана Парамей</b> — фасилітатор, коуч, лідер. Вона
							допомагає учасникам осмислити досвід, відкриває нові
							перспективи, веде через рефлексії.
							<br />
							🛡 <b>Цінності</b>: довіра, повага, відкритість,
							відповідальність, ініціатива
						</p>
					</SectionTextBlockItem>
				</Section>
				<Section title={'🏁 Завершення'}>
					<SectionListBlockItem
						isChildrenBeforeList
						title={`Фінальний форум "Я – Лідер"`}
						block={<ImagePlaceholder />}
						dataList={[
							'Вручення сертифікатів',
							'Публічна галерея проєктів',
							'Заробіток 100 лв/місяць, пропозиція на самоврядування у новому навчальному році в Міжнародній інноваційній школі “Альфа”',
						]}
					>
						<p className="text-lg sm:text-xl xl:text-2xl mx-auto w-8/10 sm:w-full">
							Кожна команда працює над <b>реальним проєктом табору</b>.
							<br />
							<b>Пітчинг в кінці тижня</b>, зворотній зв’язок, публікація
							результатів.
						</p>
					</SectionListBlockItem>
				</Section>

				<section className="container mx-auto text-center pb-10 text-white">
					<h3 className="my-4 text-3xl leading-tight">
						📣 Заповни анкету прямо зараз — кількість місць обмежена!
					</h3>
					<EnrollmentButton />
				</section>
			</div>
		</div>
	);
}

const EnrollmentButton = () => {
	return <CTAButton href="https://forms.gle/YxfbxR8vv44cBtqk9">Приєднатися!</CTAButton>;
};
