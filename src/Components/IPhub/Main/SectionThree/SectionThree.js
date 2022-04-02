import './SectionThree.scss'
import {useState} from "react";
import Arrow from '../../../../Images/Arrow 8.svg'
import Image1 from '../../../../Images/Vector (6).svg'
import Image2 from '../../../../Images/Vector (7).svg'

function SectionThree(){
    const [data] = useState([
           "Регистрацию полезной модели",
            "Регистрацию промышленного образца",
            "Регистрацию прав на использование полезной модели, промобразца, изобретенния",
            "Подготовка заявки на выдачу патента",
            "Регистрацию изобретения",
            "Подготовка заявки на передачу прав патента"
        ])

    return <section className={"SectionThreeWrapper text-white"}>
        <h3 className={"text-white"}>Не знаете, что вам нужно? </h3>
        <p className={"middleTextStyle text-light"}>Пройдите квиз, чтобы выбрать оптимальное решение для Вашей задачи</p>
        <div className={"pageBox"}>
            <div className={"d-flex justify-content-between mb-4"}>
                <h4>С какой целью вы обращаетесь?</h4>
                <h4><span className={"text-danger"}>2</span>/8</h4>
            </div>
            <div className="row text-center m-auto">
                {
                    data.map((item, index)=> <div key={index} className={"pageItem col-10 col-sm-10 col-md-5 pt-1"}>
                        <p className={"middleTextStyle"}>{item}</p>
                    </div>)
                }
                <div className="d-flex flex-wrap justify-content-between mt-4 text-center">
                        <div className={"prevStyle my-auto"}><img src={Arrow}/>Назад</div>
                        <div className={"nextStyle my-auto"}>Далее<img src={Arrow}/></div>
                </div>
            </div>
        </div>
        <p>Бонусы после прохождения</p>
        <div className="d-flex flex-wrap">
            <div className={"row box"}>
                <div className="col-4 my-auto">
                    <img className={"w-50"} src={Image1}/>
                </div>
                <div className="col-8 middleTextStyle my-auto">
                    Название бонуса в одну или две строки
                </div>
            </div>
            <div className={"row box"}>
                <div className="col-4 my-auto">
                    <img className={"w-75"} src={Image2}/>
                </div>
                <div className="col-8 middleTextStyle my-auto">
                    Название бонуса в одну или две строки
                </div>
            </div>
        </div>
    </section>
}
export default SectionThree