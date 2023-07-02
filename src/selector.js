import { selector } from 'recoil';
import { todoFilterState, todoListState } from './atom';

export const todoListStatsState = selector({
	key: 'TodoListStats',
	get: ({ get }) => {
		const todoList = get(todoListState);
		const totalNum = todoList.length;
		const totalDone = todoList.filter((todo) => todo.isComplete).length;
		const totalUndone = totalNum - totalDone;
		const percentDone =
			totalNum === 0 ? 0 : Math.floor((totalDone / totalNum) * 100);

		return { totalNum, totalDone, totalUndone, percentDone };
	},
});

export const filteredTodoState = selector({
	key: 'FilteredTodo',
	get: ({ get }) => {
		const todoList = get(todoListState);
		const filter = get(todoFilterState);

		switch (filter) {
			case 'done':
				return todoList.filter((todo) => todo.isComplete);
			case 'undone':
				return todoList.filter((todo) => !todo.isComplete);
			default:
				return todoList;
		}
	},
});
