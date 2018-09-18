const storage = window.localStorage

function setCityByStorage(location) {
    storage.setItem('city', JSON.stringify(location))
}

function getCityByStorage() {
    return JSON.parse(storage.getItem('city'))
}

function clearCityToStorage() {
    storage.clear()
}

export {getCityByStorage, setCityByStorage, clearCityToStorage}

