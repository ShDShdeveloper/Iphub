import SymbolTwo from '../../../../Images/SymbolTwo.svg'
import SymbolOne from '../../../../Images/SymbolOne.svg'
import Arrow from '../../../../Images/Arrow 8.svg'
import LogoOne from '../../../../Images/main 1.svg'
import backLogo from '../../../../Images/backLogo.svg'
import logoTwo from '../../../../Images/logoTwo.svg'
import Image1 from '../../../../Images/image 79 (Traced).svg'
import Image2 from '../../../../Images/image 80 (Traced).svg'
import Image3 from '../../../../Images/image 82 (Traced).svg'
import Image4 from '../../../../Images/image 81 (Traced).svg'
import Image5 from '../../../../Images/image 83 (Traced).svg'
import Image6 from '../../../../Images/image 84 (Traced).svg'
import Image7 from '../../../../Images/Vector (9).svg'
import './SectionOne.scss'
function SectionOne(){
    const info = [
        {
            title: ">300",
            text: "Представления интересов в спорах по IP правам в год"
        },
        {
            title: ">2500",
            text: "Оказаний юридической  помощи компаниям в год"
        },
        {
            title: "1150",
            text: "Завершённых дел по регистрации товарных знаков"
        },
        {
            title: "61",
            text: "Совокупный опыт экспертов"
        },
        {
            title: "99%",
            text: "Успех получения патентов"
        },{
            title: "98%",
            text: "Успех регистрации товарных знаков"
        }
    ]
    const images = [Image1, Image2, Image3, Image4, Image5, Image6]
    return <section className={"sectionOneWrapper"}>
        <div className={"d-flex justify-content-around mb-5"}>
            <div className="boxOne my-auto">
                    <p className={"middleTextStyle my-0"}>ВАШ IP ПАРТНЕР</p>
                <p className={"textStyleOne mb-0"}><img alt={"symbol"} className={"mb-3"} src={SymbolTwo} /> <b>Интеллектуальная <i>собственность</i></b> <img
                   className={"mb-3"} alt={"symbol"} src={SymbolOne}/></p>
                <p className={"middleTextStyle"}>Индивидуальные правовые решения для защиты и охраны ваших нематериальных активов в России и за рубежом</p>
                <div className={"d-block d-sm-flex"}>
                    <div className="miniBoxOne mb-3">
                        Получить индивидуальную консультацию
                    </div>
                    <div className="miniBoxTwo middleTextStyle">
                        Все услуги <img src={Arrow} className={"arrowStyle"} alt=""/>
                    </div>
                </div>
            </div>
            <div className="boxTwo d-none d-sm-none d-md-none d-lg-block my-auto">
                <img src={Image7} className={"back"}/>
                <img src={LogoOne} className={"logoOneStyle"} alt=""/>
            </div>
        </div>
        <div className={"d-flex mt-5"}>
            <div className={"position-relative me-5 d-none d-sm-none d-md-none d-lg-block"}>
                <img className={"backLogoStyle"} src={backLogo}/>
                <img className={"logoTwoStyle"} src={logoTwo} alt=""/>
            </div>
            <div>
                <div  className={"mb-5"}>
                    <h4 className={"text-white"}>Многолетний опыт</h4>
                    <p className={"middleTextStyle"}>Наша компания была создана в 2019 году специалистами, имеющими опыт работы в сфере интеллектуальной собственности более 20 лет</p>
                    <div className={"row"}>
                        {
                            info.map((item, index)=> (
                                <div key={index} className={"col-10 col-sm-5 col-md-5 col-lg-10 col-xl-5 infoItemBox"}>
                                    <div className={"childBoxItem h-100 w-100"}>
                                        <h4 className={"text-white fw-bold"}>{item.title}</h4>
                                        <p className={"middleTextStyle"}>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h4 className={"text-white"}>Подтвержденный практикой</h4>
                    <p className={"middleTextStyle"}>Мы и наши клиенты гордимся опытом, который подтверждается нашими результатами от закрепления прав заявителей до успешной защиты интересов</p>
                    <div className={"row"}>
                        {
                            images.map((item, index)=> (
                                    <div key={index} className={"col-10 col-sm-5 col-md-5 imageBox"}>
                                        <img src={item}/>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default SectionOne