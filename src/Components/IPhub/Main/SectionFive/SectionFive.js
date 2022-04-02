import './SectionFive.scss'
import Carousel from "react-multi-carousel";
import Image1 from '../../../../Images/unsplash_v29_2mG3BNE.svg'
import Image2 from '../../../../Images/unsplash_WNoLnJo7tS8.svg'
import Image3 from '../../../../Images/unsplash_0fN7Fxv1eWA.svg'
import Image4 from '../../../../Images/unsplash_j5KAuRrYX7g.svg'
import Image5 from '../../../../Images/unsplash_v29_2mG3BNE (1).svg'
import Image6 from '../../../../Images/unsplash_v29_2mG3BNE (1).svg'
import {useState} from "react";

function SectionFive(){
    const [carouselItems] = useState([
        {
            image: Image1,
            fullName: "Раймм Лидия  Вячеславовна",
            profession: "Генеральный директор"
        },
        {
            image: Image2,
            fullName: "Золотов Геннадий  Борисович",
            profession: "Руководитель отдела патентно-юридического делопроизводства"
        },
        {
            image: Image3,
            fullName: "Осоргина Екатерина Александровна",
            profession: "Патентный поверенный РФ"
        },
        {
            image: Image4,
            fullName: "Рачеева Юлия Геннадьевна",
            profession: "Патентный поверенный РФ"
        },
        {
            image: Image5,
            fullName: "Пахоменко Алина Аликовна",
            profession: "Адвокат"
        },
        {
            image: Image6,
            fullName: "Нигодина Вероника Анатольевна",
            profession: "Маркетолог"
        },
    ])
    const [infoEmployee] = useState([
        {
            image: Image1,
            fullName: "Раймм Лидия  Вячеславовна",
            profession: "Генеральный директор IPhub",
            title: "Менторская гостинная",
            text: "Индивидуальная 30-ти минутная сессия с разбором вашего кейса.",
            date: "9-10 ноября",
            time: "18:00"
        },
        {
            image: Image2,
            fullName: "Золотов Геннадий Борисович",
            profession: "Руководитель отдела патентно-юридического делопроизводства",
            title: "WIPO SUMMER SCHOOL — 2021 RUSSIA",
            text: "Летняя школа Всемирной организации интеллектуальной собственности",
            date: "28 июня - 9 июля",
            time: "15:30"
        },
    ])
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 1700 },
            items: 5
        },
        desktopMiddle: {
            breakpoint: { max: 1700, min: 1400},
            items: 4
        },
        tabletLarge: {
            breakpoint: { max: 1400, min: 1100},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1100, min: 750 },
            items: 2.2
        },
        tabletMiddle: {
            breakpoint: { max: 750, min: 464 },
            items: 1.4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return <section className={"sectionFiveWrapper"}>
        <div className="row">
            <div className="col-md-6">
                <h3>Команда экспертов</h3>
                <p className={"middleTextStyle"}>Наша команда — эксперты в сфере IP. Мы берёмся
                    за работу и доводим дело до конца, потому что понимаем ценности вашего бизнеса</p>
            </div>
        </div>
        <Carousel responsive={responsive}>
            {
                carouselItems.map((item, index)=><div key={index} className={"card carouselItemBox"}>
                        <img src={item.image} className={"card-img"}/>
                    <div className="card-body py-2 px-1">
                        <p className={"fw-bold middleTextStyle text-dark m-0"}>{item.fullName}</p>
                        <p className={"middleTextStyle m-0"}>{item.profession}</p>
                    </div>
                </div>)
            }
        </Carousel>
        <div className={"boxInfo"}>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <h5>Мы на форумах</h5>
                </div>
                <div className=" col-12 col-sm-6 middleTextStyle fw-bold text-end">
                    <span>Прошедшие</span>
                    <span className={"ms-4"}>Будущие</span>
                </div>

            </div>
            {
                infoEmployee.map((item, index)=><div>
                    <div key={index} className={"row py-3"}>
                        <div className="col-10 col-sm-10 col-md-4  d-flex middleTextStyle my-auto">
                            <img src={item.image} className={"imageStyle my-auto"}/>
                            <div className={"my-auto"}>
                                <p className={"text-dark fw-bold my-auto"}>{item.fullName}</p>
                                <p>{item.profession}</p>
                            </div>
                        </div>
                        <div className="col-10 col-sm-10 col-md-6 col-md-6 my-auto p-3">
                            <h6>{item.title}</h6>
                            <hr/>
                            <p className={"middleTextStyle"}>{item.text}</p>
                        </div>
                        <div className="col-10 col-sm-5 col-md-1 text-center my-auto">
                            <h6 className={"my-auto"}>{item.date}</h6>
                            <p className={"middleTextStyle my-auto"}>{item.time}</p>
                        </div>
                    </div>
                    <hr className={"line"}/>
                </div>)
            }
        </div>
    </section>
}
export default SectionFive