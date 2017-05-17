import * as storage from 'utils/storage';

export const SELECT_ENTRY = 'SELECT_ENTRY';

export function selectEntry(id) {
  return {
    type: SELECT_ENTRY,
    id,
  };
}

export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';

export function createNewEntry() {
  return {
    type: CREATE_NEW_ENTRY,
  };
}

// export const DELETE_ENTRY = 'DELETE_ENTRY';
export const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST';

function updateEntryList(items) {
  return {
    type: UPDATE_ENTRY_LIST,
    items,
  };
}

export function deleteEntry(id) {
  return dispatch => {
    storage.deleteEntry(id)
      .then(() => storage.getAll())
      .then(items => dispatch(
        updateEntryList(items)
      ));
  };
}

export const EDIT_ENTRY = 'EDIT_ENTRY';

export function editEntry(id) {
  return {
    type: EDIT_ENTRY,
    id,
  };
}

export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';

function updateSavedEntry(id) {
  return {
    type: UPDATE_SAVED_ENTRY,
    id,
  };
}

// saveEntry涉及改变editor状态和更新items，所有需要dispatch两个action
export function saveEntry(item) {
  const { title, content, id } = item;
  return dispatch => {
    // update flow
    if (id) {
      storage.updateEntry(id, title, content)
        .then(() => dispatch(updateSavedEntry(id)))
        .then(() => storage.getAll())
        .then(items => dispatch(updateEntryList(items)));
    } else {
      // create flow
      storage.insertEntry(title, content)
        .then(inserted => dispatch(updateSavedEntry(inserted.id)))
        .then(() => storage.getAll())
        .then(items => dispatch(updateEntryList(items)));
    }
  };
}

export const CANCEL_EDIT = 'CANCEL_EDIT';

export function cancelEdit() {
  return {
    type: CANCEL_EDIT,
  };
}

export function fetchEntryList() {
  return dispatch => {
    storage.getAll()
      .then(items => dispatch(updateEntryList(items)));
  };
}
