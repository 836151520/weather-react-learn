import React, {Component, Fragment} from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import img from '../../cond-icon-heweather/100.png'
import humIcon from '../../image/sd.png'
import windIcon from '../../image/fx.png'

let Info = ({className, children}) => <div className={className}>{children}</div>

class WeatherInfo extends Component {
    static propTypes = {
        nowWeather: propTypes.shape({
            fl: propTypes.string,
            cond: propTypes.string,
            wind: propTypes.string,
            pcpn: propTypes.string,
            imgCode: propTypes.string,
            tips: propTypes.string,
        }),
    }

    static defaultProps = {
        nowWeather: {
            fl: '22',
            cond: '晴',
            wind: '西北',
            pcpn: '0.0',
            imgCode: '104',
            tips: '建议别出门'
        },
    }

    constructor() {
        super()
        this.state = {imgSrc: ""}
    }

    componentDidMount() {
        this.getAndSetImgSrc()
    }

    async getAndSetImgSrc() {
        let imgCode = this.props.nowWeather.imgCode
        let imgSrc = await import(`../../cond-icon-heweather/${imgCode || 104}.png`)
        this.setState({imgSrc})
    }

    render() {
        let {fl, cond, pcpn, wind, tips} = this.props.nowWeather
        let {imgSrc} = this.state
        return (
            <Fragment>
                <Info className='info-one'>
                    <b>{fl}</b>
                    <img src={imgSrc} alt="天气"/>
                    <strong>{cond}</strong>
                </Info>
                <Info className='info-two'>
                    <span className="hum">
                        降雨量 {pcpn}
                    </span>
                    <span className="wind">
                        {wind}
                    </span>
                </Info>
                <Info>
                    <span className='tips'>{tips}</span>
                </Info>
            </Fragment>
        )
    }
}


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