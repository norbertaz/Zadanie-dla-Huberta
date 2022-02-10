import React, {useState} from "react";

import {Container, Carousel, ImageContainer, ArrowLeft, ArrowRight} from '../StyledComponents/Home.styled'


const Home = () => {
    const imagesURL = [
        {
            path: 'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073_960_720.jpg'
        },
        {
            path: 'https://cdn.pixabay.com/photo/2015/05/30/19/55/desert-790640_960_720.jpg'
        },
        {
            path: 'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg'
        },
    ]
    const [currentImage, setCurrentImage] = useState(0)

    const autoChangeImage = setTimeout(()=>(
        setCurrentImage(currentImage  === imagesURL.length -1 ? 0 : currentImage + 1)
        
    ),4000)

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? imagesURL.length -1 : currentImage - 1)
        clearTimeout(autoChangeImage)
    }
    const nextImage = () => {
        setCurrentImage(currentImage  === imagesURL.length -1 ? 0 : currentImage + 1)
        clearTimeout(autoChangeImage)
    }
    console.log(currentImage)
    return(
        <Container>
            <Carousel>
                <ImageContainer>
                    {imagesURL.map((image, index) => (
                        <div
                        className={index === currentImage ? 'visible-image' : 'hidden-image'}
                        key={index}
                        >
                            {index===currentImage && (
                                <img src={image.path} alt=''/>
                            )}
                        </div>
                        // 
                    ))}
                </ImageContainer>
                
            </Carousel>
            <ArrowLeft onClick={prevImage}/>
            <ArrowRight onClick={nextImage}/>
        </Container>

)}

export default Home