import React from 'react';

const QuoteCard = ({ quote, character, image }) => (
    <figure className="QuoteCard">
        <img src={quote.image} alt={quote.character} />
        <figcaption>
            <blockquote>{quote.quote}</blockquote>
            <cite>{quote.character}</cite>
        </figcaption>
    </figure>
);

export default QuoteCard;