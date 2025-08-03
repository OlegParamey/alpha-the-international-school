import type React from 'react';
import ImageHolder from '../../assets/ImageHolder';
import {
	CardContainer,
	HighlightItem,
	WarningBox,
	PageHeader,
	DetailItem,
} from '../../components/content/ContentComponents';

const Examination: React.FC = () => {
	return (
		<div className="min-h-screen gradient">
			<div className="flex flex-col justify-center items-center gap-y-10 py-12">
				{/* Header */}
				<div className="">
					<PageHeader
						title={`🎓 Альфа- екзаменаційний центр (ТЕЦ) проведення НМТ(ЗНО), ЄВІ та ЄФВВ за кордоном`}
					/>
				</div>

				<div className="flex flex-col justify-center gap-y-5 w-9/10 mx-auto">
					{/* Болгарська мова */}
					<CardContainer>
						<HighlightItem icon="">
							Школа «Альфа» має честь бути ТЕЦ (Тимчасовим екзаменаційним
							центром) для проведення Національного мультипредметного тесту
							(НМТ), а також Єдиного вступного іспиту (ЄВІ) та Єдиного
							фахового вступного випробування (ЄФВВ).
						</HighlightItem>

						<WarningBox>
							❗Ці іспити — важливий етап для молоді, яка будує своє
							майбутнє через освіту. І ми щасливі бути поруч саме в такі
							моменти.
						</WarningBox>

						<HighlightItem>
							Ми особливо пишаємося тим, що «Альфа» стала не просто місцем
							складання іспитів, наданням технічної допомоги, а й живим
							простором підтримки, який об’єднує молодь з різних куточків
							Європи та України.
						</HighlightItem>

						<div className="mx-auto w-2/3 mt-3">
							<ImageHolder imgSrc="/examination/1.jpg" isBig />
						</div>

						<DetailItem>
							🌍 До нас приїжджають не лише з Болгарії, а й з інших країн
							Європи та світу. Наприклад, Аліса приїхала з Амстердама — і
							поділилася, що навіть у день іспиту почувалася тут спокійно й
							упевнено, бо серед своїх.
						</DetailItem>

						<WarningBox>
							💛 Для нас це більше, ніж просто організація іспитів. Ми
							віримо, що школа — це не лише про знання, а й про атмосферу,
							яка допомагає розкритися і показати найкращі результати.
						</WarningBox>

						<HighlightItem>
							«Альфа» — це школа без кордонів. Це простір, де підтримують,
							надихають, де важливо не просто скласти іспит, а зусереджено
							пройти цей день з відчуттям тепла, спокою і впевненості.
						</HighlightItem>

						<WarningBox>
							📌 Дякуємо кожному, хто обрав «Альфу» для цього важливого
							етапу. Ми щасливі бути поруч з вами, коли розпочинається новий
							розділ життя.
						</WarningBox>
					</CardContainer>
				</div>
			</div>
		</div>
	);
};

export default Examination;
