import './style.scss';

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
			id: 1
		}, {
			title: 'hello react',
			id: 2
		}]

		this.state = {
			items: [
				...items
			]
		}
	}

	render() {
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
							<CreateBar />
							<List items={this.state.items}/>
						</div>
						<ItemEditor />
					</div>
				</div>
			</section>
		);
	}
}

export default Deskmark;