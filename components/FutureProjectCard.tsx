import Image from 'next/image'

interface FutureProjectCardProps {
  project: {
    title: string
    category: string
    image: string
    description: string
    status: string
    website?: string
    raise_info?: string
    nft_price?: string
  }
}

export default function FutureProjectCard({ project }: FutureProjectCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden card-hover">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center">
          <span className="text-2xl mr-3">✈️</span>
          <span className="text-sm text-gray-600">{project.category}</span>
        </div>
      </div>
      
      <div className="relative h-40">
        <Image
          src={project.image || '/images/placeholder-future.jpg'}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        {project.raise_info && (
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">{project.raise_info}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
          <span className="text-gray-500">NFT Price</span>
          <span className="font-medium">{project.nft_price || '—'}</span>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          {project.website ? (
            <button className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
              🔗 Website
            </button>
          ) : (
            <div></div>
          )}
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
            {project.status}
          </span>
        </div>
      </div>
    </div>
  )
}