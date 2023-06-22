import {useMemo, useState} from "react";

const useMethods = (value, methods) => {
    const [state, setState] = useState(value);
    const boundMethods = useMemo(
        () => Object.entries(methods).reduce(
            (hookMethods, [name, fn]) => {
                hookMethods[name] = (...args) => {
                    setState(state => fn(state, ...args));
                };
                return hookMethods;
            },
            {}
        ),
        [methods]
    );
    return [state, boundMethods];
};

export default useMethods;