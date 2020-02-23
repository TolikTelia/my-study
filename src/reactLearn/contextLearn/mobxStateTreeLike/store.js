import buildContextMST from "./useMobxStateTree";

const tolik = {
    value: 1,
    input: '',
};

const actions = self => ({
    incrementValue() {
        self.value = self.value + 1;
    },
    setInput(value) {
        self.input = value
    }
});

export const [Context, provider, consumer] = buildContextMST(tolik, actions);