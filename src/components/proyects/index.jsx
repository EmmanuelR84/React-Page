import Card from '../card';
import Banner from '../banner';
import './proyects.css';

const Proyects = () => {
  return <div className='proyects__container'>
    <div>
      <Banner title={'Proyects'} />
    </div>
    <div className='proyects__card'>
      < Card 
        img={'./img/e-commerce.jpg'}
        title={'Proyecto'}
        info={'lorem algo y algo mas para variar'}
        btn={'See proyect'}
      />

      < Card 
        img={'./img/e-commerce.jpg'}
        title={'Avogadro'}
        info={'lorem algo y algo mas para variar'}
        btn={'See proyect'}
      />
    </div>
  </div>
}

export default Proyects;