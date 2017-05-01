import React from 'react';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';
import uuid from 'uuid';
import moment from 'moment';

class App extends React.Component {
	constructor(props) {
		super(props);

		let test = [{
			id: 1,
			title: 'Hello World',
			content: 'Hello World',
			time: 123,
		}, {
			id: 2,
			title: 'Hello React',
			content: 'Hello React',
			time: 143,
		}]

		this.createItem = this.createItem.bind(this);
		this.selectItem = this.selectItem.bind(this);
		this.saveItem = this.saveItem.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

		this.state = {
			items: [
				...test
			],
			selectedId: null,
			editing: false,
		};
	}

	createItem() {
		this.setState({
			selectedId: null,
			editing: true,
		})
	}

	selectItem(id) {
		this.setState({
			selectedId: id,
			editing: false,
		})
	}

	saveItem(item) {
		let items = this.state.items;

		if (!item.id) {
			items = [
				...items, {
					...item,
					id: uuid.v4(),
					time: moment().format("MMMM Do YYYY, h:mm:ss a"),
				}
			]
		} else {
			items = items.map(
				exist => (
					exist.id === item.id ? {
						...exist,
						...item,
					} : exist
				)
			);
		}
		this.setState({
			items,
			selectedId: item.id,
			editing: false,
		})
	}

	cancelEdit() {
		this.setState({
			editing: false,
		})
	}

	editItem(id) {
		this.setState({
			selectedId: id,
			editing: true
		})
	}

	deleteItem(id) {
		if (!id) {
			return;
		}

		this.setState({
			items: this.state.items.filter(
				result => result.id != id
			),
		})
	}

	render() {
		const {
			items,
			selectedId,
			editing,
		} = this.state;

		const selected = selectedId && items.find(item => item.id == selectedId);

		const mainPart = editing ? (
			<ItemEditor
				item={selected}
				onSave={this.saveItem}
				onCancel={this.cancelEdit}
				/>
		) : (
			<ItemShowLayer
				item={selected}
				onEdit={this.editItem}
				onDelete={this.deleteItem}
				/>
		);

		return (
			<section className="deskmark-component">
				<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
					<a className="navbar-brand" href="#">Deskmark App</a>
				</nav>
				<div className="container">
					<div className="row">
						<div className="col-md-4 list-group">
							<CreateBar onClick={this.createItem}/>
							<List
								items={this.state.items}
								onSelect={this.selectItem}
								/>
						</div>
						{mainPart}				
					</div>
					
				</div>
			</section>
		)
	}
}

export default App;