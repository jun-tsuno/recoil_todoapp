import { atom } from 'recoil';

export const todoListState = atom({
	key: 'TodoList',
	default: [
		{
			id: 0,
			title: 'Send message',
			isComplete: false,
		},
		{
			id: 1,
			title: 'Go grocery',
			isComplete: false,
		},
	],
});

export const todoFilterState = atom({
	key: 'TodoFilter',
	default: 'all',
});
