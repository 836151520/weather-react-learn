import React, {Component} from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

class Nav extends Component {
    static propTypes = {
        country: propTypes.string, //国
        province: propTypes.string, //省
        city: propTypes.string, //市

    }

    static defaultProps = {
        country: '中国',
        province: '北京',
        city: '北京',
    }

    render() {
        let {country, city, province, className} = this.props
        return (
            <div className={className}>
                <span>{country}</span>
                <i></i>
                <span>{city}</span>
                <i></i>
                <span>{province}</span>
            </div>
        )
    }
}

Nav = styled(Nav)`
  display: flex;
  >span{
    padding: 5px 12px;
    border: 1px solid currentColor;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.6);
    :last-child{
      color: #fff;
    }
  }
  >i{
    color: rgba(255, 255, 255, 0.6);
    margin: 0 15px;
    width: 15px;
    height: 15px;
    border: 2px solid currentColor;
    border-bottom: 0;
    border-left: 0;
    transform: translate(-5px,50%) rotate(45deg);
  }
`

export default Nav