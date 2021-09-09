import React, {useState, useEffect} from 'react'

import './homepage.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import HomepageSearch from '../../components/homepage-search/homepage-search.component'

const HomePage = () => {
    const [style, setStyle] = useState()
    const [images, setImages] = useState()

    useEffect(() => {
        const imgArray = new Array('../../assets/desert0.jpeg', '../../assets/forest-waterfall.jpeg')

        setImages({images:imgArray})
    }, [])

    const doSlideshow = () => {
        console.log(style, images)
        console.log("Start Slideshow")
        let nextImage = 0


        const getStyle = () => {
            console.log("Start get style")
            console.log(style, images)
            if(nextImage > images.length) {
                nextImage = 0
            }
            console.log(images[nextImage])
            setStyle({backgroundImage: images[nextImage]})
            nextImage += 1
        }
        if(images){setInterval(getStyle, 10000)} 
    }   

    useEffect(() => {
        doSlideshow()
    }, [images])

    if(images) {
        return (
            <div className="homepage" style={style}>
                    <Navbar
                        page="homepage-nav"
                    />
                    <HomepageSearch />
            </div>
        )
    } else {return (<div></div>)}
    
}

export default HomePage 
