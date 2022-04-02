import './SectionSix.scss'
import Image1 from '../../../../Images/Vector (8).svg'
import Image2 from '../../../../Images/6 2.svg'

function SectionSix(){
    return <section className={"sectionSixWrapper"}>
       <div className="row">
           <div className="col-md-6">
               <h3 className={"text-white fw-normal"}>Оставьте заявку на консультацию и мы вам поможем! </h3>
               <p className={"middleTextStyle"}>У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности</p>
               <div className="pillStyle">
                    <p>Получить индивидуальную консультацию</p>
               </div>
           </div>
           <div className="col-md-5 text-end position-relative d-none d-sm-none d-md-block">
               <img src={Image1}/>
               <img className={"position-absolute imagePlace"} src={Image2}/>
           </div>
       </div>
    </section>
}
export default SectionSix