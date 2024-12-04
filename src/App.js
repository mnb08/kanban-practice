import { useState } from 'react';
import './App.css';
import { Board } from './Board';

function App() {

	const [boards, setBoards] = useState([
		{
			id: 1, title: 'Сделать', items: 
			[
				{id: 1, title: 'Пойти в магазин', order: 1}, 
				{id: 2, title: 'Выкинуть мусор', order: 2}, 
				{id: 3, title: 'Покушать', order: 3}
			]
		},
		{
			id: 2, title: 'Проверить', 
			items: [
				{id: 4, title: 'Код ревью', order: 4}, 
				{id: 5, title: 'Задача на факториал', order: 5}, 
				{id: 6, title: 'Задачи на фиббоначи', order: 6}
			]
		},
		{
			id: 3, title: 'Сделано', 
			items: [
				{id: 7, title: 'Пойти в магазин', order: 7}, 
				{id: 8, title: 'Выкинуть мусор', order: 8}, 
				{id: 9, title: 'Покушать', order: 9}
			]
		},
	])

	const [currentBoard, setCurrentBoard] = useState(null)
	const [currentItem, setCurrentItem]  = useState(null)

	// const dragOverHandler = (e) => {
	// 	e.preventDefault()
	// 	if(e.target.className == 'item'){
	// 		e.target.style.boxShadow = '0 4px 3px gray'
	// 	}
	// }
	// const dragLeaveHandler = (e) => {
	// 	e.target.style.boxShadow = 'none'
	// }
	// const dragStartHandler = (e, board, item) => {
	// 	setCurrentBoard(board)
	// 	setCurrentItem(item)
	// }
	// const dragEndHandler = (e) => {
	// 	e.target.style.boxShadow = 'none'
	// }

	// const dropHandler = (e, board, item) => {
	// 	e.preventDefault()
	// 	console.log(currentBoard)
	// 	const currentOrder = currentBoard.items.find(item => item.order === currentItem.order)
	// 	const filteredCurrentBoard = currentBoard.items.filter(item => item.order != currentOrder.order)

	// 	const dropOrder = board.items.find(element => element.order === item.order)
	// 	const newBoard = board.items.reduce( (acc, item) => {
	// 		acc.push(item)
	// 		if(item.order == dropOrder.order){
	// 			acc.push(dropOrder)
	// 		}

	// 		return acc
	// 	}, [])

	// 	setBoards(boards.map( b => {
	// 		if(b.id === newBoard.id){
	// 			return newBoard
	// 		}

	// 		if(b.id === filteredCurrentBoard.id){
	// 			return currentOrder
	// 		}

	// 		return b
	// 	}))
	// }

	// const dropCardHandler = (e, board) => {
	// 	board.items.push(currentItem)
	// 	const currentIndex = currentBoard.items.indexOf(currentItem)
	// 	currentBoard.items.splice(currentIndex, 1)

	// 	setBoards(boards.map( b => {
	// 		if(b.id === board.id){
	// 			return board
	// 		}

	// 		if(b.id === currentBoard.id){
	// 			return currentBoard
	// 		}

	// 		return b
	// 	}))
	// }


	return (
		<div className="app">
			{/* {
				boards.map( board => 
					<div 
						className="board"
						onDragOver={(e) => dragOverHandler(e)}
						onDrop={(e) => dropCardHandler(e, board)}
					>
						<div className="board__title">{board.title}</div>
						{
							board.items.map( item => 
								<div
									onDragOver={ (e) => dragOverHandler(e, board, item)}
									onDragLeave={ (e) => dragLeaveHandler(e)}
									onDragStart={ (e) => dragStartHandler(e, board, item)}
									onDragEnd={ (e) => dragEndHandler(e)}
									onDrop={ (e) => dropHandler(e, board, item)}
									draggable={true} 
									className="item"
								>{item.title}</div>
							)
						}
					</div>
				) 
			} */}

			{
				boards.map( board => {
					<Board boards={boards} board={board} currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} currentItem={currentItem} setCurrentItem={setCurrentItem} />
				})
			}
		</div>
	);
}

export default App;
