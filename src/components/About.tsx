'use client'

import React from 'react'
import styles from './About.module.css'

interface AboutProps {
  data: any
}

const About: React.FC<AboutProps> = ({ data }) => {
  return <pre className={styles.container}>{data}</pre>
}

export default About
