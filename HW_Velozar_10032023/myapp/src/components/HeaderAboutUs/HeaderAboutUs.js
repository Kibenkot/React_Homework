import s from './HeaderAboutUs.module.css'



function HeaderAboutUs() {
  return (
    <div>
       <div className={s.about_us}>
            <div className={s.about_us_text}>
                <h1>Веломастерская “Велозар”</h1>
                <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div className={s.about_us_din}></div>
        </div>
    </div>
  )
}


export default HeaderAboutUs