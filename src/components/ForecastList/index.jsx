import React, {Component} from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

let Forecast

class ForecastList extends Component {
    static propTypes = {
        forecastList: propTypes.array
    }
    static defaultProps = {
        forecastList: [...Array(3)].map(_ => ({
            tmp: {max: '20', min: '10'},
            cond: {txt_d: '晴'},
            pop: '49',
            wind: {dir: '西北风'},
            astro: {sr: '05:11', ss: '17:55'},
            vis: '10'
        }))
    }

    render() {
        let {forecastList} = this.props
        return (
            <Forecast>
                <ul>
                    <li></li>
                    <li>温度</li>
                    <li>天气情况</li>
                    <li>降雨概率</li>
                    <li>风向</li>
                    <li>日出日落</li>
                    <li>能见度</li>
                </ul>
                {
                    forecastList.map((o, i) => (
                        <ul key={i}>
                            <li>{['今天', '明天', '后天'][i]}</li>
                            <li>{o.tmp.max}°/{o.tmp.min}°</li>
                            <li>{o.cond.txt_d}</li>
                            <li>{o.pop}%</li>
                            <li>{o.wind.dir}</li>
                            <li>{o.astro.sr}/{o.astro.ss}</li>
                            <li>{o.vis}公里</li>
                        </ul>
                    ))
                }
            </Forecast>
        )
    }
}

Forecast = styled.div`
  background: rgba(0,0,0,0.4);
  >ul{
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid #999;
    :first-child{
      background: rgba(0,0,0,0.8);
      border-bottom:0;
      font-weight: 400;
    }
    li{
      flex-shrink:0;
      width: 14.2857%;
      text-align: center;
    }
  }
  
  @media screen and (max-width: 800px) {
    >ul li {
      width: 20%;
    }
  }
  @media screen and (max-width: 500px) {
    >ul li {
      width: 25%;
    }
  }
`


export default ForecastList