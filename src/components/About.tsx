'use client'

import React, { useEffect } from 'react'
import styles from './About.module.css'
import getChartPosition from '@/utils/actions/getChartPosition'

interface AboutProps {
  data: any
}

const About: React.FC<AboutProps> = ({ data }) => {
  useEffect(() => {
    console.log(data)

    const angleInChart = getChartPosition(data.eclipticLongitude)

    console.log(
      `The planet should be placed at ${angleInChart.toFixed(
        2,
      )}° on the natal chart.`,
    )
  }, [data])

  return <div className={styles.container}></div>
}

export default About
