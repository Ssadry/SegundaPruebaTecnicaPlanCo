import styled from 'styled-components'
import Love from '../../images/icon/Love.png'
import Share from '../../images/icon/Share.png'

export const Container = styled.div`
    width: 323px;
    height: 286px;

    margin-left: 30px;
    margin-bottom: 7px;
`

export const Top = styled.div`
    height: 53px;

    display: flex;

    margin-left: 8px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;

    color: #929295;

    word-spacing: -0.41px;

    > div:first-child {
        width: 50px;
        height: 50px;

        background-image: url(${({imageProfile}) => imageProfile});
    }

    > div:last-child {
        margin-left: 10px;
        margin-top: 8px;
    }
`

export const Bottom = styled.div`
    width: 323px;
    height: 227px;

    margin-top: 6px;

    border: 1px solid #C4C4C4;
    border-radius: 8px;

    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    h3 {
        margin-top: 16px;
        margin-left: 11px;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
    }

    p {
        margin-top: 10px;
        margin-left: 11px;
        font-size: 16px;
        letter-spacing: -0.408px;
    }
`

export const Button = styled.button`
    width: 226px;
    height: 36px;

    margin: 17px 48px 17px 48px;

    color: white;

    line-height: 22px;

    font-size: 17px;
    font-style: normal;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: #134D72;

    border-radius: 10px;
    border: 0;
`

export const Feedback = styled.div`
    height: 43px;

    display: flex;
    justify-content: space-between;

    border-top: 1px solid #C4C4C4;

    p {
        margin-top: 10px;
        margin-bottom: 11px;

        color: #929295;

        line-height: 22px;

        letter-spacing: -0.41px;

        font-size: 15px;
        font-style: normal;
        font-weight: 400px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    > div {
        display: flex;
        margin-right: 8px;
    }

    > div div {

        /* background-position: center; */
        background-repeat: no-repeat;
    }

    > div div:first-of-type {
        width: 27.8px;
        height: 27.8px;

        margin-top: 10px;
        margin-right: 6.2px;

        background-image: url(${Love});
    }

    > div div:last-of-type {
        width: 24px;
        height: 24px;

        margin-top: 13.8px;

        background-image: url(${Share});
        background-position: right;
    }

`