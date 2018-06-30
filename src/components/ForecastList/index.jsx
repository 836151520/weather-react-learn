import React, {Component} from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

class ForecastList extends Component {
    render() {
        let a = [1, 2, 3]
        return (
            <div className={this.props.className}>
                <ul>
                    <li></li>
                    <li>天气情况</li>
                    <li>温度</li>
                    <li>降雨概率</li>
                    <li>湿度</li>
                    <li>风向</li>
                    <li>风力</li>
                </ul>
                {
                    a.map((o, i) => (
                        <ul key={i}>
                            <li>今天</li>
                            <li>晴</li>
                            <li>温度</li>
                            <li>降雨概率</li>
                            <li>湿度</li>
                            <li>风向</li>
                            <li>风力</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

ForecastList = styled(ForecastList)`
  background: rgba(0,0,0,0.4);
  >ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid #999;
    :first-child{
      background: rgba(0,0,0,0.8);
      border-bottom:0px solid #999;
    }
    li{
      width: 14.2857%;
      text-align: center;
    }
  }
`


export default ForecastList