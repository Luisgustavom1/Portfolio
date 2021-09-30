import { Container } from './styles';

interface ServicesCardsProps {
  img: string,
  title: string
}

const ServicesCards = ({ img, title }: ServicesCardsProps) => {
  return(
    <Container>
      <div>
        <img 
          src={img}
          alt={`Svg da ${title}`}
        />
        <h3>
          {title}
        </h3>
      </div>
    </Container>
  );
}

export default ServicesCards;