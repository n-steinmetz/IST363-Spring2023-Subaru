import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import FormGroup from './FormGroup';
import Heading from './Heading';
import Image from "next/image";
import Head from 'next/head';
import Label from './Label';
import Select from './Select';

import styles from './trimpicker.module.scss'

const backgroundImages = [
    {
        name: "Lakeside",
    },
    {
        name: "Lakeside City",
    },
    {
        name: "City Park",
    },
    {
        name: "Mountains",
    },
    {
        name: "Racetrack",
    },
    {
        name: "Mountain Top",
    },
    {
        name: "City Parking Lot",
    },
    {
        name: "City Street",
    },
    {
        name: "Parking Garage Top",
    }
]

const TrimPicker2 = ({ trimLevels }) => {
    const [activeTrimIndex, setTrimActiveIndex] = useState(0);
    const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);

    return <section className={styles.trimpicker} id="trimPicker">
            <div className={styles.trimpicker_image}>
                <Image
                    src={`/backgrounds/series-background-${activeBackgroundIndex+1}.jpg`}
                    alt={backgroundImages[activeBackgroundIndex].name}
                    width={1900}
                    height={656}
                    className={styles.trimpicker_image_background}
                />
                <Image
                    src={trimLevels[activeTrimIndex].images.large.sourceUrl}
                    alt={trimLevels[activeTrimIndex].images.large.altText}
                    width={trimLevels[activeTrimIndex].images.large.mediaDetails.width}
                    height={trimLevels[activeTrimIndex].images.large.mediaDetails.height}
                    className={styles.trimpicker_image_large}
                />
            </div>
        <div className={styles.trimpicker_text}>
            <Heading level={2}>Picture Yourself Behind the Wheel</Heading>
            <FormGroup>
                <Label>I want to drive...</Label>
                <Select options={trimLevels.map(({ trimLevel, index }) => {
                    //const { name } = trimLevels;
                    return {
                        value: index, 
                        label: trimLevel.name,
                    }
                })}
                    changeHandler={setTrimActiveIndex}
                />
            </FormGroup>
            <FormGroup>
                <Label>Change the driving location to...</Label>
                <Select options={backgroundImages.map((backgroundImage, index) => {
                    return {
                        value: index,
                        label: backgroundImage.name
                    }
                })}
                    changeHandler={setActiveBackgroundIndex}
                />
            </FormGroup>
        </div>
        </section>
}

/*const TrimPicker = ({ trimLevels }) => {
    // stateVariable, setFunctionVariable
    const [activeIndex, setActiveIndex] = useState(0); 


    return <div>
        <AnimatePresence>
            <motion.div
                key={trimLevels[activeIndex].images.large.sourceUrl}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                id="trimPicker"
            >
            <Image
                src={trimLevels[activeIndex].images.large.sourceUrl}
                alt={trimLevels[activeIndex].images.large.altText}
                width={trimLevels[activeIndex].images.large.mediaDetails.width}
                height={trimLevels[activeIndex].images.large.mediaDetails.height}
            />
            <Heading level={2}>{trimLevels[activeIndex].name}</Heading> 
            </motion.div>
        </AnimatePresence>
        <ul>
        {trimLevels.map((trimLevel, index) => {
            const  {name, images} = trimLevel;
            const {thumbnail} = images
            return <li onClick={() => {
                setActiveIndex(index);
            }}>
                <Heading level={3}> {name} </Heading>
                {thumbnail &&
                    <Image
                        src={thumbnail.sourceUrl}
                        alt={thumbnail.altText}
                        width={thumbnail.mediaDetails.width}
                        height={thumbnail.mediaDetails.height}
                    />
                }
            </li>
        })}
        </ul>
    </div>
}*/
export default TrimPicker2