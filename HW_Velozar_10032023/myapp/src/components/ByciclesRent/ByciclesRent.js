import s from './ByciclesRent.module.css'

function ByciclesRent() {
  return (
    <div  className={s.bycicles_rent_box}>
        <div className={s.bycicles_rent_box_main}>
            <div className={s.bycicles_rent_img}></div>
            <div className={s.bycicles_rent_text}>
                <p>Прокат велосипедов</p>
                <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </div>
    </div>     
  )
}


export default ByciclesRent