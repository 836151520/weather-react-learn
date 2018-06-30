import React, {Component, Fragment} from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import img from '../../image/1-0.png'
import humIcon from '../../image/sd.png'
import windIcon from '../../image/fx.png'

let Info = ({className, children}) => (
    <div className={className}>{children}</div>
)

class WeatherInfo extends Component {
    render() {
        return (
            <Fragment>
                <Info className='info-one'>
                    <b>00</b>
                    <img src={img}/>
                    <strong>晴天</strong>
                </Info>
                <Info className='info-two'>
                    <span className="hum">
                        小雨
                    </span>
                    <span className="wind">
                        北风
                    </span>
                </Info>
                <Info>
                    <span className='tips'>白天有降雨，但会使人们感觉有些热，不过大部分人仍会有比较舒适的感觉。</span>
                </Info>
            </Fragment>
        )
    }
}

WeatherInfo = styled(WeatherInfo)`
  margin-top: 30px;
  >div{
    display: flex;
    align-items: flex-end;
    flex-wrap:wrap;
    :nth-child(1){
      >b{
        position: relative;
        font-size: 10em;
        font-weight: 400;
        line-height:1;
          ::after{
            content: "。";
            position: absolute;
            right: -64px;
            top: -10px;
            font-size: 69px;
            font-weight: 300;
          }
      }
      >img{
        margin: 0 20px;
      }
      >strong{
        font-size: 2em;
        font-weight: 400;
        margin-right: 20px;
      }
    }
    
    :nth-child(2){
      line-height: 28px;
      font-size: 20px;
      margin: 10px 0 20px 0;
      span{
        padding-left:22px ;
        background: no-repeat left center;
        background-size: 20px;
      }
      .hum{
        margin-right: 20px;
        background-image: url(${humIcon});
      }
      .wind{
        background-image: url(${windIcon});
      }
    }
    
  }
`
Info = styled(Info)`
    display: flex;
    align-items: flex-end;
    flex-wrap:wrap;
    &.info-one{
      >b{
        position: relative;
        font-size: 10em;
        font-weight: 400;
        line-height:1;
          ::after{
            content: "。";
            position: absolute;
            right: -64px;
            top: -10px;
            font-size: 69px;
            font-weight: 300;
          }
      }
      >img{
        margin: 0 20px;
      }
      >strong{
        font-size: 2em;
        font-weight: 400;
        margin-right: 20px;
      }
    }
    
    &.info-two{
      line-height: 28px;
      font-size: 20px;
      span{
        padding-left:22px ;
        background: no-repeat left center;
        background-size: 20px;
      }
      .hum{
        margin-right: 20px;
        background-image: url(${humIcon});
      }
      .wind{
        background-image: url(${windIcon});
      }
    }
`


export default WeatherInfo