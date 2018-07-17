const storage = window.localStorage

function setCity(location) {
    storage.setItem('city', JSON.stringify(location))
}

function getCity() {
    return JSON.parse(storage.getItem('city'))
}

function clearCity() {
    storage.clear()
}

export {getCity, setCity, clearCity}

