"use client"

import { useEffect, useRef, useMemo } from "react"

interface DynamicBackgroundProps {
  className?: string
}

export default function DynamicBackground({ className = "" }: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number|null>(null)

  const config = useMemo(
    () => ({
      characters: ["%", "#", "@", "&", "*", "+", "=", "~", "^", "|", ".", ":", ";", "'", '"', "`"],
      gridSize: 20,
      waveWidth: 0.85,
      wavePeriod: 12000,
      waveAmplitude: 25,
      baseOpacity: 0.12,
      maxOpacity: 0.28,
      fontSize: 12,
      fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
      gravity: 0.03,
      damping: 0.995,
      springConstant: 0.02,
      matrixScrollSpeed: 0.015,
    }),
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    let gridCols = 0
    let gridRows = 0
    let characters: string[][] = []
    let characterVelocities: number[][] = []
    let characterDisplacements: number[][] = []
    let columnOffsets: number[] = []

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      // **FIX:** Use window's inner dimensions for reliable sizing
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      gridCols = Math.ceil(width / config.gridSize) + 2
      gridRows = Math.ceil(height / config.gridSize) + 6

      columnOffsets = Array(gridCols)
        .fill(null)
        .map(() => Math.random() * gridRows * config.gridSize)

      characters = Array(gridRows)
        .fill(null)
        .map((_, row) =>
          Array(gridCols)
            .fill(null)
            .map((_, col) => {
              const prime1 = 17
              const prime2 = 23
              const prime3 = 31
              const index =
                (row * prime1 + col * prime2 + Math.floor((row + col) / 3) * prime3) % config.characters.length
              return config.characters[index]
            }),
        )

      characterVelocities = Array(gridRows)
        .fill(null)
        .map(() => Array(gridCols).fill(0))
      characterDisplacements = Array(gridRows)
        .fill(null)
        .map(() => Array(gridCols).fill(0))

      ctx.font = `${config.fontSize}px ${config.fontFamily}`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
    }

    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return
      
      // **FIX:** Use window's inner dimensions for calculations as well
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const waveWidthPixels = screenWidth * config.waveWidth

      for (let col = 0; col < gridCols; col++) {
        const columnSpeed = config.matrixScrollSpeed * (0.8 + (col % 5) * 0.1)
        columnOffsets[col] += columnSpeed
        if (columnOffsets[col] > gridRows * config.gridSize) {
          columnOffsets[col] -= gridRows * config.gridSize
        }
      }

      const waveProgress = (currentTime % config.wavePeriod) / config.wavePeriod
      const waveCenter = waveProgress * (screenWidth + waveWidthPixels) - waveWidthPixels / 2

      const gradient = ctx.createLinearGradient(0, 0, 0, screenHeight)
      gradient.addColorStop(0, "#0a0f0a")
      gradient.addColorStop(0.3, "#0d1a0d")
      gradient.addColorStop(0.7, "#0f1e0f")
      gradient.addColorStop(1, "#0a0f0a")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, screenWidth, screenHeight)

      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          const x = col * config.gridSize
          const baseY = row * config.gridSize
          let y = baseY + columnOffsets[col]

          while (y > screenHeight + config.gridSize) y -= gridRows * config.gridSize
          while (y < -config.gridSize * 2) y += gridRows * config.gridSize

          if (y < -config.gridSize * 2 || y > screenHeight + config.gridSize * 2) {
            continue
          }

          const distanceFromWave = Math.abs(x - waveCenter)
          const waveInfluence = Math.max(0, 1 - distanceFromWave / (waveWidthPixels / 2))

          let targetDisplacement = 0
          if (waveInfluence > 0) {
            const wavePhase = (distanceFromWave / (waveWidthPixels / 2)) * Math.PI
            targetDisplacement = -Math.sin(wavePhase) * config.waveAmplitude * waveInfluence
          }

          const currentDisplacement = characterDisplacements[row][col]
          const velocity = characterVelocities[row][col]
          const springForce = (targetDisplacement - currentDisplacement) * config.springConstant
          const gravityForce = waveInfluence > 0.1 ? 0 : config.gravity
          const newVelocity = (velocity + springForce + gravityForce) * config.damping
          characterVelocities[row][col] = newVelocity
          const newDisplacement = currentDisplacement + newVelocity
          characterDisplacements[row][col] = newDisplacement

          let danceX = 0
          let danceY = 0
          if (waveInfluence < 0.1) {
            const danceTime = currentTime * 0.0003
            const dancePhase = (row * 0.1 + col * 0.15) * Math.PI
            danceX = Math.sin(danceTime * 2 + dancePhase) * 0.2
            danceY = Math.cos(danceTime * 1.5 + dancePhase) * 0.15
          }

          const finalX = x + danceX
          const finalY = y + newDisplacement + danceY

          const movementIntensity = Math.abs(newDisplacement) / config.waveAmplitude
          const opacity = config.baseOpacity + movementIntensity * (config.maxOpacity - config.baseOpacity)
          const columnPosition = (y % (gridRows * config.gridSize)) / (gridRows * config.gridSize)
          const matrixFade = Math.max(0.3, 1 - columnPosition * 0.7)

          if (waveInfluence > 0.3) {
            ctx.fillStyle = `rgba(34, 197, 94, ${Math.min(opacity * matrixFade * 1.5, 0.4)})`
          } else {
            ctx.fillStyle = `rgba(34, 197, 94, ${Math.min(opacity * matrixFade, config.maxOpacity)})`
          }

          if (characters[row]?.[col]) {
            ctx.fillText(characters[row][col], finalX, finalY)
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => resizeCanvas()
    window.addEventListener("resize", handleResize)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
      } else {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [config])

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`} role="presentation" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: "linear-gradient(135deg, #0a0f0a 0%, #0d1a0d 30%, #0f1e0f 70%, #0a0f0a 100%)",
        }}
      />
    </div>
  )
}