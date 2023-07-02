/* eslint-disable react/prop-types */
import { todoListState } from '../atom';
import { useRecoilState } from 'recoil';

const TodoItem = ({ item }) => {
	const [todoList, setTodoList] = useRecoilState(todoListState);

	const handleDelete = () => {
		const newTodoList = todoList.filter((todo) => {
			return todo.id !== item.id;
		});
		setTodoList(newTodoList);
	};

	const handleDone = () => {
		const newTodoList = todoList.map((todo) => {
			if (todo.id === item.id) return { ...todo, isComplete: !todo.isComplete };
			return todo;
		});
		setTodoList(newTodoList);
	};

	return (
		<>
			<div>
				<button onClick={handleDone}>
					{item.isComplete ? 'Done' : 'Undone'}
				</button>
				{item.title}
				<span onClick={handleDelete} style={{ cursor: 'pointer' }}>
					X
				</span>
			</div>
		</>
	);
};
export default TodoItem;
