import findCity from './findCity'
import {getCity, setCity} from './storageCityByLocal'

let AMap = window.AMap

function getLocation(enableStorage = true) {
    return new Promise((resolve) => {
        let location = getCity()
        if (enableStorage && location) return resolve(location)

        AMap.plugin('AMap.CitySearch', function () {
                let citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' &&
                        result.info === 'OK') {
                        let city = result.city.replace('市', '')
                        findCity({
                            location: city,
                        }).then((list) => {
                            // 查询成功，result即为当前所在城市信息
                            setCity(list[0])
                            return resolve(list[0])
                        })
                    } else {
                        resolve(null)
                    }
                })
            }
        )
    })
}


export default getLocation