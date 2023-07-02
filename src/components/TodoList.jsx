import { useRecoilValue } from 'recoil';
import TodoListStats from './TodoListStats';
import TodoCreator from './TodoCreator';
import TodoItem from './TodoItem';
import TodoListFilter from './TodoListFilter';
import { filteredTodoState } from '../selector';

const TodoList = () => {
	const todoList = useRecoilValue(filteredTodoState);

	return (
		<>
			<h1>To Do App with Recoil!</h1>
			<TodoListStats />
			<TodoListFilter />
			<TodoCreator />
			{todoList.map((todo) => (
				<TodoItem item={todo} key={todo.id} />
			))}
		</>
	);
};

export default TodoList;
