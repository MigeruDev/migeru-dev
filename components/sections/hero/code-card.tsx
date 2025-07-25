import { DEVELOPER_INFO } from "@/constants/data"

export function CodeCard() {
  return (
    <div className="relative">
      <div className="backdrop-blur-md bg-black/40 border border-cyan-400 rounded-lg p-6 shadow-2xl">
        {/* Code Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="text-cyan-400 text-xs font-mono">portfolio.tsx</div>
        </div>

        {/* Code Content */}
        <div className="font-mono text-sm space-y-2 mb-6">
          <div className="text-gray-500">// Software Engineer Profile</div>
          <div className="text-white">
            <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = {"{"}
          </div>
          <div className="text-white ml-4">
            <span className="text-green-400">name</span>:{" "}
            <span className="text-yellow-300">"{DEVELOPER_INFO.name}"</span>,
          </div>
          <div className="text-white ml-4">
            <span className="text-green-400">role</span>:{" "}
            <span className="text-yellow-300">"{DEVELOPER_INFO.role}"</span>,
          </div>
          <div className="text-white ml-4">
            <span className="text-green-400">experience</span>:{" "}
            <span className="text-orange-400">{DEVELOPER_INFO.experience}</span>,
          </div>
          <div className="text-white ml-4">
            <span className="text-green-400">location</span>:{" "}
            <span className="text-yellow-300">"{DEVELOPER_INFO.location}"</span>
          </div>
          <div className="text-white">{"}"}</div>
        </div>

        {/* Avatar and Info */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-black text-xl font-bold">MM</span>
          </div>
          <div className="text-cyan-400 font-semibold">{DEVELOPER_INFO.name.toUpperCase()}</div>
          <div className="text-white/60 text-sm">{DEVELOPER_INFO.role} & Data Specialist</div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 justify-center">
          {DEVELOPER_INFO.techStack.map((tech, index) => (
            <span key={tech}>
              <span className="text-cyan-400 text-xs font-mono">{tech}</span>
              {index < DEVELOPER_INFO.techStack.length - 1 && <span className="text-white/40 ml-2">|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
