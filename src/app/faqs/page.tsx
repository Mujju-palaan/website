'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.css'
import { useState } from 'react';

export default function BasicAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className={styles.container}>
      <h1 style={{color:'rgba(84, 92, 242, 0.8)', padding:'2rem'}}> FAQ's</h1>
      <Accordion className={styles.main} 
        expanded={expanded === 'panel1'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>1. Question 1 ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel2'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>2. Question 2 ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel3'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>3. Question 3 ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel4'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel4')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold" , color:'rgba(24, 24, 24, 0.8)'}}>4. Question 4 ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel5'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel5')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>5. Question 5 ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel6'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel6')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>6. Question 6 ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}