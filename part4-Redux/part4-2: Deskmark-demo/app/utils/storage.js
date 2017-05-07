import uuid from 'uuid';

const STORAGE = window.localStorage;
const STORAGE_KEY = 'Deskmark';

export function getAll() {
    return new Promise(resolve => {
        const results = STORAGE.getItem(STORAGE_KEY);

        reoslve(results ? JSON.parse(results) : [])
    })
}

export function saveAll(items) {
    return new Promise(resolve => {
        STORAGE.setItem(STORAGE_KEY, JSON.stringify(items));
    });
}

export function deleteEntry(id) {
    return getAll()
        .then(results => results.filter(result => result.id != id))
        .then(saveAll);
}

export function updateEntry(id, title, content) {
    let entry;
    return getAll()
        .then(results => {
            results.map(result => (result.id === id) ?
                (entry = {...result,
                    title,
                    content,
                }) : result)
        })
        .then(saveAll)
        .then(() => entry);
}

export function insertEntry(title, content) {
    const entry = {
        id: uuid.v4(),
        title,
        content,
        time: new Date().getTime(),
    };

    return getAll()
        .then(results => [...results, entry])
        .then(saveAll)
        .then(() => entry);
}

export function getEntry(id) {
    return getAll()
        .then(
            results => results.find(
                result => result.id === id
            )
        );
}
