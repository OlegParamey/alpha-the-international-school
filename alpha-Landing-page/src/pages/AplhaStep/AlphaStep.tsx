import type React from 'react';
// import ImagePlaceholder from '../../assets/ImagePlaceholder';
import {
	CardContainer,
	ContainerHeader,
	HighlightItem,
	PageHeader,
	BorderContainer,
} from '../../components/content/ContentComponents';
import SectionListBlockItem from '../../components/content/SectionListBlockItem';

const AlphaStep: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div>
					<PageHeader title={`🏫 Академія Alpha Step`} />
				</div>

				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					<CardContainer>
						<ContainerHeader
							title={`Академічна підготовка до школи для дітей 4-6 років`}
							icon={'📚'}
						/>

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								Мета програми:
							</h2>
							<p className="sm:text-lg xl:text-2xl mb-3">
								Забезпечити м’який перехід дитини до шкільного життя,
								сформувати базові навчальні навички, зацікавити у пізнанні
								світу та допомогти адаптуватися до нового середовища.
							</p>
							<h2 className="font-bold text-gray-800 text-lg sm:text-xl mb-2 flex items-center">
								Програма інтегрує:
							</h2>
							<HighlightItem icon="✅">
								Елементи української програми НУШ
							</HighlightItem>
							<HighlightItem icon="✅">
								Болгарську освітню модель з основами IB PYP
							</HighlightItem>
							<HighlightItem icon="✅">
								Розвиток Soft Skills через гру, творчість і командну
								взаємодію
							</HighlightItem>
						</BorderContainer>
						{/* <ImagePlaceholder imgSrc="preparing/1.jpg" isBig /> */}

						<ContainerHeader title="🧩 Освітні напрями:" />

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🔠 Мовна підготовка:
							</h2>
							<HighlightItem icon="🔸">
								Болгарська мова — 2 рази на тиждень (ігрові заняття,
								пісеньки, казки, прості діалоги)
							</HighlightItem>
							<HighlightItem icon="🔸">
								Українська мова — розвиток мовлення, словниковий запас,
								логіка через рідну мову
							</HighlightItem>
							<HighlightItem icon="🔸">
								Англійська мова — 2 раз на тиждень через пісні, вірші,
								інтерактиви
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🔢 Математика:
							</h2>
							<HighlightItem icon="🔸">
								Лічба до 10–20, порівняння кількості, форми, розміри,
								просторове орієнтування
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🌱 Природознавство і пізнавальний світ:
							</h2>
							<HighlightItem icon="🔸">
								Ознайомлення з природними явищами, тваринами, змінами пір
								року, досліди
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🎨 Мистецтво і творчість:
							</h2>
							<HighlightItem icon="🔸">
								Малювання, ліплення, аплікація, казкотерапія, театральна
								гра, ритміка
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🧠 Логіка і мислення:
							</h2>
							<HighlightItem icon="🔸">
								Завдання на розвиток пам’яті, уваги, послідовності,
								причинно-наслідкових зв’язків
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🤝 Soft Skills:
							</h2>
							<HighlightItem icon="🔸">
								Емоційний інтелект, самопізнання, взаємодія з однолітками,
								самообслуговування
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								Логопедичні заняття:
							</h2>
							<HighlightItem icon="🔸">
								Корекція та розвиток мовлення, постановка звуків, розвиток
								фонематичного слуху, збагачення словникового запасу,
								підготовка до навчання читанню та письму
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								Заняття з психологом:
							</h2>
							<HighlightItem icon="🔸">
								Ігрові заняття для розвитку емоційної стабільності,
								комунікації та адаптації
							</HighlightItem>

							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								Фізичний розвиток:
							</h2>
							<HighlightItem icon="🔸">
								Рухливі ігри, ритміка, гімнастика
							</HighlightItem>
						</BorderContainer>

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🏫 Принципи навчання:
							</h2>
							<HighlightItem icon="🔸">
								<b>Навчання через гру:</b> пізнання світу в ігровій формі
								— найефективніший спосіб у цьому віці
							</HighlightItem>
							<HighlightItem icon="🔸">
								<b>Щоденні ритуали:</b> створюють відчуття безпеки,
								структури та стабільності
							</HighlightItem>
							<HighlightItem icon="🔸">
								<b>Міждисциплінарний підхід:</b> теми поєднують мову,
								математику, природу, мистецтво
							</HighlightItem>
							<HighlightItem icon="🔸">
								<b>Партнерство з батьками:</b> відкритий діалог, регулярні
								зустрічі, звіти про розвиток
							</HighlightItem>
						</BorderContainer>

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🎒 Результати після завершення програми:
							</h2>
							<HighlightItem icon="✅">
								Підготовка до 1 класу української або болгарської школи
							</HighlightItem>
							<HighlightItem icon="✅">
								Розвинене мовлення, базова грамотність і математичне
								мислення
							</HighlightItem>
							<HighlightItem icon="✅">
								Адаптованість до навчального процесу, ритуалів і режиму
								дня
							</HighlightItem>
							<HighlightItem icon="✅">
								Соціальна зрілість, емоційна готовність до школи
							</HighlightItem>
							<HighlightItem icon="✅">
								Можливість вступу до школи «Альфа» без додаткової
								адаптації
							</HighlightItem>
						</BorderContainer>

						<WeeklyScheduleTable />

						<div className="space-y-4 my-6">
							<SectionListBlockItem
								block
								title="Типовий розклад дня (похвилинно):"
								dataList={[
									'🕣 08:30–09:00 — Зустріч дітей, ранкове коло, емоційна зарядка',
									'🕘 09:00–09:30 — Перше заняття (мовне або логіко-математичне)',
									'🕘 09:30–10:00 — Друге заняття (болгарська / англійська / логіка)',
									'🕙 10:00–10:30 — Перекус, вільна гра',
									'🕥 10:30–11:00 — Третє заняття (творчість / пізнавальний світ)',
									'🕐 11:00–11:30 — Прогулянка, рухливі ігри',
									'🕦 11:30–12:00 — Четверте заняття (ритміка / театр)',
									'🕛 12:00–12:30 — Читання / казка / логопед / психолог',
									'🕧 12:30–13:00 — Обід',
									'🕐 13:00–15:00 — Денний сон',
									'🕒 15:00–15:30 — Поступовий підйом, спокійна діяльність (пазли, книжки)',
									`🕞 15:30–16:00 — П'яте заняття (тематичне: soft skills / досліди)`,
									'🕓 16:00–16:30 — Полуденок',
									'🕟 16:30–17:00 — Ігрова рефлексія, прогулянка, зустріч з батьками',
								]}
							/>
						</div>

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								🧑‍⚕️ Спеціалісти:
							</h2>
							<HighlightItem icon="🔸">
								Вихователь (модератор)
							</HighlightItem>
							<HighlightItem icon="🔸">
								Викладачі болгарської, англійської, підготовка до школи —
								спеціалісти школи "Альфа"
							</HighlightItem>
							<HighlightItem icon="🔸">Логопед</HighlightItem>
							<HighlightItem icon="🔸">Психолог</HighlightItem>
							<HighlightItem icon="🔸">Медична сестра</HighlightItem>
						</BorderContainer>

						<ContactData />
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
				Формат і умови
			</h4>
			<div className="space-y-3 sm:text-lg xl:text-xl">
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">📍</span>
					<span>
						Локація: м. Софія, бул. „Сливница“ № 188, вхід „Б“, етаж 2
					</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">⏰</span>
					<span>
						Час роботи: Пн–Пт, 08:30–17:00(з 17:00-18:00 - чергова група)
					</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">👶</span>
					<span>Вік дітей: 4–6 років</span>
				</div>
				<div className="flex items-center text-gray-700">
					<span className="mr-3 text-indigo-600">🎓</span>
					<span>
						Можливість вступу до UA або BG школи «Альфа» без додаткової
						адаптації
					</span>
				</div>
			</div>
		</div>
	);
};

