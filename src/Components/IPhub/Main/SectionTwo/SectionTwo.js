import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useState} from "react";
import Image1 from '../../../../Images/Vector (1).svg'
import Image2 from '../../../../Images/Vector (2).svg'
import Image3 from '../../../../Images/Vector (3).svg'
import Image4 from '../../../../Images/Vector (4).svg'
import Image5 from '../../../../Images/Vector (5).svg'
import Arrow from '../../../../Images/Arrow 8.svg'
import GrowIcon from '../../../../Images/Shape.svg'
import './SectionTwo.scss'

function SectionTwo(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1500 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1500, min: 1100 },
            items: 3.5
        },
        portret: {
            breakpoint: { max: 1100, min: 700 },
            items: 2.3
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1.2
        }
    };
    const [state] = useState({
        carouselItems: [
            {
                image: Image1,
                text: "Регистрация товарного знака в Роспатенте"
            },
            {
                image: Image2,
                title: "Изобретения и Полезные модели ",
                text: "Регистрация прав инновационные устройства, способы или технологии"
            },
            {
                image: Image3,
                text: "Промышленные образцы"
            },
            {
                image: Image4,
                text: "Программы для ЭВМ и Базы данных"
            },
            {
                image: Image5,
                text: "Представление интересов, суды"
            },
            {
                image: Image5,
                text: "Представление интересов, суды"
            },
        ]
    })
    return <section className={"SectionTwoWrapper"}>
        <div className="row mb-5">
            <div className={"col-10 col-sm-10 col-md-6 my-auto"}>
                <h3>Решения для вашего бизнеса</h3>
                <p className={"middleSize"}>У нас есть все необходимые ресурсы для решения любых ваших потребностей в сфере интеллектуальной собственности</p>
            </div>
            <div className="col-10 col-sm-10 col-md-6 my-auto">
                <div className={"miniBoxTwo fw-bold mx-auto"}>Все услуги <img className={"arrowStyle"} src={Arrow}/></div>
            </div>
        </div>
        <Carousel responsive={responsive}>
            {
                state.carouselItems.map((item, index)=>{
                    return <div className={"pointer-event carouselItem  text-center"} key={index}>
                        <img className={"icon"} src={GrowIcon}/>
                        <img src={item.image} className={"carouselImage"}/>
                        {item.title ? <p className={" middleSize mt-3 text-white"}>{item.title}</p>: ''}
                        <p className={"middleSize mt-4"}>{item.text}</p>
                    </div>
                })
            }
        </Carousel>
            </section>
}
export default SectionTwo