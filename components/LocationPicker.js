import Container from './Container'
import styles from './locationPicker.module.scss'
import Heading from './Heading'
import Paragraph from './Paragraph'


const LocationPicker = () => {
    return <section className={styles.locationPicker}>
        <Container>
            <Heading level={2}>
                Love is in the air
            </Heading>
            <Paragraph>
                This is a description of a car
            </Paragraph>
        </Container>
    </section>
}
export default LocationPicker;