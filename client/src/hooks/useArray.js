import useMethods from "./useMethod";


const arrayMethods = {
    push(state, item) {
        return state.concat(item);
    },
    pop(state) {
        return state.slice(0, -1);
    },
    slice(state, start, end) {
        return state.slice(start, end);
    },
    empty() {
        return [];
    },
    set(state, newValue) {
        return newValue;
    },
    remove(state, item) {
        const index = state.indexOf(item);
        if (index < 0) {
            return state;
        }
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
};

const useArray = (value = []) => {
    return useMethods(value, arrayMethods);
};

export default useArray;