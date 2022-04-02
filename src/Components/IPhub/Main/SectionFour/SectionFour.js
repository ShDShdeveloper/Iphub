import './SectionFour.scss'
import Arrow from '../../../../Images/Arrow 8.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useState} from "react";
import Image1 from '../../../../Images/image 85 (Traced).svg'
import Image2 from '../../../../Images/image 86 (Traced).svg'
import Image3 from '../../../../Images/image 87 (Traced).svg'
import GrowIcon from '../../../../Images/Shape.svg'

function SectionFour(){
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2.5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [state] = useState([
        {
            image: Image1,
            title: "CIRKLE — производитель косметической продукции",
            text: "Как в результате защиты  мы зарегистрировали бренд российской косметики при наличии оснований для отказа"
        },
        {
            image: Image2,
            title: "Camera IQ — производитель систем машинного зрения",
            text: "Защита прав после ребрендинга. Как провести успешную регистрацию"
        },
        {
            image: Image3,
            title: "Hands — производитель косметической продукции",
            text: "Как в результате защиты  мы зарегистрировали бренд российской косметики при наличии оснований для отказа"
        }
    ])
    return <section className={"SectionFourWrapper"}>
        <h3>Реализованные кейсы</h3>
        <div className="row">
            <p className={"col-10 col-sm-10 col-md-6 middleTextStyle"}>Наши реальные истории о том, как мы помогали
                своим клиентам регистрировать товарные знаки и оформлять
                права на объекты интеллектуальной собственности</p>
            <div className={"col-10 col-sm-10 col-md-6"}>
                <div className={"vseButton"}>Все кейсы <img src={Arrow}/></div>
            </div>
        </div>
        <Carousel responsive={responsive}>
            {
               state.map((item, index)=> <div className={"carouselItemBox"}>
                   <div className={"carouselChildBoxOne"}>
                       <img src={item.image}/>
                   </div>
                   <div className={"carouselChildBoxTwo"}>
                        <div className={"text-end"}><img src={GrowIcon} alt="growIcon"/></div>
                       <div className={"textMargin"}>
                           <p className={"text-white"}>{item.title}</p>
                           <p className={"middleTextStyle text-secondary"}>{item.text}</p>
                       </div>
                   </div>
               </div>)
            }
        </Carousel>
    </section>
}

export default SectionFour