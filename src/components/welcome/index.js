import {Container, ProfileImage, Texts} from './styled'

const Welcome = () => {
    return (
        <Container>
            <ProfileImage/>
            <Texts>
                <h1>
                    Hi Maria!
                </h1>
                <p>
                    Vervollständige dein Profil und erhalte deine ersten PlanCo Punkte!
                </p>
            </Texts>
        </Container>
    )
}

export default Welcome