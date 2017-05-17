import uuid from 'uuid';

const STORAGE = window.localStorage;
const STORAGE_KEY = 'Deskmark';

export function insertEntry(title, content) {
  const entry = {
    title,
    content,
    id: uuid.v4(),
    time: new Date().toLocaleDateString(),
  };

  return getAll()
    .then(items => [...items, entry])
    .then(saveAll)
    .then(() => entry);
}

export function deleteEntry(id) {
  return getAll()
    .then(
      items => items.filter(
        item => item.id !== id
      )
    ).then(saveAll);
}

export function updateEntry(id, title, content) {
  let entry = {};
  return getAll()
    .then(
      items => items.map(
        item => (
          item.id === id ?
          (entry = {
            ...item,
            title,
            content,
          }) : item
        )
      )
    ).then(saveAll)
    .then(() => entry);
}

export function getAll() {
  return new Promise(resolve => {
    const items = STORAGE.getItem(STORAGE_KEY);

    try {
      resolve(items ? JSON.parse(items) : []);
    } catch (e) {
      resolve([]);
    }
  });
}

export function saveAll(items) {
  return new Promise(resolve => {
    STORAGE.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
    resolve();
  });
}

