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
   // get
});

const stora = types.model({
    versions: types.array(itemModel),
    selectedItem: types.reference(itemModel)
}).views(self => ({

})).actions(self => ({
    setSelected(id) {
        self.selectedItem = id
    }
}));

const store = stora.create({selectedItem: Date.now(), versions: mockData});

export default store