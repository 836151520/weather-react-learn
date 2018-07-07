import Axios from 'axios'

let ip = '192.168.0.101'
let port = 3001
if (process.env.NODE_ENV === 'production') {
    ip = '118.193.210.40'
    port = 22
}

function findCity({city, province, leader, location}) {
    return Axios
        .get(`http://${ip}:${port}?city=${city}&province=${province}&leader=${leader}&location=${location}`)
        .catch((err) => alert('findCity: ' + err))
        .then(resolve => {
            return resolve.data.map(location => ({
                city: location.cityZh,
                province: location.provinceZh,
                leader: location.leaderZh,
            }))
        })
}

export default findCity