function WeeklyScheduleTable() {
	const scheduleData = [
		{
			day: 'Понеділок',
			languages: 'Англійська, українська',
			activities: 'Математика, театральна гра, казка, прогулянка',
		},
		{
			day: 'Вівторок',
			languages: 'Болгарська, українська',
			activities: 'Мистецтво, логіка, заняття з логопедом, прогулянка',
		},
		{
			day: 'Середа',
			languages: 'Українська',
			activities: 'Природознавство, англійська, рухання, гра з психологом',
		},
		{
			day: 'Четвер',
			languages: 'Болгарська, українська',
			activities: 'Математика, творчість, музика, прогулянка',
		},
		{
			day: "П'ятниця",
			languages: 'Українська',
			activities: 'Soft Skills, театр, інтеровані ігри, підсумкове коло',
		},
	];

	return (
		<div className="max-w-full mx-auto p-4 sm:p-6">
			{/* Заголовок */}
			<div className="mb-6">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
					<span className="text-2xl">📋</span>
					Орієнтовний розклад за напрямами
				</h2>
			</div>

			{/* Таблица */}
			<div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
				<table className="w-full bg-white">
					{/* Заголовки */}
					<thead>
						<tr className="bg-gray-100 border-b-2 border-gray-200">
							<th className="p-1 sm:px-4 sm:py-3 text-left font-semibold text-gray-700 text-sm sm:text-base md:text-xl border-r border-gray-200">
								День
							</th>
							<th className="p-1 sm:px-4 sm:py-3 text-left font-semibold text-gray-700 text-sm sm:text-base md:text-xl border-r border-gray-200">
								Мовні заняття
							</th>
							<th className="p-1 sm:px-4 sm:py-3 text-left font-semibold text-gray-700 text-sm sm:text-base md:text-xl">
								Інші активності
							</th>
						</tr>
					</thead>

					{/* Содержимое */}
					<tbody>
						{scheduleData.map((item, index) => (
							<tr
								key={index}
								className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150 ${
									index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
								}`}
							>
								{/* День недели */}
								<td className="p-1 sm:p-4 border-r border-gray-200 font-medium text-gray-800 text-xs sm:text-base md:text-lg">
									{item.day}
								</td>

								{/* Мовні заняття */}
								<td className="p-1 sm:p-4 border-r border-gray-200 text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed">
									{item.languages}
								</td>

								{/* Інші активності */}
								<td className="p-1 sm:p-4 text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed">
									{item.activities}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default AlphaStep;
