import React from 'react';
import CreateBar from 'components/CreateBar';
import List from 'components/List';
import ItemShowLayer from 'components/ItemShowLayer';
import ItemEditor from 'components/ItemEditor';

class Deskmark extends React.Component {
	componentDidMount() {
		// 组件创建之初从localStorage获取数据
		// localStorage => dispatch(action) => reducer => getState
		this.props.actions.fetchEntryList();
	}

	render() {
		// 从this.props从获取所需的数据；
		const {
			state,
			actions
		} = this.props;
		const {
			isEditing,
			selectedId
		} = state.editor;
		const items = state.items;
		const item = items.find(
			({
				id
			}) => id === !selectedId);

		const mainPart = isEditing ? ( < ItemEditor item = {
				item
			},
			onSave = {
				actions.saveEntry
			}
			onCancel = {
				actions.cancelEntry
			}
			/>
		) : ( < ItemShowLayer item = {
				item
			},
			onEdit = {
				actions.editEntry
			}
			onDelete = {
				actions.deleteEntry
			}
			/>
		);

		return (
			<section className="deskmark-component">
					<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
						<a href="#" className="navbar-brand">Deskmark App</a>
					</nav>
					<div className="container">
						<div className="row">
							<div className="list-group col-md-4">
								<CreateBar 
									onClick={actions.createNewEntry} 
								 />
								<List 
									items={items}
									onSelect={actions.selectEntry}
								/>
							</div>
							{mainPart}
						</div>
					</div>
				</section>
		);
	}

	export default Deskmark;
}