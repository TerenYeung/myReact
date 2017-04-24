import React from 'react';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';

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

		this.state = {
			items: [
				...test
			],
			selectId: null,
			editing: false,
		};
	}

	render() {
		const {
			items,
			selectId,
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
							<CreateBar />
							<List items={this.state.items}/>
						</div>
						{mainPart}				
					</div>
					
				</div>
			</section>
		)
	}
}

export default App;