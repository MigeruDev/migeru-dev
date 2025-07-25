import { ExternalLink, Calendar, BookOpen } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { SCIENTIFIC_PAPERS } from "@/constants/data"
import type { ScientificPaper } from "@/types"

function PaperCard({ paper }: { paper: ScientificPaper }) {
  const getJournalColor = (type: ScientificPaper["type"]) => {
    switch (type) {
      case "IEEE":
        return "from-blue-400 to-blue-300"
      case "RTE":
        return "from-green-400 to-green-300"
      default:
        return "from-purple-400 to-purple-300"
    }
  }

  const getJournalBadgeColor = (type: ScientificPaper["type"]) => {
    switch (type) {
      case "IEEE":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      case "RTE":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      default:
        return "bg-purple-500/20 text-purple-300 border-purple-400/30"
    }
  }

  return (
    <GlassCard className="h-full">
      <div className="flex flex-col h-full">
        {/* Header with journal badge and date */}
        <div className="flex items-start justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono border ${getJournalBadgeColor(paper.type)}`}>
            {paper.journal}
          </span>
          <div className="flex items-center text-white/60 text-sm">
            <Calendar size={14} className="mr-1" />
            {paper.date}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 leading-tight">{paper.title}</h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4 flex-grow">{paper.description}</p>

        {/* Keywords */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {paper.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs font-mono border border-white/20"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="mt-auto">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getJournalColor(paper.type)} text-black font-semibold hover:opacity-90 transition-all duration-300 text-sm font-mono shadow-lg`}
          >
            <BookOpen size={16} className="mr-2" />
            READ PAPER
            <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </GlassCard>
  )
}

export function PapersSection() {
  return (
    <section id="papers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="//SCIENTIFIC WORK" title="Published" subtitle="Research" centered />

        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Peer-reviewed publications focusing on learning analytics, educational technology, and data-driven insights
            in online learning environments. Research conducted in collaboration with Universidad de Cuenca and
            published in IEEE and RTE journals.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCIENTIFIC_PAPERS.map((paper, index) => (
            <PaperCard key={index} paper={paper} />
          ))}
        </div>

        {/* Research Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-white/70 font-mono text-sm">Published Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              38K+
            </div>
            <div className="text-white/70 font-mono text-sm">Data Points Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              2021-2022
            </div>
            <div className="text-white/70 font-mono text-sm">Publication Period</div>
          </div>
        </div>
      </div>
    </section>
  )
}
