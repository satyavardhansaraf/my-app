import React, {useState} from 'react';
import Video from '../../videos/video-1.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtWrapper, ArrowForwards, ArrowRight } from './HeroElements';

export default function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Lorem ipsum!</HeroH1>
                <HeroP>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</HeroP>
                <HeroBtWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >Get Started {hover ? <ArrowForwards /> : <ArrowRight />}</Button>
                </HeroBtWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
