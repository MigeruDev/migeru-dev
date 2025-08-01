"use client"
import { useEffect, useRef } from "react"

// A simple Perlin noise generator.
class PerlinNoise {
  private p: number[] = []
  constructor() {
    const pTable = new Uint8Array(256)
    for (let i = 0; i < 256; i++) pTable[i] = i
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[pTable[i], pTable[j]] = [pTable[j], pTable[i]]
    }
    this.p = Array.from(pTable).concat(Array.from(pTable))
  }
  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }
  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a)
  }
  private grad(hash: number, x: number, y: number): number {
    const h = hash & 15
    const u = h < 8 ? x : y
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
  }
  public noise(x: number, y: number, z: number): number {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255
    const Z = Math.floor(z) & 255
    x -= Math.floor(x)
    y -= Math.floor(y)
    z -= Math.floor(z)
    const u = this.fade(x)
    const v = this.fade(y)
    const w = this.fade(z)
    const A = this.p[X] + Y,
      AA = this.p[A] + Z,
      AB = this.p[A + 1] + Z
    const B = this.p[X + 1] + Y,
      BA = this.p[B] + Z,
      BB = this.p[B + 1] + Z
    const res = this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(u, this.grad(this.p[AA], x, y), this.grad(this.p[BA], x - 1, y)),
        this.lerp(
          u,
          this.grad(this.p[AB], x, y - 1),
          this.grad(this.p[BB], x - 1, y - 1),
        ),
      ),
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.p[AA + 1], x, y),
          this.grad(this.p[BA + 1], x - 1, y),
        ),
        this.lerp(
          u,
          this.grad(this.p[AB + 1], x, y - 1),
          this.grad(this.p[BB + 1], x - 1, y - 1),
        ),
      ),
    )
    return (res + 1) / 2
  }
}

interface DynamicBackgroundProps {
  className?: string
}

export default function DynamicBackground({
  className = "",
}: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const perlinRef = useRef(new PerlinNoise())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gridSize = 12
    const noiseScale = 0.05
    const timeScale = 0.0001
    const octaves = 4
    const persistence = 0.5
    const palette = [" ", "·", "∶", "░", "▒", "▓"]

    let width: number, height: number, cols: number, rows: number

    function resize() {
      if (!canvas) return
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width
      canvas.height = height
      cols = Math.floor(width / gridSize)
      rows = Math.floor(height / gridSize)
    }
    resize()
    window.addEventListener("resize", resize)

    function draw(timestamp: number) {
      if (!ctx) return
      
      ctx.clearRect(0, 0, width, height)
      
      // Removed the inefficient JS-based overlay
      
      ctx.fillStyle = "rgba(34,197,94,0.4)"
      ctx.font = `${gridSize}px monospace`
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"
      
      const t = timestamp * timeScale
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let h = 0,
            amp = 1,
            freq = noiseScale
          for (let i = 0; i < octaves; i++) {
            h += perlinRef.current.noise(col * freq, row * freq, t) * amp
            amp *= persistence
            freq *= 2
          }
          const totalAmp = (1 - persistence ** octaves) / (1 - persistence)
          h /= totalAmp
          const idx = Math.min(
            Math.floor(h * palette.length),
            palette.length - 1,
          )
          const ch = palette[idx]
          ctx.fillText(
            ch,
            col * gridSize + gridSize / 2,
            row * gridSize + gridSize / 2,
          )
        }
      }
      animationRef.current = requestAnimationFrame(draw)
    }
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current != null)
        cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, #0a0f0a 0%, #0d1a0d 30%, #0f1e0f 70%, #0a0f0a 100%)",
        }}
      />
      {/* Lighter blur and a more vibrant green tint */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  )
}