import React from 'react';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';
import uuid from 'uuid';
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

	render() {
		const {
			items,
			selectedId,
			editing,
		} = this.state;

		const mainPart = editing ? (
			<ItemEditor item={items[0]} />
		) : (
			<ItemShowLayer item={items[0]} />
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