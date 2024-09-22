import  { useCallback,  useEffect,  useRef, useState } from 'react';
import Qmark from '../assets/Vector.png';
import Square from '../assets/Frame 1000002250.png';
import Reactangle from '../assets/Rectangle 5160.png';
import Leftarrow from '../assets/left.svg';
import Rightarrow from '../assets/right.svg';
import { useTouchEvents } from '../hooks/useTouchEvents';

const initialImages = [
    Reactangle,
    Reactangle,
    Reactangle,
    Reactangle,
];

const Gallery = () => {
    const [images, setImages] = useState(initialImages);
    const [add, setAdd] = useState(Reactangle);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesRef = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3)
        );
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + Math.ceil(images.length / 3)) %
                Math.ceil(images.length / 3)
        );
    }, [images.length]);

  useEffect(()=> {
    const storeImages = sessionStorage.getItem('images')
    if(storeImages){
        const parsed = JSON.parse(storeImages)
        setImages(parsed)
    }
  }, [])
    
 

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
console.log(images);

const addImages = () => {
 images.push(add);
 sessionStorage.setItem('images', JSON.stringify(images));
 
 const BASE_URL =
     // eslint-disable-next-line no-undef
     process.env.NODE_ENV === 'production'
         ? 'https://lunacal-green.vercel.app/'
         : 'http://localhost:5173/';
 window.location.replace(`${BASE_URL}`)
 console.log(BASE_URL);
 
 setCurrentIndex(images.length)
}

console.log(images.length);


    const touchEvents = useTouchEvents(onSwipe);
    return (
        <div className='bg-[#363C43] shadow-[5.67px_5.67px_3.78px_#00000066] rounded-[18.8904px] pl-3 pr-6 py-6 '>
            <div className='flex gap-4 w-full'>
                <div className='flex flex-col gap-24 flex-shrink-0'>
                    <img
                        src={Qmark}
                        alt='mark'
                        width={20}
                        height={20}
                        className='w-[20px]'
                    />
                    <img
                        src={Square}
                        alt='6square'
                        width={20}
                        height={20}
                        className='w-[20px]'
                    />
                </div>

                <div className='flex-grow'>
                    <div className='flex justify-between  '>
                        <button className='bg-[#171717] text-white shadow-[inset_0px_4px_10px_2px_#00000040] rounded-2xl py-3  px-9 text-lg'>
                            Gallery
                        </button>
                        <div className='flex gap-8'>
                            <button onClick={addImages} className='addImage rounded-full text-[13px] font-bold flex items-center gap-1'>
                                <span className='text-lg'>+ </span>ADD IMAGE
                            </button>

                            <div className='flex gap-4 items-center'>
                                <button
                                    className='slider-arrow'
                                    onClick={prevSlide}>
                                    <img src={Leftarrow} alt='left-arrow' />
                                </button>
                                <button
                                    className='slider-arrow'
                                    onClick={nextSlide}>
                                    <img src={Rightarrow} alt='right-arrow' />
                                </button>
                            </div>
                        </div>
                    </div>

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
                </div>
            </div>
        </div>
    );
};

export default Gallery;
