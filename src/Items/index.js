import React from 'react'

export const Item = ({item, setCurrentBoard, setCurrentItem, currentBoard, currentItem, setBoards, boards, board}) => {

    const dragOverHandler = (e) => {
		e.preventDefault()
		if(e.target.className == 'item'){
			e.target.style.boxShadow = '0 4px 3px gray'
		}
	}
	const dragLeaveHandler = (e) => {
		e.target.style.boxShadow = 'none'
	}
	const dragStartHandler = (e, board, item) => {
		setCurrentBoard(board)
		setCurrentItem(item)
	}
	const dragEndHandler = (e) => {
		e.target.style.boxShadow = 'none'
	}

	// const dropHandler = (e, board, item) => {
	// 	e.preventDefault()
	// 	const currentOrder = currentBoard.items.find(item => item.order === currentItem.order)
	// 	const filteredCurrentBoard = currentBoard.items.filter(item => item.order != currentOrder.order)
		
	// 	console.log(currentItem)
	// 	console.log(item)

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

	const dropHandler = (e, board, item) => {
		e.preventDefault();
		
		// Проверка на наличие данных
		if (!currentBoard || !currentItem) return;
	
		// Найти текущий элемент и фильтровать из текущей колонки
		const currentOrder = currentBoard.items.find(item => item.order === currentItem.order);
		const filteredCurrentBoard = currentBoard.items.filter(item => item.order !== currentOrder.order);
	
		console.log(currentItem);
		console.log(item);
	
		// Найти элемент, после которого нужно вставить новый элемент
		const dropOrder = board.items.find(element => element.order === item.order);
		
		const newBoardItems = board.items.reduce((acc, item) => {
			acc.push(item);
			if (item.order === dropOrder.order) {
				acc.push(currentItem);
			}
			return acc;
		}, []);
	
		setBoards(boards.map(b => {
			if (b.id === board.id) {
				return { ...b, items: newBoardItems };
			}
			if (b.id === currentBoard.id) {
				return { ...b, items: filteredCurrentBoard };
			}
			return b;
		}));
	};
	

    return (
        <div
            onDragOver={ (e) => dragOverHandler(e, board, item)}
            onDragLeave={ (e) => dragLeaveHandler(e)}
            onDragStart={ (e) => dragStartHandler(e, board, item)}
            onDragEnd={ (e) => dragEndHandler(e)}
            onDrop={ (e) => dropHandler(e, board, item)}
            draggable={true} 
            className="item"
        >
            {item.title}
        </div>
    )
}
