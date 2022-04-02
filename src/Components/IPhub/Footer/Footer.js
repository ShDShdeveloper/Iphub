import './Footer.scss'
import SymbolTwo from "../../../Images/SymbolTwo.svg";
import SymbolOne from "../../../Images/SymbolOne.svg";

function Footer(){

    return <footer className={"footerWrapper"}>
        <div className="row mb-4">
            <div className="col-10 col-sm-4 col-md-3 my-auto text-white text-center">
                <img className={"VectorStyle"} src={SymbolTwo}/> <span className={"IPhubLogo"}><b>IP</b><i>hub</i></span>
                    <img src={SymbolOne} className={"VectorStyle"}/>
            </div>
            <div className="col-12 col-sm-12 col-md-9  my-auto text-center">
                <div className="row">
                    <div className="col-10 col-sm-10 col-md-6 col-md-6">
                        <p className={"middleTextStyle my-auto"}>Общество с ограниченной
                            ответственностью «Центр интеллектуальной собственности и инноваций „АйПиХаб“»</p>
                    </div>
                    <div className={"d-none d-sm-none d-md-none d-lg-block col-lg-2"}> </div>
                    <div className="col-10 col-sm-10 col-md-5 col-lg-4 text-end middleTextStyle">
                            <span className={"addressStyle text-white"}>123317, г. Москва, Пресненская наб., д.
                                8, стр. 1, эт. 3, п. 1, оф. 10</span> <br/>
                        <span>ИНН: </span> <span className={"text-white"}>7703472433</span> <span>КПП: </span> <span className={"text-white"}>770301001</span>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className={"row"}>
            <div className="col-10 col-sm-6 col-md-3">
                <p className={"text-secondary"}>Навигация по сайту:</p>
                <div className={"middleTextStyle text-white"}>
                    <p>Услуги</p>
                    <p>Кейсы</p>
                    <p>FAQ</p>
                </div>
            </div>
            <div className="col-10 col-sm-6 col-md-3">
                <p className={"text-secondary"}>Навигация по сайту:</p><div className={"middleTextStyle text-white"}>
                <div className={"middleTextStyle text-white"}>
                    <p>example@iphub.com</p>
                    <p>+7 (888) 888 88 88</p>
                </div>
            </div>
            </div>
            <div className="col-10 col-sm-6 col-md-3">
                <p className={"text-secondary"}>Мы в соцсетях:</p>
                <div className={"middleTextStyle text-white"}>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="col-10 col-sm-6 col-md-3">
                <p className={"text-secondary"}>Как добраться:</p>
                <div className={"middleTextStyle text-white"}>
                    <p>Схема проезда</p>
                </div>
            </div>
        </div>
        <div className="row middleTextStyle">
            <div className="col-10 col-sm-6 col-md-4">
                <p>© 2021 IPhub. Все права защищены.</p>
            </div>
            <div className="col-10 col-sm-6 col-md-4 text-center">
                <p>Публичная оферта</p>
            </div>
            <div className="col-10 col-sm-6 col-md-4 text-end">
                <p>Пользовательское соглашение</p>
            </div>
        </div>
    </footer>
}
export default Footer