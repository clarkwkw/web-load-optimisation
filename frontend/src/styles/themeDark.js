import {createMuiTheme} from "@material-ui/core/styles";
import Bg_1 from "../assets/shared/bg_1.png";
import themeCommon from './themeCommon';

const themeDark = createMuiTheme({
    ...themeCommon,
    palette: {
        background: {
            default: "#222222"
        },
        primary: {main: '#b0d1f1'},
        secondary: {main: '#FC8268'},
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    background: `url(${Bg_1}) no-repeat scroll -15% 50%, url(${Bg_1}) no-repeat scroll 110% 110%, linear-gradient(135deg, rgba(94, 200, 228, 1) 0%, rgba(0, 6, 83, 1) 100%)`,
                    backgroundSize: `400px, 450px, 65px, 50px, cover`,
                    backgroundColor: "#222222",
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

export default themeDark;