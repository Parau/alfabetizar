import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; 
import CardSwiper from '@site/src/components/slides';

// You might want to add PropTypes for better type checking
const CueCards = ({ cardsData, title = "Cartões de apoio.", open = false }) => {
  return (
    <details open={open}>
      <summary>
         <i>{title}</i> <FontAwesomeIcon icon={faPersonChalkboard} /><br /><br />
      </summary>
      <CardSwiper cards={cardsData} />
    </details>
  );
};

CueCards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  open: PropTypes.bool, // Adicione esta linha
};

export default CueCards;