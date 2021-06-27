import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  landingRow: {
    display: 'flex',
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      flexDirection: 'column',
    },
  },
  landingRowImageContainer: {
    flexGrow: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      order: 1,
      padding: 0,
    },
  },
  landingRowImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: 280,
      backgroundSize: 'cover',
    },
  },
  landingRowDescription: {
    flexGrow: 1,
    width: '100%',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      order: 2,
      padding: 0,
    },
  },
  skillsImage: {
    backgroundImage: 'url(skills-illustration-amber.png)',
  },
  aboutmeImage: {
    backgroundImage: 'url(aboutme-illustration.png)',
  },
  skillLabel: {
    marginRight: 10,
    marginLeft: 20,
  },
}));

function Skills() {
  const classes = useStyles();
  const skills = [
    { label: 'ES5/ES6/ES7+', value: 5 },
    { label: 'HTML/CSS/SASS', value: 5 },
    { label: 'React/Redux', value: 5 },
    { label: 'Angular', value: 4 },
    { label: 'Typescript', value: 4 },
    { label: 'Webpack', value: 5 },
    { label: 'NodeJS', value: 4 },
    { label: 'ExpressJS', value: 4 },
    { label: 'MongoDB', value: 4 },
    { label: 'Firebase', value: 4 },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.landingRow}>
        <div className={classes.landingRowImageContainer}>
          <div className={clsx(classes.landingRowImage, { [classes.aboutmeImage]: true })} />
        </div>
        <div className={classes.landingRowDescription}>
          <Box padding={2}>
            <Typography variant="h2">About me</Typography>
            <Typography>
              8+ years of Javascript development experience.
              Really motivated to continuously gain knowledge regarding JS ecosystem.
              Big fan of clean code and functional programming principles.
            </Typography>
          </Box>
        </div>
      </div>
      <div className={classes.landingRow}>
        <div className={classes.landingRowDescription}>
          <Typography variant="h2">Skills</Typography>
          {skills.map((skill) => (
            <Box component="div" display="flex" justifyContent="center">
              <Typography className={classes.skillLabel}>{skill.label}</Typography>
              <Rating value={skill.value} readOnly />
            </Box>
          ))}
        </div>
        <div className={classes.landingRowImageContainer}>
          <div className={clsx(classes.landingRowImage, { [classes.skillsImage]: true })} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
