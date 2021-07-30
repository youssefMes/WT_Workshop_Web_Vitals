import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import image_1 from './images/photo-1496171367470.png'
import image_2 from './images/photo-1562408590.jpeg'
import image_3 from './images/photo-1580584126903.jpeg'
import image_4 from './images/photo-1580706483913.jpeg'
const PHOTO_SET = [
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
  return (
    <>
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                <Typography variant="h6" >
                    Workshop web vitals
                </Typography>
            </Toolbar>
        </AppBar>
    <div className="gallery">
        {PHOTO_SET.map((photo, idx) => {
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
