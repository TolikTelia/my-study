import {types} from "mobx-state-tree";

const mockData = [
    {
        date: Date.now(),
        title: 'first',
        user: 'tolik',
        avatar: '',
        id: `${Date.now()}`,
        snapShot: 'red',
    },
    {
        date: Date.now() + 1,
        title: 'second',
        user: 'vika',
        avatar: '',
        id: `${Date.now() + 1}`,
        snapShot: 'green',
    },
];

const itemModel = types
    .model('VersionsStoreItem', {
        date: types.number,
        title: types.string,
        user: types.string,
        avatar: types.string,
        id: types.identifier,
        snapShot: types.enumeration(['red', 'green', 'blue'])
    })
    .views(self => ({
        get parsedDate () {
            return new Date(self.date).toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        }
    }));

const interastingReference= types.reference(itemModel, {
    get(identifier, parent) {
        const version = parent.versions.find(v => v.id === identifier);
        console.log(identifier);
        return version ? [version, identifier] : null
    },
    // given a user, produce the identifier that should be stored
    set(value /* User */) {
        return value.id
    }
});

const stora = types.model({
    versions: types.array(itemModel),
    selectedItem: interastingReference
}).views(self => ({

})).actions(self => ({
    setSelected(id) {
        self.selectedItem = id
    },
    setFnuceton(value) {
        console.log(23);
        self.fnuceton = value
    }
})).volatile(self => ({
   fnuceton: 2
}));

const store = stora.create({selectedItem: Date.now(), versions: mockData});

export default store