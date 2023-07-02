import React from 'react'
import classes from './OurFeatures.module.css';
import Card from './Card';
import { Link } from 'react-router-dom'
 
const ResumeOption = () => {
  return (
    <div className={`${classes.bg}`}>
            <div className={`${classes.heading}`}>CREATE RESUME</div>
            {/* <div className={`${classes.subheading}`}>Create Resume</div> */}
            <div className={`${classes.cards}`}>
                <Card  name='Single Column Resume' link='/resume/details ' type='2' />
                <Card name='Multi column Resume' link='/resume/details' type='1'/>
            </div>
        </div>
  )
}

export default ResumeOption;