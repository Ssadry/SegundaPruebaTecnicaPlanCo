import styled from 'styled-components'
import Profile from '../../images/profile/GroupOne.png'

export const Container = styled.div`
    height: 81px;
    background-color: #134D72;

    display: flex;
    align-items: center;
`

export const ProfileImage = styled.div`
    width: 60px;
    height: 60px;

    margin-left: 11px;

    background-image: url(${Profile});
    background-repeat: no-repeat;
`

export const Texts = styled.h1`
    margin-left: 16px;
    color: white;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    > h1 {
        font-size: 16px;
        font-weight: normal;
    }

    > p {
        font-size: 10px;
        font-weight: normal;

        width: 272px;
        word-spacing: -2%;
    }
`