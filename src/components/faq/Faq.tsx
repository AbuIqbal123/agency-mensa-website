import React from 'react';
import FaqQuestions from './FAQs'; // Import FaqQuestions correctly
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.css';

const Faq: React.FC = () => {

  return (
    <section id="faq">
    <div className="faq-container">
      <h2>{FaqQuestions.title}</h2>
      {FaqQuestions.rows.map((faq: any, index: any) => (
        <Accordion key={index} className="faq">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </section>
  );
};

export default Faq;
