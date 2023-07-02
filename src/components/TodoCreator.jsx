import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atom';

const TodoCreator = () => {
	const [title, setTitle] = useState('');
	const setTodoList = useSetRecoilState(todoListState);

	const randomKey = Math.random();

	const handleAdd = () => {
		setTodoList((preState) => [
			...preState,
			{
				id: randomKey,
				title: title,
				isComplete: false,
			},
		]);
		setTitle('');
	};

	return (
		<>
			<div>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					style={{ margin: '1em 0' }}
				/>
				<button onClick={handleAdd}>Add</button>
			</div>
		</>
	);
};

export default TodoCreator;
