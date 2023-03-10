import HeaderAboutUs from '../HeaderAboutUs/HeaderAboutUs'
import HeaderNav from '../HeaderNav/HeaderNav'
import s from './Header.module.css'


 function Header() {
  return (
    <div className={s.header_box}>
        <div className={s.header_box_main}>
            <HeaderNav />
            <HeaderAboutUs />
        </div>
    </div>
  )
}

export default Header