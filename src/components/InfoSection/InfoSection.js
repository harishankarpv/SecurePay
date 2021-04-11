import React from 'react'
import { Link} from 'react-router-dom';
import { Button, Container } from '../../globalStyles'
import 
        {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle,
        ImgWrapper, Img} 
from './InfoSection.elememts'


const InfoSection = ({lightBg, imgStart, lightTopLine, lightText, lightTextDesc,
    buttonLabel, description, headline1, headline2, primary,topLine,img,alt,start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline1}</Heading>
                                <Heading lightText={lightText}>{headline2}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/products'>
                                    <Button big fontBig primary={primary}>
                                    {buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    
                    </InfoRow>
                </Container>
            </InfoSec>
            
        </>

    )
}

export default InfoSection
