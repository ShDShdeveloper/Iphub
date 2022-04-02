import SymbolTwo from '../../../Images/SymbolTwo.svg'
import SymbolOne from '../../../Images/SymbolOne.svg'
import './Header.scss'
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

function Header(){
    const props = {
        items: [
            {
                text: 'Услуги',
            },
            {
                text: 'Кейсы',
            },
            {
                text: 'FAQ',
            }
        ],
        logo: {
            text: ''
        },
        style: {
            barStyles: {
                responseStart: "1000px",
                background: 'rgba(27, 27, 27, 1)',
                boxShadow: 'none',
                width: "25%",
                fontSize: "12px"
            },
            sidebarStyles: {
                responseStart: "1000px",
                background: '#222',
                buttonColor: 'white'
            }
        }
    }
    return <header className={"IPhubWrapper"}>
        <div className={"my-auto"}> <img className={"VectorStyle"} src={SymbolTwo}/> <span className={"IPhubLogo"}><b>IP</b><i>hub</i></span>
            <img src={SymbolOne} className={"VectorStyle"} alt=""/></div>
        <div className={"d-none d-sm-none d-md-flex"}>
            <p className={"text-white my-auto"}>+7 (888) 888 88 88</p>
            <span className={"middleSize my-auto ms-3 text-danger"}>Получить консультацию</span>
        </div>
        <Navbar {...props}/>

    </header>
}
export default Header