import PropositionItem from '../PropositionItem/PropositionItem';
import s from './Proposition.module.css'



function Proposition() {

    const content_items = [
        {
            id: 1,
            backgroundColor: '#22356F',
            text: 'Годовое ТО',
        },
        {
            id: 2,
            backgroundColor: '#0052C1',
            text: 'Выравнивание колес',
        },
        {
            id: 3,
            backgroundColor: '#76B58B',
            text: 'Настройка переключателей',
        }
    ];

  return (
    <div className={s.proposition_box}>
            <div className={s.proposition_box_main}>
                {content_items.map(el => <PropositionItem {...el} key={el.id}/>)}
            </div>
        </div>
  )
}


export default Proposition