import { useState, useEffect } from '@tarojs/taro'

export function useAsyncEffect (effect, deps = []) {
    useEffect(() => {
        effect()
    }, deps)
}

export function makeStore(defStore) {
    return (store = defStore) => {
        const [ state, setState ] = useState(store.get());

        function updateState () {
            setState(store.get())
        }

        useEffect(() => {
            store.subscribe(updateState);
            return () => store.unsubscribe(updateState)
        });
        return state
    }
}
