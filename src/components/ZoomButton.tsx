'use client'

import React, { useCallback } from 'react'
import styles from './ZoomButton.module.css'

interface ZoomButtonProps {
  ratio: number
  setRatio: (p: number) => void
}

const ZoomButton: React.FC<ZoomButtonProps> = ({ ratio, setRatio }) => {
  const increase = useCallback(
    () => setRatio(Math.min(Math.ceil(ratio * 1.5), 600)),
    [ratio, setRatio],
  )
  const decrease = useCallback(
    () => setRatio(Math.max(Math.ceil(ratio * 0.5), 10)),
    [ratio, setRatio],
  )

  return (
    <menu className={styles.container}>
      <button className={styles.button} onClick={increase}>
        +
      </button>
      <button className={styles.button} onClick={decrease}>
        -
      </button>
    </menu>
  )
}

export default ZoomButton
