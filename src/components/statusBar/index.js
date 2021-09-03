import {Container, Time, CellularConnectionIcon, WifiIcon, BatteryIcon} from './styled'

const StatusBar = () => {
    return (
        <Container>
            <Time>
                <p>
                    9:41
                </p>
            </Time>
            <CellularConnectionIcon/>
            <WifiIcon/>
            <BatteryIcon/>
        </Container>
    )
}

export default StatusBar