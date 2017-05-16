import React from 'react';

function List({
	items,
	onDelete
}) {

	const listItem = items.map((item) => (
		<li key={item.id}>
				<button onClick={()=> {onDelete(item.id)}}>删除</button>
				{item.content}
			</li>
	))

	return (
		<ul className="list-component">
				<h2>待办事项列表</h2>
				{listItem}
			</ul>
	)
}

export default List;