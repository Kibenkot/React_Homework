import s from './PropositionItem.module.css'


function PropositionItem({text, backgroundColor}) {
  return (
    <div className={s.proposition_item_box} style={{backgroundColor: backgroundColor}}>
        <div className={s.line}></div>
        <p>{text}</p>
    </div>
  )
}

export default PropositionItem