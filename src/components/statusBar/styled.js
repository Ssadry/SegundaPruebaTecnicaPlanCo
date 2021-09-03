import styled from 'styled-components'
import CellularConnection from '../../images/statusBar/CellularConnection.png'
import Wifi from '../../images/statusBar/Wifi.png'
import Battery from '../../images/statusBar/Battery.png'

export const Container = styled.div`
    display: flex;

    width: 375px;
    height: 44px;
`

export const Time = styled.div`
    width: 54px;
    height: 21px;

    margin: 7px 0 0 20px;

    p {
        width: 54px;
        height: 18px;

        text-align: center;

        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const CellularConnectionIcon = styled.div`
    width: 17px;
    height: 10.67px;

    position: relative;
    top: 17.67px;
    left: 220px;

    background-image: url(${CellularConnection});
`

export const WifiIcon = styled.div`
    width: 15.33px;
    height: 11px;

    position: relative;
    top: 17.33px;
    left: 225px;

    background-image: url(${Wifi});
`

export const BatteryIcon = styled.div`
    width: 24.33px;
    height: 11.33px;

    position: relative;
    top: 17.33px;
    left: 230px;

    background-image: url(${Battery});
    background-repeat: no-repeat;
    background-position: center;
`