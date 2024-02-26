import React from 'react';

import {EmblaOptionsType} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import {NextButton, PrevButton, usePrevNextButtons} from './carousel-arrows';

import RestaurantCard from './carousel-card';

import {Restaurant} from '../../../lib/definitions';

type PropType = {
    slides: Restaurant[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const {slides, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla gap-2">
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                </div>
            </div>

            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((restaurant, index) => (
                        <div className="embla__slide" key={index}>
                            <RestaurantCard restaurant={restaurant}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel