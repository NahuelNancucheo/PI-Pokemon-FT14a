import './styles.css';
import Card from '../Card/Card';

function Cards({show}) {

    return (
        <div className='page'>
            <ul className='list'>
            {show && show.map((p => (
                <li key={p.id}>
                    <Card
                        name={p.name}
                        img={p.img}
                        id={p.id}
                        types={p.types}
                    />
                </li>
            )))}
            </ul>
        </div>
    )
};

export default Cards;