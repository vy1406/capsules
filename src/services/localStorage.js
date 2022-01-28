export const setLocalStorageItem = (name, item) => {
    localStorage.setItem(name, item)
}

export const getLocalStorageItem = (name) => {
    return localStorage.getItem(name)
}

