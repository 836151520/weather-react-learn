import React, {Component} from 'react'
import styled from 'styled-components'
import findCity from '../../common/findCity'
import store from '../../store'

class SearchCity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityList: []
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
        this.handleOnBlur = this.handleOnBlur.bind(this)
        this.handleOnFocus = this.handleOnFocus.bind(this)
    }

    handleOnChange(e) {
        //去除空白符
        let val = e.target.value.replace(/\s/g, '')
        if (val === '') {
            this.setState({cityList: []})
        }
        if (isChinaLang(val)) {
            findCity({
                location: val
            }).then(cityList => this.setState({
                cityList: cityList
            }))
        }
    }

    handleOnBlur() {
        this.ul.classList.add('hidden')
    }

    handleOnFocus() {
        this.ul.classList.remove('hidden')
    }

    handleOnClick(location) {
        store.dispatch({
            type: 'changeLocation',
            location: location
        })
    }

    render() {
        let {className} = this.props
        let {cityList} = this.state
        return (
            <div className={className}
                 tabIndex={1}
                 onBlur={this.handleOnBlur}
                 onFocus={this.handleOnFocus}>
                <input
                    type="text"
                    placeholder="输入城市名(中文)"
                    onChange={this.handleOnChange}
                />
                <ul ref={ul => this.ul = ul}>
                    {cityList.map(o => (
                        <li key={o.province + o.leader + o.city}
                            onClick={() => this.handleOnClick(o)}>
                            {o.province}
                            --
                            {o.leader}
                            --
                            {o.city}
                        </li>)
                    )}
                </ul>
            </div>
        )
    }
}

SearchCity = styled(SearchCity)`
  width: 200px;
  height: 35px;
  line-height: 35px;
  background: #fff;
  z-index: 999;
  transition: height 0.3s;
  outline: none;
  input{
    text-indent: 10px;
    font-size: 16px;
    transition: all 0.3s;
    width: 100%;
    height: 100%;
    outline: none;
    display: block;
  }
  ul{
    max-height: 140px;
    overflow-y: auto;
    &.hidden{
      height: 0;
    }
  }
  li{
    width: 100%;
    text-indent: 10px;
    font-size: 14px;
    height: 35px;
    background: #f1f4f7;
    color: #999;
    &:hover{
      cursor: pointer;
      transition: all 0.3s;
      background: #666;
      color: aqua;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    >input,li{
      text-align: center;
    }
  }
`

function isChinaLang(s) {
    return Boolean(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi.exec(s))
}

export default SearchCity