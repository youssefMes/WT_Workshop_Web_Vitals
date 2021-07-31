import './App.css';
import {useEffect} from "react";
import Header from './Header';
import {getLCP, getFID, getCLS, getFCP, getTTFB} from 'web-vitals';

import image_1 from './images/photo-1496171367470.png'
import image_2 from './images/photo-1562408590.jpeg'
import image_3 from './images/photo-1580584126903.jpeg'
import image_4 from './images/photo-1580706483913.jpeg'

// list of images that contains src, width, height for each Image
const photos = [
    {
        src: image_1,
        width: 711,
        height: 474
    },
    {
        src: image_2,
        width: 711,
        height: 474
    },
    {
        src: image_3,
        width: 602,
        height: 474
    },
    {
        src: image_4,
        width: 602,
        height: 474
    },
    {
        src: image_1,
        width: 711,
        height: 474
    },
    {
        src: image_2,
        width: 711,
        height: 474
    },
    {
        src: image_3,
        width: 602,
        height: 474
    },
    {
        src: image_4,
        width: 602,
        height: 474
    }
];
function App() {
    useEffect(() => {
        // Code to execute on page load
        getCLS(console.log);
        getFID(console.log);
        getLCP(console.log);
        getFCP(console.log);
        getTTFB(console.log);
    }, [])
    return (
    <>
    <Header/>
    <div className="gallery">
        {photos.map((photo, idx) => {
            return (
                <div className={'column'} key={`${idx}-${idx}`}>
                    <img src={photo.src} width={photo.width} height={photo.height} alt={`Photo Number: ${idx + 1}`} loading={"lazy"}/>
                </div>
            )
        })}
    </div>
    </>
  );
}

export default App;
