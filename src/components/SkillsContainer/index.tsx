import React, { useEffect } from 'react';
import { HeadingCategories } from '../../styles/commomStyles';
import SkillsCards from '../SkillsCards';

import sr from '../../Services/scrollReveral';

import { Container, SkillContainer } from './styles';

const Skills: React.FC = () => {
  const config = {
    origin: 'left',
    distance: '400px',
    delay: 50,
    duration: 2000,
    easing: 'ease-in-out',
    reset: true,
  }
  
  useEffect(() => {            
    const animation = () => {
      const skills = document.querySelectorAll('.skill') as NodeListOf<HTMLElement>;
      sr.reveal(skills[0], config)
      sr.reveal(skills[1], {...config, delay: 250})
      sr.reveal(skills[2], {...config, delay: 450})
      sr.reveal(skills[3], {...config, origin: 'right'})
      sr.reveal(skills[4], {...config, delay: 250, origin: 'right'})
      sr.reveal(skills[5], {...config, delay: 450, origin: 'right'})
    };
    animation();
  }, []);
  
  return(
    <Container>
      <HeadingCategories>
        Skills
      </HeadingCategories>
      <SkillContainer>
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-css3-alt"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-js-square"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-react"></i>}
        />
        <SkillsCards 
          icon={<svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M135.117 56.3477L134.492 59.606C133.525 65.781 133.875 67.5477 136.525 69.8393L139.083 71.956L136.433 83.7727C134.85 90.8227 132.908 96.731 131.675 98.6727C130.617 100.348 129.383 102.814 129.117 104.139C128.675 105.723 127.175 107.314 124.883 108.723C122.858 109.873 118.883 112.956 116.067 115.431C113.817 117.456 112.267 118.698 111.425 119.231L108.675 121.406C107.968 122.455 107.436 123.611 107.1 124.831C106.908 125.723 107.017 126.314 107.3 126.748C107.575 127.164 108.05 127.456 108.7 127.639C109.469 127.82 110.261 127.884 111.05 127.831C112.834 127.709 114.6 127.396 116.317 126.898C116.9 126.739 117.358 126.589 117.758 126.456C118.375 125.698 119.8 124.264 122.325 121.773C129.025 115.164 131.583 111.548 128.942 112.523C127.967 112.873 128.408 111.989 130.083 110.223C133.617 106.781 135.642 101.581 139.875 85.2727C143.225 72.3977 143.225 72.2143 145.692 72.2143C146.85 72.2143 150.125 72.4143 150.125 72.4143V56.3477H142.608H135.117ZM167.108 82.7227C166.575 82.7227 165.692 83.5227 165.167 84.406C164.2 85.9893 165.342 86.956 179.892 96.0393C188.533 101.514 195.5 106.181 195.325 106.539C195.15 106.798 188.092 111.389 179.633 116.681C164.283 126.198 164.2 126.289 165.608 128.231C167.375 130.523 165.608 131.314 185.533 118.881L200 109.623V102.656L183.858 92.6893C175.133 87.2227 167.55 82.8143 167.108 82.7227ZM33.0667 83.6977C32.625 83.6977 25.0417 88.1977 16.3167 93.5727L0 103.539V110.506L16.225 120.648C25.225 126.198 32.8083 130.789 33.1583 130.789C33.5083 130.789 34.2167 129.989 34.925 129.023C35.9833 127.348 35.0917 126.639 20.1917 117.206C6 108.298 4.5 107.064 5.91667 106.098C6.8 105.481 13.5 101.331 20.7333 96.8393C37.225 86.6977 36.3417 87.3977 35.0167 85.281C34.4917 84.406 33.6 83.6143 33.075 83.6977H33.0667ZM105.433 83.8893C103 83.8727 97.7667 87.581 82.1 100.373C81.425 101.981 81.3667 103.089 81.675 103.806C81.875 104.298 82.2417 104.639 82.75 104.889C83.25 105.139 83.9 105.289 84.6167 105.348C86.0417 105.473 87.725 105.248 89.0833 104.981L90 104.773C90.3138 104.352 90.7258 104.014 91.2 103.789C92.1667 103.256 96.225 99.556 100.283 95.5893C107.425 88.356 109.1 85.0893 106.192 84.031C105.953 83.9361 105.698 83.888 105.442 83.8893H105.433ZM123.733 88.9143C121.592 88.9727 117.733 91.456 111.125 96.731C107.808 99.4227 105.708 100.873 104.583 101.173L100.217 104.623C98.575 107.623 98.3333 109.481 98.7667 110.506C98.8751 110.759 99.0326 110.988 99.23 111.179C99.4273 111.371 99.6607 111.522 99.9167 111.623C100.553 111.874 101.232 112.001 101.917 111.998C103.552 111.98 105.178 111.742 106.75 111.289C107.569 111.069 108.378 110.814 109.175 110.523L109.417 110.423L109.858 110.189C110.692 109.114 112.608 107.089 115.008 104.756C122.592 97.4393 126.467 92.2393 125.675 90.2977C125.317 89.356 124.7 88.881 123.733 88.9143V88.9143ZM103.533 97.9143C102.917 97.981 101.533 99.0477 99.0417 101.231C95.4417 104.414 91.5167 106.248 90.1583 105.431C89.8427 105.502 89.526 105.569 89.2083 105.631C87.825 105.906 86.1 106.131 84.5583 106.006C83.8319 105.962 83.12 105.784 82.4583 105.481C81.8343 105.196 81.3362 104.692 81.0583 104.064C80.75 103.314 80.75 102.381 81.1 101.189L75.6833 105.639L63.425 115.781V132.223L103.592 100.581C103.584 100.235 103.629 99.8889 103.725 99.556C104.033 98.4393 104.017 97.8727 103.533 97.9227V97.9143ZM120.817 103.239C120.208 103.239 119.192 104.098 117.567 105.823C115.358 108.181 111.883 110.464 110.042 110.931L109.758 111.081C109.456 111.206 109.15 111.323 108.842 111.431C108.342 111.598 107.692 111.798 106.942 111.998C105.442 112.406 103.575 112.781 101.908 112.739C101.123 112.738 100.344 112.586 99.6167 112.289C98.9307 112.007 98.3811 111.469 98.0833 110.789C97.6 109.631 97.7917 108.006 98.85 105.698L63.4167 133.606V143.648H78.9833L112 117.714C112.858 116.764 114.15 115.464 115.892 113.839C120.558 109.514 121.617 108.023 121.617 105.814C121.617 104.098 121.425 103.231 120.817 103.231V103.239ZM128.675 119.489L125.85 122.306C124.267 123.806 121.442 125.656 119.508 126.448L119.125 126.614L119.1 126.656L119.017 126.739C118.942 126.798 118.908 126.806 118.85 126.831C118.078 127.123 117.294 127.382 116.5 127.606C114.734 128.12 112.918 128.441 111.083 128.564C110.216 128.62 109.345 128.544 108.5 128.339C107.767 128.178 107.12 127.75 106.683 127.139C106.283 126.523 106.167 125.698 106.392 124.681C106.571 123.957 106.836 123.258 107.183 122.598L80.5417 143.648H115.975L120.208 138.798C126.025 132.014 128.675 127.164 128.675 123.014V119.489Z" fill="#22355D"/>
          <g clip-path="url(#clip0)">
          <path d="M135.117 56.3477L134.492 59.606C133.525 65.781 133.875 67.5477 136.525 69.8393L139.083 71.956L136.433 83.7727C134.85 90.8227 132.908 96.731 131.675 98.6727C130.617 100.348 129.383 102.814 129.117 104.139C128.675 105.723 127.175 107.314 124.883 108.723C122.858 109.873 118.883 112.956 116.067 115.431C113.817 117.456 112.267 118.698 111.425 119.231L108.675 121.406C107.968 122.455 107.436 123.611 107.1 124.831C106.908 125.723 107.017 126.314 107.3 126.748C107.575 127.164 108.05 127.456 108.7 127.639C109.469 127.82 110.261 127.884 111.05 127.831C112.834 127.709 114.6 127.396 116.317 126.898C116.9 126.739 117.358 126.589 117.758 126.456C118.375 125.698 119.8 124.264 122.325 121.773C129.025 115.164 131.583 111.548 128.942 112.523C127.967 112.873 128.408 111.989 130.083 110.223C133.617 106.781 135.642 101.581 139.875 85.2727C143.225 72.3977 143.225 72.2143 145.692 72.2143C146.85 72.2143 150.125 72.4143 150.125 72.4143V56.3477H142.608H135.117ZM167.108 82.7227C166.575 82.7227 165.692 83.5227 165.167 84.406C164.2 85.9893 165.342 86.956 179.892 96.0393C188.533 101.514 195.5 106.181 195.325 106.539C195.15 106.798 188.092 111.389 179.633 116.681C164.283 126.198 164.2 126.289 165.608 128.231C167.375 130.523 165.608 131.314 185.533 118.881L200 109.623V102.656L183.858 92.6893C175.133 87.2227 167.55 82.8143 167.108 82.7227ZM33.0667 83.6977C32.625 83.6977 25.0417 88.1977 16.3167 93.5727L0 103.539V110.506L16.225 120.648C25.225 126.198 32.8083 130.789 33.1583 130.789C33.5083 130.789 34.2167 129.989 34.925 129.023C35.9833 127.348 35.0917 126.639 20.1917 117.206C6 108.298 4.5 107.064 5.91667 106.098C6.8 105.481 13.5 101.331 20.7333 96.8393C37.225 86.6977 36.3417 87.3977 35.0167 85.281C34.4917 84.406 33.6 83.6143 33.075 83.6977H33.0667ZM105.433 83.8893C103 83.8727 97.7667 87.581 82.1 100.373C81.425 101.981 81.3667 103.089 81.675 103.806C81.875 104.298 82.2417 104.639 82.75 104.889C83.25 105.139 83.9 105.289 84.6167 105.348C86.0417 105.473 87.725 105.248 89.0833 104.981L90 104.773C90.3138 104.352 90.7258 104.014 91.2 103.789C92.1667 103.256 96.225 99.556 100.283 95.5893C107.425 88.356 109.1 85.0893 106.192 84.031C105.953 83.9361 105.698 83.888 105.442 83.8893H105.433ZM123.733 88.9143C121.592 88.9727 117.733 91.456 111.125 96.731C107.808 99.4227 105.708 100.873 104.583 101.173L100.217 104.623C98.575 107.623 98.3333 109.481 98.7667 110.506C98.8751 110.759 99.0326 110.988 99.23 111.179C99.4273 111.371 99.6607 111.522 99.9167 111.623C100.553 111.874 101.232 112.001 101.917 111.998C103.552 111.98 105.178 111.742 106.75 111.289C107.569 111.069 108.378 110.814 109.175 110.523L109.417 110.423L109.858 110.189C110.692 109.114 112.608 107.089 115.008 104.756C122.592 97.4393 126.467 92.2393 125.675 90.2977C125.317 89.356 124.7 88.881 123.733 88.9143V88.9143ZM103.533 97.9143C102.917 97.981 101.533 99.0477 99.0417 101.231C95.4417 104.414 91.5167 106.248 90.1583 105.431C89.8427 105.502 89.526 105.569 89.2083 105.631C87.825 105.906 86.1 106.131 84.5583 106.006C83.8319 105.962 83.12 105.784 82.4583 105.481C81.8343 105.196 81.3362 104.692 81.0583 104.064C80.75 103.314 80.75 102.381 81.1 101.189L75.6833 105.639L63.425 115.781V132.223L103.592 100.581C103.584 100.235 103.629 99.8889 103.725 99.556C104.033 98.4393 104.017 97.8727 103.533 97.9227V97.9143ZM120.817 103.239C120.208 103.239 119.192 104.098 117.567 105.823C115.358 108.181 111.883 110.464 110.042 110.931L109.758 111.081C109.456 111.206 109.15 111.323 108.842 111.431C108.342 111.598 107.692 111.798 106.942 111.998C105.442 112.406 103.575 112.781 101.908 112.739C101.123 112.738 100.344 112.586 99.6167 112.289C98.9307 112.007 98.3811 111.469 98.0833 110.789C97.6 109.631 97.7917 108.006 98.85 105.698L63.4167 133.606V143.648H78.9833L112 117.714C112.858 116.764 114.15 115.464 115.892 113.839C120.558 109.514 121.617 108.023 121.617 105.814C121.617 104.098 121.425 103.231 120.817 103.231V103.239ZM128.675 119.489L125.85 122.306C124.267 123.806 121.442 125.656 119.508 126.448L119.125 126.614L119.1 126.656L119.017 126.739C118.942 126.798 118.908 126.806 118.85 126.831C118.078 127.123 117.294 127.382 116.5 127.606C114.734 128.12 112.918 128.441 111.083 128.564C110.216 128.62 109.345 128.544 108.5 128.339C107.767 128.178 107.12 127.75 106.683 127.139C106.283 126.523 106.167 125.698 106.392 124.681C106.571 123.957 106.836 123.258 107.183 122.598L80.5417 143.648H115.975L120.208 138.798C126.025 132.014 128.675 127.164 128.675 123.014V119.489Z" fill="#FEFBFB"/>
          </g>
          <g clip-path="url(#clip1)">
          <path d="M135.117 56.3477L134.492 59.606C133.525 65.781 133.875 67.5477 136.525 69.8393L139.083 71.956L136.433 83.7727C134.85 90.8227 132.908 96.731 131.675 98.6727C130.617 100.348 129.383 102.814 129.117 104.139C128.675 105.723 127.175 107.314 124.883 108.723C122.858 109.873 118.883 112.956 116.067 115.431C113.817 117.456 112.267 118.698 111.425 119.231L108.675 121.406C107.968 122.455 107.436 123.611 107.1 124.831C106.908 125.723 107.017 126.314 107.3 126.748C107.575 127.164 108.05 127.456 108.7 127.639C109.469 127.82 110.261 127.884 111.05 127.831C112.834 127.709 114.6 127.396 116.317 126.898C116.9 126.739 117.358 126.589 117.758 126.456C118.375 125.698 119.8 124.264 122.325 121.773C129.025 115.164 131.583 111.548 128.942 112.523C127.967 112.873 128.408 111.989 130.083 110.223C133.617 106.781 135.642 101.581 139.875 85.2727C143.225 72.3977 143.225 72.2143 145.692 72.2143C146.85 72.2143 150.125 72.4143 150.125 72.4143V56.3477H142.608H135.117ZM167.108 82.7227C166.575 82.7227 165.692 83.5227 165.167 84.406C164.2 85.9893 165.342 86.956 179.892 96.0393C188.533 101.514 195.5 106.181 195.325 106.539C195.15 106.798 188.092 111.389 179.633 116.681C164.283 126.198 164.2 126.289 165.608 128.231C167.375 130.523 165.608 131.314 185.533 118.881L200 109.623V102.656L183.858 92.6893C175.133 87.2227 167.55 82.8143 167.108 82.7227ZM33.0667 83.6977C32.625 83.6977 25.0417 88.1977 16.3167 93.5727L0 103.539V110.506L16.225 120.648C25.225 126.198 32.8083 130.789 33.1583 130.789C33.5083 130.789 34.2167 129.989 34.925 129.023C35.9833 127.348 35.0917 126.639 20.1917 117.206C6 108.298 4.5 107.064 5.91667 106.098C6.8 105.481 13.5 101.331 20.7333 96.8393C37.225 86.6977 36.3417 87.3977 35.0167 85.281C34.4917 84.406 33.6 83.6143 33.075 83.6977H33.0667ZM105.433 83.8893C103 83.8727 97.7667 87.581 82.1 100.373C81.425 101.981 81.3667 103.089 81.675 103.806C81.875 104.298 82.2417 104.639 82.75 104.889C83.25 105.139 83.9 105.289 84.6167 105.348C86.0417 105.473 87.725 105.248 89.0833 104.981L90 104.773C90.3138 104.352 90.7258 104.014 91.2 103.789C92.1667 103.256 96.225 99.556 100.283 95.5893C107.425 88.356 109.1 85.0893 106.192 84.031C105.953 83.9361 105.698 83.888 105.442 83.8893H105.433ZM123.733 88.9143C121.592 88.9727 117.733 91.456 111.125 96.731C107.808 99.4227 105.708 100.873 104.583 101.173L100.217 104.623C98.575 107.623 98.3333 109.481 98.7667 110.506C98.8751 110.759 99.0326 110.988 99.23 111.179C99.4273 111.371 99.6607 111.522 99.9167 111.623C100.553 111.874 101.232 112.001 101.917 111.998C103.552 111.98 105.178 111.742 106.75 111.289C107.569 111.069 108.378 110.814 109.175 110.523L109.417 110.423L109.858 110.189C110.692 109.114 112.608 107.089 115.008 104.756C122.592 97.4393 126.467 92.2393 125.675 90.2977C125.317 89.356 124.7 88.881 123.733 88.9143V88.9143ZM103.533 97.9143C102.917 97.981 101.533 99.0477 99.0417 101.231C95.4417 104.414 91.5167 106.248 90.1583 105.431C89.8427 105.502 89.526 105.569 89.2083 105.631C87.825 105.906 86.1 106.131 84.5583 106.006C83.8319 105.962 83.12 105.784 82.4583 105.481C81.8343 105.196 81.3362 104.692 81.0583 104.064C80.75 103.314 80.75 102.381 81.1 101.189L75.6833 105.639L63.425 115.781V132.223L103.592 100.581C103.584 100.235 103.629 99.8889 103.725 99.556C104.033 98.4393 104.017 97.8727 103.533 97.9227V97.9143ZM120.817 103.239C120.208 103.239 119.192 104.098 117.567 105.823C115.358 108.181 111.883 110.464 110.042 110.931L109.758 111.081C109.456 111.206 109.15 111.323 108.842 111.431C108.342 111.598 107.692 111.798 106.942 111.998C105.442 112.406 103.575 112.781 101.908 112.739C101.123 112.738 100.344 112.586 99.6167 112.289C98.9307 112.007 98.3811 111.469 98.0833 110.789C97.6 109.631 97.7917 108.006 98.85 105.698L63.4167 133.606V143.648H78.9833L112 117.714C112.858 116.764 114.15 115.464 115.892 113.839C120.558 109.514 121.617 108.023 121.617 105.814C121.617 104.098 121.425 103.231 120.817 103.231V103.239ZM128.675 119.489L125.85 122.306C124.267 123.806 121.442 125.656 119.508 126.448L119.125 126.614L119.1 126.656L119.017 126.739C118.942 126.798 118.908 126.806 118.85 126.831C118.078 127.123 117.294 127.382 116.5 127.606C114.734 128.12 112.918 128.441 111.083 128.564C110.216 128.62 109.345 128.544 108.5 128.339C107.767 128.178 107.12 127.75 106.683 127.139C106.283 126.523 106.167 125.698 106.392 124.681C106.571 123.957 106.836 123.258 107.183 122.598L80.5417 143.648H115.975L120.208 138.798C126.025 132.014 128.675 127.164 128.675 123.014V119.489Z" fill="#FEFBFB"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="40" height="200" fill="white"/>
          </clipPath>
          <clipPath id="clip1">
          <rect width="39" height="200" fill="white" transform="translate(161)"/>
          </clipPath>
          </defs>
          </svg>
          }
        />
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
      </SkillContainer>
    </Container>
  );
}

export default Skills;