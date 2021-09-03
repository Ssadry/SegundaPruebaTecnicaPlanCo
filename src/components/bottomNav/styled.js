import styled from 'styled-components'
import FaTimes from '../../images/icon/FaTimes.png'
import House from '../../images/icon/House.png'
import Bell from '../../images/icon/Bell.png'
import Cloud from '../../images/icon/Cloud.png'
import Person from '../../images/icon/Person.png'

export const Container = styled.div`
    width: 100%;
    height: 65px;

    position: relative;
    bottom: 0px;
    left: 0;
`

export const Top = styled.div`
    width: 100%;
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid #C4C4C4;
    background-color: white;
`

export const Bottom = styled.div`
    width: 370px;
    height: 22px;

    margin-left: 5px;

    background-color: white;
`

export const Line = styled.div`
    width: 110px;
    height: 5px;

    border-radius: 5px;

    margin-left: 128px;
    margin-bottom: 12px;

    background-color: black;
`

export const Item = styled.div`
    background-position: center;
    background-repeat: no-repeat;

    /* margin-top: -16.65px; */
`

export const CentralButton = styled(Item)`
    width: 50px;
    height: 50px;

    border-radius: 50%;

    background-color: #50BFA5;
    background-image: url(${FaTimes});

    margin-top: -25px;
`

export const HouseItem = styled(Item)`
    width: 20px;
    height: 18.52px;

    margin-left: 24px;

    background-image: url(${House});
`

export const BellItem = styled(Item)`
    width: 16px;
    height: 20.69px;

    background-image: url(${Bell});
`

export const CloudItem = styled(Item)`
    width: 20px;
    height: 18.73px;

    background-image: url(${Cloud});
`

export const PersonItem = styled(Item)`
    width: 22px;
    height: 20.57px;

    margin-right: 24px;

    background-image: url(${Person});
`