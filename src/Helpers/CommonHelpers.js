export const updateState = newState =>
    setState(prevState => ({...prevState, ...newState}));