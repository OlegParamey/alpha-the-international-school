import type React from 'react';
import ImagePlaceholder from '../../assets/ImagePlaceholder';
import SectionListBlockItem from '../../components/content/SectionListBlockItem';
import {
	CardContainer,
	ContainerHeader,
	DetailItem,
	HighlightItem,
	CTAButton,
	DateBadge,
	WarningBox,
	PageHeader,
	BorderContainer,
} from '../../components/content/ContentComponents';

const PreparingForSchool: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div className="mb-6">
					<PageHeader
						title={`🏫 Концепція 1 класу та підготовка`}
						description="Освітня модель та цілі"
					/>
				</div>

				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					<CardContainer>
						<ContainerHeader title={`Концепція 1 класу`} icon={'📚'} />

						<ImagePlaceholder color="bg-purple-500" />

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-2xl mb-2 flex items-center">
								Освітня модель та цілі:
							</h2>
							<p className="sm:text-lg xl:text-2xl">
								Освітня модель, заснована на International Baccalaureate -
								Primary Years Programme (PYP)
							</p>
							<HighlightItem icon="✅">
								Підтримка дитини в її новій соціальній ролі — учня:
								розвиток самостійності, відповідальності за навчання та
								взаємини з іншими
							</HighlightItem>
							<HighlightItem icon="✅">
								Закладення основ самоорганізації, ефективної комунікації,
								навчання
							</HighlightItem>
							<HighlightItem icon="✅">
								Компетентнісна модель, яка включає державні освітні
								стандарти, але глибша та ширша за них
							</HighlightItem>
						</BorderContainer>

						<div className="space-y-4 my-6">
							<SectionListBlockItem
								block
								title="Приблизний щоденний розклад:"
								dataList={[
									'🕣 08:30–08:50 — Ранкова зустріч',
									'🕘 09:00–11:25 — Академічний блок: болгарська, англійська, соціальні та природничі науки, міждисциплінарні проєкти',
									'🕚 11:25–12:30 — Обід, вільна гра',
									'🕧 12:30–12:45 — Відпочинок на свіжому повітрі',
									'🕒 13:45–16:00 — Післяобідній блок: розвиток, мистецтва, самостійне навчання, полуденок',
									'🕓 16:00–18:00 — Додаткові активності, вільна гра, зустріч батьків',
								]}
							/>
						</div>
						<div className="w-full">
							<h2 className="text-3xl sm:text-4xl text-center lg:text-start font-bold text-gray-800 ">
								Місячні та річні активності:
							</h2>
							<SectionListBlockItem
								block
								title="📆 Щомісячно:"
								dataList={['Навчання на природі', 'Культурні враження']}
							/>
							<SectionListBlockItem
								block
								title="📅 Протягом року:"
								dataList={[
									'Вступна програма (перші 6 тижнів)',
									'Виїзди на природу (до 2 разів на рік)',
									'Тристороння зустріч учень–учитель–батьки (вступна, фінальна)',
									'Зустрічі вчитель–батьки (3 рази на рік або за запитом)',
									'Звіти про досягнення дитини (2 рази на рік)',
									'Батьківські збори (2 рази на рік)',
									'Підсумкова діагностика (кінець травня)',
									'Літня програма-Тібір “Альфа” в м.Софія (все літо) / Відпочинок на морі-табір ”Разом” м.Кітен (заїзд)',
								]}
							/>
						</div>
					</CardContainer>

					<CardContainer>
						<ContainerHeader
							title={`Готуємося до 1 класу разом зі школою "Альфа"!`}
							icon={'🎒'}
						/>

						<ImagePlaceholder color="bg-sky-500" />

						<DetailItem icon="👶">
							Якщо ваша дитина восени йде до школи — саме час зробити цей
							перехід м’яким, радісним і натхненним!
						</DetailItem>

						<SectionListBlockItem
							block
							title="Міжнародна інноваційна школа «Альфа» відкриває підготовчі програми до 1 класу:"
							dataList={[
								'За українською програмою НУШ',
								'За болгарською освітньою моделлю, яка базується на міжнародному стандарті IB PYP (Primary Years Programme)',
							]}
						/>

						<BorderContainer>
							<h2 className="font-bold text-gray-800 text-lg sm:text-xl mb-2 flex items-center">
								💼 Що отримає ваша дитина?
							</h2>
							<HighlightItem icon="✅">
								Розвиток навичок самостійності та відповідальності
							</HighlightItem>
							<HighlightItem icon="✅">
								Навчання через гру, проєкти та дослідження
							</HighlightItem>
							<HighlightItem icon="✅">
								Грамотність, математика, англійська, болгарська — легко та
								цікаво
							</HighlightItem>
							<HighlightItem icon="✅">
								Розвиток soft skills: комунікація, самопізнання, емоційний
								інтелект
							</HighlightItem>
							<HighlightItem icon="✅">
								Адаптація до ритму шкільного життя через денні ритуали,
								мистецтво, спорт і багато позитивних вражень!
							</HighlightItem>
						</BorderContainer>
						<DateBadge data="Протягом всього літа" />

						<div className="space-y-4 mb-6">
							<DetailItem icon="🕘">
								Зручний графік для дітей і батьків
							</DetailItem>
							<DetailItem icon="📍">
								Навчання: в гр. София, бул. „Сливница“ № 188, вход „Б“,
								етаж 2 (район Метростанция Лъвов мост)
							</DetailItem>
							<DetailItem icon="📜">
								Після підготовки — можливість вступу до 1 класу школи
								«Альфа» (UA або BG)
							</DetailItem>
						</div>
						<WarningBox>
							📲 Залиште заявку вже зараз, щоб ми могли підібрати для вас
							найкращу програму:
						</WarningBox>
						<CTAButton href="https://forms.gle/Jt7MnnMufD1fjHVb6">
							Залишити заявку
						</CTAButton>
					</CardContainer>
				</div>
			</div>
		</div>
	);
};

export default PreparingForSchool;
