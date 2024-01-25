'use client'

import React from 'react'
import styles from './ZoomButton.module.css'

interface ZoomButtonProps {
  ratio: number
  setRatio: (p: number) => void
}

const ZoomButton: React.FC<ZoomButtonProps> = ({ ratio, setRatio }) => {
  return (
    <menu className={styles.container}>
      <button
        className={styles.button}
        onClick={() => (ratio < 600 ? setRatio(Math.ceil(ratio * 1.5)) : 600)}
      >
        +
      </button>
      <button
        className={styles.button}
        onClick={() => (ratio > 10 ? setRatio(Math.ceil(ratio * 0.5)) : 10)}
      >
        -
      </button>
    </menu>
  )
}

export default ZoomButton
