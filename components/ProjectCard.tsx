import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    slug: string
    title: string
    symbol: string
    company: string
    featured_image: string
    logo: string
    launch_date: string
    description: string
    nft_price: string
    amount_raised: string
    nfts_available: string
    visibility_number?: string
    nft_holders: string
    amount_raising: string
    status: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-48 md:h-56 cursor-pointer">
          <Image
            src={project.featured_image || '/images/placeholder-project.jpg'}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <div className="bg-black rounded-lg p-3 w-16 h-16 flex items-center justify-center">
              <Image
                src={project.logo || '/images/placeholder-logo.png'}
                alt={`${project.company} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
            <span className="text-2xl">⋯</span>
          </button>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.symbol}</h3>
          {project.status === 'Active' && <span className="ml-2 text-blue-500">✓</span>}
        </div>
        
        <p className="text-sm text-gray-600 mb-1">
          By {project.company}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Launching {project.launch_date}
        </p>

        <p className="text-gray-700 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="space-y-2 mb-6">
          <Link href={`/projects/${project.slug}`}>
            <button className="w-full bg-white border border-gray-300 rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between transition-colors">
              Project Website
              <span>→</span>
            </button>
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>NFT Symbol</span>
            <span className="font-bold">{project.symbol}</span>
          </div>
          
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>NFT Price</span>
            <span className="font-bold">{project.nft_price}</span>
          </div>
          
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>Amount Raised</span>
            <span className="font-bold">{project.amount_raised || '—'}</span>
          </div>
          
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>NFTs Available</span>
            <span className="font-bold">{project.nfts_available}</span>
          </div>
          
          {project.visibility_number && (
            <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
              <span>Visibility Number</span>
              <span className="font-bold">{project.visibility_number}</span>
            </div>
          )}
          
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>NFT Holders</span>
            <span className="font-bold">{project.nft_holders || '—'}</span>
          </div>
          
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>Amount Raising</span>
            <span className="font-bold">{project.amount_raising}</span>
          </div>
          
          <div className="bg-black text-white rounded-lg p-3 flex justify-between items-center">
            <span>Launch Date</span>
            <span className="font-bold">{project.launch_date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}