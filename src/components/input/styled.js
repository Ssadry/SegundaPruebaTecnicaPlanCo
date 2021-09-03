import styled from 'styled-components'
import Search from '../../images/SearchOutlined.png'

export const Container = styled.div`
    width: 351px;
    height: 36px;

    position: relative;
    top: 12px;
    left: 12px;
`

export const InputSimulator = styled.div`
    width: 319px;
    height: 100%;

    border-radius: 10px;
    margin: auto;

    background-color: white;

    display: flex;
    align-items: center;

    > div {
        width: 25px;
        height: 25px;

        margin-left: 7px;

        background-image: url(${Search});

        p {
            margin-left: 48px;
            margin-bottom: 7px;

            color: #3C3C43;
            opacity: 60%;
            font-weight: 400;
            font-style: normal;
            font-size: 17px;
            line-height: 22px;

            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
    }
`