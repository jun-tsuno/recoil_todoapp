import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../selector';

const TodoListStats = () => {
	const { totalNum, totalDone, totalUndone, percentDone } =
		useRecoilValue(todoListStatsState);

	return (
		<ul>
			<li>Todos: {totalNum}</li>
			<li>
				Done: {totalDone} / ({percentDone}%)
			</li>
			<li>Undone: {totalUndone}</li>
		</ul>
	);
};

export default TodoListStats;
