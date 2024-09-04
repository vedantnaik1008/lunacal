import  { useCallback, useRef, useState } from 'react'
import { useTouchEvents } from '../hooks/useTouchEvents';
import Reactangle from '../assets/Rectangle 5160.png';

const images = [
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesRef = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3)
        );
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + Math.ceil(images.length / 3)) %
                Math.ceil(images.length / 3)
        );
    }, []);

    const onSwipe = useCallback(
        (diff) => {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        },
        [nextSlide, prevSlide]
    );

    const touchEvents = useTouchEvents(onSwipe);
  return (
    <div className='mt-10 relative overflow-hidden'>
                        <div
                            ref={imagesRef}
                            className='flex transition-transform duration-300 ease-in-out md:gap-1'
                            style={{
                                transform: `translateX(${currentIndex * -100}%)`
                            }}
                            {...touchEvents}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className='w-full flex-shrink-0 md:w-1/3 flex '>
                                    <img
                                        src={image}
                                        alt={`Rectangle ${index}`}
                                        className='object-cover w-full md:w-[90%] '
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
  )
}

export default ImageSlider
