import TodoList from './components/TodoList';
import Description from './components/Description';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<>
			<div style={{ margin: '2em' }}>
				<RecoilRoot>
					<TodoList />
					<Description />
				</RecoilRoot>
			</div>
		</>
	);
}

export default App;
