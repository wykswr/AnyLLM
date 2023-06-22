import useCounter from "./useCounter";
import {useCallback} from "react";

const usePending = task => {
    const [pendingCount, {increment, decrement}] = useCounter(0);
    const taskWithPending = useCallback(
        async (...args) => {
            increment();
            const result = await task(...args);
            decrement();
            return result;
        },
        [decrement, increment, task]
    );
    return [taskWithPending, pendingCount > 0];
};

export default usePending;