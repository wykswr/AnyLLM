import useMethods from "./useMethod";

const counterMethods = {
    increment(state) {
        return state + 1;
    },

    decrement(state) {
        return state - 1;
    }
}

const useCounter = (value = 0) => {
    return useMethods(value, counterMethods);
}

export default useCounter;