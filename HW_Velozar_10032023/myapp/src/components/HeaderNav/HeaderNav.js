import s from './HeaderNav.module.css'
import logo from './HeaderNavImages/logo.png'

 function HeaderNav() {
  return (
    <div className={s.header_nav_box}>
    <img src={logo} alt='logo'/>
    <div className={s.menu}>
        <p>О нас</p>
        <p>Услуги</p>
        <p>Аренда</p>
    </div>
    <button className={s.btn}>Связаться</button>
</div>       
  )
}


export default HeaderNav