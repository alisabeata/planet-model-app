'use client'

import React, { useState } from 'react'
import styles from './Chart.module.css'
import ZoomButton from './ZoomButton'
import { getOrbitalPosition } from '@/utils/getOrbitalPosition'
import { PlanetsType } from '@/types/planets.type'

interface ChartProps {
  data: PlanetsType[]
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const [ratio, setRatio] = useState(10)

  return (
    <ul className={styles.container}>
      <ZoomButton ratio={ratio} setRatio={setRatio} />

      {data.map((planet: PlanetsType) => {
        const position = getOrbitalPosition(planet)

        return (
          <li className={styles.item} key={planet.id}>
            <div
              className={styles.orbit}
              style={{
                width: `${position.r * ratio * 2}px`,
                height: `${position.r * ratio * 2}px`,
              }}
            ></div>
            <div
              className={styles.planet}
              style={{
                transform: `translate(${position.x * ratio}px, ${
                  position.y * ratio
                }px)`,
              }}
            >
              <a
                href={`planets/${planet.name.toLowerCase()}`}
                className={styles.link}
                title={planet.name}
              >
                {planet.symbol}
              </a>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Chart
