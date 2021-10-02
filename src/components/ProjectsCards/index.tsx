import { Container } from './styles';

interface ProjectsCardsProps {
  image?: string;
  title?: string;
  href?: string;
  tecnologies?: string
}

const ProjectsCards = ({ image, title, href, tecnologies }: ProjectsCardsProps) => {
  return(
    <Container 
      className='card'
      href={href} 
      target='_blank'
    >
      <div className='content'>
        <img
          src={image}
          alt={`Imagem do ${title}`}
          loading='lazy'
        />
        <h1>{title}</h1>
        <h4>{tecnologies}</h4>
      </div>
    </Container>
  );
}

export default ProjectsCards;