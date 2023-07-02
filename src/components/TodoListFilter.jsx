import { useRecoilState } from 'recoil';
import { todoFilterState } from '../atom';

const TodoListFilter = () => {
	const [filter, setFilter] = useRecoilState(todoFilterState);

	return (
		<>
			<select value={filter} onChange={(e) => setFilter(e.target.value)}>
				<option value='all'>All</option>
				<option value='done'>Done</option>
				<option value='undone'>Undone</option>
			</select>
		</>
	);
};

export default TodoListFilter;
