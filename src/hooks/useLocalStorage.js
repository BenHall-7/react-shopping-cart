import {useState} from 'react';

const useLocalStorage = (key, initial) => {
    const local = localStorage.getItem(key);
    const start = local ? JSON.parse(local) : initial;
    const [state, setState] = useState(start);

    const setStateWrapper = value => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [state, setStateWrapper];
}

export default useLocalStorage;