import findCity from './findCity'

let AMap = window.AMap

function getLocation() {
    return new Promise((resolve) => {
        AMap.plugin('AMap.CitySearch', function () {
                let citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' &&
                        result.info === 'OK') {
                        findCity({
                            province: result.province.replace('省', ''),
                            city: result.city.replace('市', ''),
                        }).then((list) => {
                            resolve(list[0])
                        })
                        // resolve(result)
                        // 查询成功，result即为当前所在城市信息
                    } else {
                        resolve(null)
                    }
                })
            }
        )
    })
}


export default getLocation