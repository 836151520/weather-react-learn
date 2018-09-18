import findCity from './findCity'
import {getCityByStorage, setCityByStorage} from './storageCityByLocal'

let Map = window.AMap

function getLocation(enableStorage = true) {
    const MapPositioning = (callback) => Map.plugin('AMap.CitySearch', function () {
            let citySearch = new Map.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' &&
                    result.info === 'OK') {
                    let city = result.city.replace('市', '')
                    findCity({
                        location: city,
                    }).then((list) => {
                        // 查询成功，result即为当前所在城市信息
                        setCityByStorage(list[0])
                        return callback(list[0])
                    })
                } else {
                    callback(null)
                }
            })
        }
    )


    return new Promise((resolve) => {
        let location = getCityByStorage()
        MapPositioning(resolve)
        if (enableStorage && location) {
            return resolve(location)
        }
    })
}

export default getLocation