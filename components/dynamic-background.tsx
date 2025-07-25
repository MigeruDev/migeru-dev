"use client"

import { useEffect, useRef, useMemo } from "react"

interface DynamicBackgroundProps {
  className?: string
}

export default function DynamicBackground({ className = "" }: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef<number>(0)

  // Alan Turing ASCII art pattern (simplified for background)
  const turingPattern = useMemo(
    () => [
      "                    ████████████                    ",
      "                ████            ████                ",
      "              ██                    ██              ",
      "            ██                        ██            ",
      "          ██                            ██          ",
      "        ██                                ██        ",
      "      ██                                    ██      ",
      "    ██                                        ██    ",
      "    ██          ████        ████              ██    ",
      "  ██            ████        ████                ██  ",
      "  ██                                            ██  ",
      "██                                                ██",
      "██                                                ██",
      "██                    ██                          ██",
      "██                  ██████                        ██",
      "██                ██      ██                      ██",
      "██                ██      ██                      ██",
      "██                  ██████                        ██",
      "██                    ██                          ██",
      "██                                                ██",
      "██                                                ██",
      "  ██                                            ██  ",
      "  ██                                            ██  ",
      "    ██                                        ██    ",
      "    ██                                        ██    ",
      "      ██                                    ██      ",
      "        ██                                ██        ",
      "          ██                            ██          ",
      "            ██                        ██            ",
      "              ██                    ██              ",
      "                ████            ████                ",
      "                    ████████████                    ",
    ],
    [],
  )

  // Memoized configuration for performance
  const config = useMemo(
    () => ({
      characters: ["%", "#", "@", "&", "*", "+", "=", "~", "^", "|", ".", ":", ";", "'", '"', "`"],
      gridSize: 20,
      waveWidth: 0.85, // 85% of screen width (increased from 75%)
      wavePeriod: 12000, // 12 seconds in milliseconds
      waveAmplitude: 25,
      baseOpacity: 0.12,
      maxOpacity: 0.28,
      fontSize: 12,
      fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
      // Physics constants - ultra-minimal bounce
      gravity: 0.03, // Reduced from 0.05
      damping: 0.995, // Increased from 0.99 for almost no bounce
      springConstant: 0.02, // Reduced from 0.03 for even gentler return
      // Matrix-style column scrolling
      matrixScrollSpeed: 0.015, // Slow downward movement per column
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
    let columnOffsets: number[] = [] // Individual offset for each column

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"

      // Recalculate grid dimensions with extra rows for scrolling
      gridCols = Math.ceil(rect.width / config.gridSize) + 2
      gridRows = Math.ceil(rect.height / config.gridSize) + 6 // Extra rows for smooth scrolling

      // Initialize column offsets with random starting positions for matrix effect
      columnOffsets = Array(gridCols)
        .fill(null)
        .map(() => Math.random() * gridRows * config.gridSize)

      // Generate character grid with Turing pattern overlay
      characters = Array(gridRows)
        .fill(null)
        .map((_, row) =>
          Array(gridCols)
            .fill(null)
            .map((_, col) => {
              // Calculate center position for Turing pattern
              const centerRow = Math.floor(gridRows / 2) - Math.floor(turingPattern.length / 2)
              const centerCol = Math.floor(gridCols / 2) - Math.floor(turingPattern[0].length / 2)

              // Check if we're within Turing pattern bounds
              const patternRow = row - centerRow
              const patternCol = col - centerCol

              if (
                patternRow >= 0 &&
                patternRow < turingPattern.length &&
                patternCol >= 0 &&
                patternCol < turingPattern[0].length &&
                turingPattern[patternRow][patternCol] === "█"
              ) {
                // Use special characters for the face pattern
                const faceChars = ["█", "▓", "▒", "░", "■", "□", "▪", "▫"]
                const index = (row + col) % faceChars.length
                return faceChars[index]
              }

              // Use mathematical formula for background characters
              const prime1 = 17
              const prime2 = 23
              const prime3 = 31
              const index =
                (row * prime1 + col * prime2 + Math.floor((row + col) / 3) * prime3) % config.characters.length
              return config.characters[index]
            }),
        )

      // Initialize physics arrays
      characterVelocities = Array(gridRows)
        .fill(null)
        .map(() => Array(gridCols).fill(0))
      characterDisplacements = Array(gridRows)
        .fill(null)
        .map(() => Array(gridCols).fill(0))

      // Set font
      ctx.font = `${config.fontSize}px ${config.fontFamily}`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
    }

    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return

      const screenWidth = canvas.width / (window.devicePixelRatio || 1)
      const screenHeight = canvas.height / (window.devicePixelRatio || 1)
      const waveWidthPixels = screenWidth * config.waveWidth

      // Update column offsets for matrix effect
      for (let col = 0; col < gridCols; col++) {
        // Each column moves at slightly different speeds for more organic matrix effect
        const columnSpeed = config.matrixScrollSpeed * (0.8 + (col % 5) * 0.1)
        columnOffsets[col] += columnSpeed

        // Wrap around when column scrolls off screen
        if (columnOffsets[col] > gridRows * config.gridSize) {
          columnOffsets[col] -= gridRows * config.gridSize
        }
      }

      // Calculate wave position (left to right sweep)
      const waveProgress = (currentTime % config.wavePeriod) / config.wavePeriod
      const waveCenter = waveProgress * (screenWidth + waveWidthPixels) - waveWidthPixels / 2

      // Clear canvas with dark green gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / (window.devicePixelRatio || 1))
      gradient.addColorStop(0, "#0a0f0a")
      gradient.addColorStop(0.3, "#0d1a0d")
      gradient.addColorStop(0.7, "#0f1e0f")
      gradient.addColorStop(1, "#0a0f0a")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated characters
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          const x = col * config.gridSize
          const baseY = row * config.gridSize

          // Apply matrix-style column scrolling
          let y = baseY + columnOffsets[col]

          // Wrap characters that scroll off the bottom back to the top
          while (y > screenHeight + config.gridSize) {
            y -= gridRows * config.gridSize
          }
          while (y < -config.gridSize * 2) {
            y += gridRows * config.gridSize
          }

          // Skip characters that are way above the visible area
          if (y < -config.gridSize * 2 || y > screenHeight + config.gridSize * 2) {
            continue
          }

          // Calculate distance from wave center
          const distanceFromWave = Math.abs(x - waveCenter)
          const waveInfluence = Math.max(0, 1 - distanceFromWave / (waveWidthPixels / 2))

          // Stadium wave effect - characters "stand up" when wave passes
          let targetDisplacement = 0
          if (waveInfluence > 0) {
            // Smooth wave function
            const wavePhase = (distanceFromWave / (waveWidthPixels / 2)) * Math.PI
            targetDisplacement = -Math.sin(wavePhase) * config.waveAmplitude * waveInfluence
          }

          // Physics simulation for character movement
          const currentDisplacement = characterDisplacements[row][col]
          const velocity = characterVelocities[row][col]

          // Spring force towards target position
          const springForce = (targetDisplacement - currentDisplacement) * config.springConstant

          // Apply gravity when not in wave (very gentle)
          const gravityForce = waveInfluence > 0.1 ? 0 : config.gravity

          // Update velocity with forces and damping
          const newVelocity = (velocity + springForce + gravityForce) * config.damping
          characterVelocities[row][col] = newVelocity

          // Update displacement
          const newDisplacement = currentDisplacement + newVelocity
          characterDisplacements[row][col] = newDisplacement

          // Add very subtle random dance movement for non-wave characters
          let danceX = 0
          let danceY = 0
          if (waveInfluence < 0.1) {
            const danceTime = currentTime * 0.0003 // Even slower dance
            const dancePhase = (row * 0.1 + col * 0.15) * Math.PI
            danceX = Math.sin(danceTime * 2 + dancePhase) * 0.2 // Further reduced from 0.3
            danceY = Math.cos(danceTime * 1.5 + dancePhase) * 0.15 // Further reduced from 0.2
          }

          // Calculate final position
          const finalX = x + danceX
          const finalY = y + newDisplacement + danceY

          // Calculate opacity based on wave influence and movement
          const movementIntensity = Math.abs(newDisplacement) / config.waveAmplitude
          const danceIntensity = Math.sqrt(danceX * danceX + danceY * danceY) / 2
          const totalIntensity = Math.max(movementIntensity, danceIntensity * 0.5)
          const opacity = config.baseOpacity + totalIntensity * (config.maxOpacity - config.baseOpacity)

          // Matrix-style opacity fade based on position in column
          const columnPosition = (y % (gridRows * config.gridSize)) / (gridRows * config.gridSize)
          const matrixFade = Math.max(0.3, 1 - columnPosition * 0.7) // Fade towards bottom of column

          // Special highlighting for wave characters
          if (waveInfluence > 0.3) {
            ctx.fillStyle = `rgba(34, 197, 94, ${Math.min(opacity * matrixFade * 1.5, 0.4)})`
          } else {
            ctx.fillStyle = `rgba(34, 197, 94, ${Math.min(opacity * matrixFade, config.maxOpacity)})`
          }

          // Draw character
          if (characters[row] && characters[row][col]) {
            ctx.fillText(characters[row][col], finalX, finalY)
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    // Handle visibility change for performance
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      } else {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [config, turingPattern])

  return (
    <div className={`fixed inset-0 -z-10 ${className}`} role="presentation" aria-hidden="true">
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
