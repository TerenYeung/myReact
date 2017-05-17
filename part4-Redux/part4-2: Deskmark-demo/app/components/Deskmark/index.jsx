import React from 'react';

import CreateBar from 'components/CreateBar';
import List from 'components/List';
import ItemEditor from 'components/ItemEditor';
import ItemShowLayer from 'components/ItemShowLayer';

class Deskmark extends React.Component {

  render() {
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const items = state.items;
    const selectedItem = items.find(
      ({ id }) => id === selectedId
      );
    
    const mainPart = isEditing ?
    (
      <ItemEditor
        item = { selectedItem }
        onSave = { actions.saveEntry }
        onCancel = { actions.cancelEdit }
      />
    ) : (
      <ItemShowLayer
        item = { selectedItem }
        onEdit = { actions.editEntry }
        onDelete = { actions.deleteEntry }
      />
    ); 

    return (
      <section class="deskmark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a href="#" className="navbar-brand">
            Deskmark App
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar
                onClick = { actions.createNewEntry }
              />
              <List
                items = { items }
                onSelect = { actions.selectEntry }
              />
            </div>
            { mainPart }
          </div>
        </div>
      </section>
    )
  }
}

export default Deskmark;