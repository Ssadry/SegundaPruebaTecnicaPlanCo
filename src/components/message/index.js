import {Container, Top, Bottom, Button, Feedback} from './styled'

const Message = ({
    imageProfile, 
    title = 'Default title', 
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at gravida lectus. Duis ac dapibus nibh, at aliquet ante. Phasellus ut leo purus. Fusce tincidunt sagittis sem, vel finibus justo semper a. Maecenas gravida convallis odio ut fringilla. Nam blandit orci ac sollicitudin aliquet. Donec vestibulum eleifend magna quis luctus. '
}) => {
    return (
        <Container>
            <Top imageProfile={imageProfile}>
                <div></div>
                <div>
                    <p>von Elise</p>
                    <p>vor 3 Stunden</p>
                </div>
            </Top>
            <Bottom>
                <h3>
                    {title}
                </h3>
                <p>
                    {text}
                </p>
                <Button>
                    Helfen
                </Button>
                <Feedback>
                    <p>
                        1 Antwort
                    </p>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </Feedback>
            </Bottom>
        </Container>
    )
}

export default Message