import './style.scss';
import uuid from 'uuid';
import moment from 'moment';

import React from 'react';

import CreateBar from '../CreateBar';
import List from '../List';
import ListItem from '../ListItem';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

class Deskmark extends React.Component {
	constructor(props) {
		super(props);

		let items = [{
			title: 'hello world',
			content: 'hello world',
			id: 1
		}, {
			title: 'hello react',
			content: 'hello react',
			id: 2
		}]

		this.state = {
			items: [
				...items
			],
			selectedId: null,
			editing: false,
		}

		this.createItem = this.createItem.bind(this);
		this.selectItem = this.selectItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.saveItem = this.saveItem.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);

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
			editing: false
		})
	}

	editItem(id) {
		this.setState({
			selectedId: id,
			editing: true,
		})
	}

	deleteItem(id) {
		if (!id) return;
		this.setState({
			items: this.state.items.filter((item) => {
				return item.id != id;
			})
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
					exist.id == item.id ? {
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

	render() {

		const selected = this.state.items.find((item) => {
			return item.id === this.state.selectedId;
		});

		const editing = this.state.editing;

		const mainPart = editing ? (
			<ItemEditor
				item={selected}
				onSave={this.saveItem}
				onCancel={this.cancelEdit}
			/>) : (
			<ItemShowLayer
				item={selected}
				onEdit={this.editItem}
				onDelete={this.deleteItem}
			/>
		)

		return (
			<section className="deskmark-component">
				<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
					<a className="navbar-brand" href="#">
						Deskmark App
					</a>
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
		);
	}
}

export default Deskmark;