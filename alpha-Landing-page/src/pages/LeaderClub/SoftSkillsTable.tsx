interface SkillData {
	id: string;
	icon: string;
	module: string;
	skill: string;
	practice: string;
}

const skillsData: SkillData[] = [
	{
		id: 'leadership',
		icon: '🔑',
		module: 'Лідерство в дії',
		skill: 'Вміння вести за собою',
		practice: 'Лідерські ротації, щоденні збирання, «Коло сили»',
	},
	{
		id: 'communication',
		icon: '🗣️',
		module: 'Коуч-комунікація',
		skill: 'Активне слухання, запитання',
		practice: 'Менторські діалоги з молодшими, вправи «Запитай — відкрий»',
	},
	{
		id: 'conflict',
		icon: '🤝',
		module: 'Рішення конфліктів',
		skill: 'Емоційний інтелект, саморегуляція',
		practice: 'Кейси + гра «Конфлікт-релай», фасилітована розмова',
	},
	{
		id: 'critical',
		icon: '🎯',
		module: 'Критичне мислення',
		skill: 'Аналіз, аргументація',
		practice: 'Ігри: «Дебати», «Суд історії», «Детектив Альфа»',
	},
	{
		id: 'time',
		icon: '⏰',
		module: 'Гнучкість і тайм-менеджмент',
		skill: 'Організація часу, пріоритети',
		practice: 'Планування тижня, «Енергокарта дня», «Спалом задач»',
	},
	{
		id: 'project',
		icon: '📋',
		module: 'Проєктне мислення',
		skill: 'Стратегія, командна робота',
		practice: 'Реальні проєкти — організація заходу, запуск ініціативи',
	},
];

interface SkillRowProps {
	skill: SkillData;
	isEven: boolean;
}

const SkillRow: React.FC<SkillRowProps> = ({ skill, isEven }) => (
	<div
		className={`p-4 space-y-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
			isEven ? 'bg-white' : 'bg-gray-50'
		}`}
	>
		<div className="flex items-center">
			<span className="text-2xl sm:text-3xl mr-3 flex-shrink-0">{skill.icon}</span>
			<h3 className="font-bold text-gray-800 text-lg sm:text-3xl">
				{skill.module}
			</h3>
		</div>

		<div className="ml-11 space-y-3 ">
			<div>
				<div className="text-xs sm:text-2xl font-semibold text-indigo-600 uppercase tracking-wide mb-1">
					Soft Skill
				</div>
				<div className="text-gray-700 font-medium sm:text-2xl">{skill.skill}</div>
			</div>

			<div>
				<div className="text-xs sm:text-2xl font-semibold text-indigo-600 uppercase tracking-wide mb-1">
					Практика
				</div>
				<div className="text-gray-700 text-sm sm:text-2xl leading-relaxed">
					{skill.practice}
				</div>
			</div>
		</div>
	</div>
);

const SoftSkillsTable: React.FC = () => (
	<div className="overflow-hidden rounded-2xl border border-gray-200">
		<div className="divide-y divide-gray-200">
			{skillsData.map((skill, index) => (
				<SkillRow key={skill.id} skill={skill} isEven={index % 2 === 0} />
			))}
		</div>
	</div>
);

export default SoftSkillsTable;
