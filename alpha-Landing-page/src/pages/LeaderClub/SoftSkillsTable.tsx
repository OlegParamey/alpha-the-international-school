const defaultData = [
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

/**
 * Soft Skills training modules table component with modern design
 */
const SoftSkillsTable: React.FC = () => {
	return (
		<div className="overflow-hidden rounded-2xl border border-gray-200">
			<div className="divide-y divide-gray-200">
				{defaultData.map((row, index) => (
					<div
						key={row.id}
						className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
							index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
						}`}
					>
						<div className=" p-4 space-y-3">
							<div className="flex items-center">
								<span className="text-2xl mr-3 flex-shrink-0">
									{row.icon}
								</span>
								<span className="font-bold text-gray-800 text-lg">
									{row.module}
								</span>
							</div>

							<div className="ml-11">
								<div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
									Soft Skill
								</div>
								<div className="text-gray-700 font-medium">
									{row.skill}
								</div>
							</div>

							<div className="ml-11">
								<div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
									Практика
								</div>
								<div className="text-gray-600 text-sm leading-relaxed">
									{row.practice}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SoftSkillsTable;
