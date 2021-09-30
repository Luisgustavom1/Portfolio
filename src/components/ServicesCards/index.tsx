import { Container } from './styles';

interface ServicesCardsProps {
  img: string,
  title: string
}

const ServicesCards = ({ img, title }: ServicesCardsProps) => {
  return(
    <Container>
      <div className='content'>
        <img 
          src={img}
          alt={`Svg da ${title}`}
        />
        <h3>
          {title}
        </h3>
      </div>
      <span className='faixa'></span>
    </Container>
  );
}

export default ServicesCards;