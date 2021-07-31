import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './images/logo_760x340.png'

function Header() {
    return (
        <><AppBar position="static" color={"primary"}>
            <Toolbar>
                <Typography variant="h6" >
                    Workshop web vitals
                </Typography>
            </Toolbar>
        </AppBar>
            <img src={logo}/>
        </>

    )
}
export default Header;
