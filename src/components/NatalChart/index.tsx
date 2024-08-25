'use client'

import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import getChartPosition from '@/utils/actions/getChartPosition';
import { PlanetPosition } from '@/types/planets.type';

const planetSymbols: Record<string, string> = {
  Sun: '☉',
  Moon: '☽',
  Mercury: '☿',
  Venus: '♀',
  Earth: '♁',
  Mars: '♂',
  Jupiter: '♃',
  Saturn: '♄',
  Uranus: '♅',
  Neptune: '♆',
  Pluto: '♇',
};

interface NatalChartProps {
  planetData: PlanetPosition[];
}

const NatalChart: React.FC<NatalChartProps> = ({ planetData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 600;
  const height = 600;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawNatalChart(ctx, width, height);
      }
    }
  }, [planetData]);

  const drawNatalChart = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    const zodiacs = [
      { name: 'Aries', symbol: '♈︎' },
      { name: 'Taurus', symbol: '♉︎' },
      { name: 'Gemini', symbol: '♊︎' },
      { name: 'Cancer', symbol: '♋︎' },
      { name: 'Leo', symbol: '♌︎' },
      { name: 'Virgo', symbol: '♍︎' },
      { name: 'Libra', symbol: '♎︎' },
      { name: 'Scorpio', symbol: '♏︎' },
      { name: 'Sagittarius', symbol: '♐︎' },
      { name: 'Capricorn', symbol: '♑︎' },
      { name: 'Aquarius', symbol: '♒︎' },
      { name: 'Pisces', symbol: '♓︎' },
    ];

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2.5;
    const zodiacRadius = radius * 1.1;

    // Draw the circular chart
    ctx.clearRect(0, 0, width, height); // Clear the canvas
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw zodiac signs around the chart in a counterclockwise direction
    zodiacs.forEach((zodiac, index) => {
      const angle = (360 - index * 30 - 90) * (Math.PI / 180); // Counterclockwise by inverting the angle
      const x = centerX + zodiacRadius * Math.cos(angle);
      const y = centerY + zodiacRadius * Math.sin(angle);

      // Draw the zodiac symbol
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(zodiac.symbol, x, y);

      // Draw the dividing lines for each zodiac
      const lineX = centerX + radius * Math.cos(angle);
      const lineY = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(lineX, lineY);
      ctx.stroke();
    });

    // Draw planets according to their zodiac sign
    planetData.forEach((planet) => {
      const angle = getChartPosition(planet.eclipticLongitude);
      const signIndex = Math.floor(angle / 30); // Determine the zodiac sign
      const degreeWithinSign = angle % 30; // Position within the sign

      // Calculate the exact angle for the planet within its sign
      const planetAngle = 360 - (signIndex * 30 + degreeWithinSign) - 90; // Adjust to start from 9 o'clock
      const angleInRadians = planetAngle * (Math.PI / 180);

      const planetX = centerX + radius * 0.8 * Math.cos(angleInRadians); // Position closer to the center
      const planetY = centerY + radius * 0.8 * Math.sin(angleInRadians);

      // Draw the planet's name or symbol
      ctx.font = '17px Arial';
      ctx.fillText(planetSymbols[planet.name], planetX, planetY);
    });
  };

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default NatalChart;