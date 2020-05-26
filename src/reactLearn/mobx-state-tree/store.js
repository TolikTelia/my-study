import { types, getSnapshot, onSnapshot, applySnapshot } from "mobx-state-tree";

const Todo = types
    .model({
        name: types.optional(types.string, ""),
        done: types.optional(types.boolean, false)
    })
    .actions(self => ({
        setName(newName) {
            self.name = newName
        },

        toggle() {
            self.done = !self.done
        }
    }));

const User = types.model({
    name: types.optional(types.string, "")
});

const RootStore = types
    .model({
        users: types.map(User),
        todos: types.map(Todo),
        counter: types.optional(types.number, 0)
    })
    .views(self => ({
        get snapshotsCount() {
            return states.length
        }
    }))
    .actions(self => ({
        addTodo(id, name) {
            self.todos.set(id, Todo.create({ name }))
        },
        prev() {
            if (currentFrame > 0) {
                currentFrame -= 1;
                applySnapshot(self, states[currentFrame])
            }
        },
        next() {
            if (states.length - 1 > currentFrame) {
                currentFrame += 1;
                applySnapshot(self, states[currentFrame])
            }
        },
        increment() {
            self.counter += 1
        },
        decrement() {
            self.counter -= 1
        },
    }));

const store = RootStore.create();

let states = [];
let currentFrame = -1;

onSnapshot(store, snapshot => {
    if (currentFrame === states.length - 1) {
        currentFrame++;
        states.push(snapshot);
        console.dir(states);
        console.log(currentFrame);
    }
});

store.addTodo(1, "Eat a cake");
store.todos.get(1).toggle();

console.log(getSnapshot(store));

export default store