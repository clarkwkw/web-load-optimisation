import {createMuiTheme} from "@material-ui/core/styles";
import Bg_1 from "../assets/shared/bg_1.png";
import themeCommon from './themeCommon';

const themeLight = createMuiTheme({
    ...themeCommon,
    palette: {
        background: {
            default: "#F0F9FF"
        },
        primary: {main: '#6293C3'},
        secondary: {main: '#FC8268'},
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    background: `url(${Bg_1}) no-repeat scroll -15% 50%, url(${Bg_1}) no-repeat scroll 110% 110%, linear-gradient(135deg, rgba(243,254,255,1) 0%, rgba(212,239,255,1) 100%)`,
                    backgroundSize: `400px, 450px, 65px, 50px, cover`,
                    backgroundColor: "#F0F9FF",
                    minHeight: '100vh'
                }
            }
        }
    },
    typography: {
        fontFamily: "'Montserrat', 'Noto Sans TC', sans-serif",
        button: {
            textTransform: "none",
        }
    },
});

export default themeLight;