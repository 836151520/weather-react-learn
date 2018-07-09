import Axios from 'axios'

function findCity({location}) {
    return Axios.get(`https://search.heweather.com/find?key=de3f25819a7b4427a4ca71d7cb1e9491&location=${ location}&group=cn&number=20`)
        .then(resolve => {
            let arr = resolve.data.HeWeather6[0].basic || []
            return arr.map(location => ({
                city: location.location,
                leader: location.parent_city,
                province: location.admin_area,
            }))
        })
}

export default findCity
