// pages/index.tsx - Homepage with Project Grid
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Layout/Header'

// Add Poppins font import
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900']
})

// Categories Collection - This will come from CMS
const categoriesCollection = [
  {
    id: 1,
    name: 'Real Estate',
    icon: '/images/icons/real-estate.svg',
    slug: 'real-estate',
    description: 'Property and real estate tokenization projects'
  },
  {
    id: 2,
    name: 'Natural Gas',
    icon: '/images/icons/natural-gas.svg',
    slug: 'natural-gas',
    description: 'Energy and natural gas projects'
  },
  {
    id: 3,
    name: 'Aviation',
    icon: '/images/icons/aviation.svg',
    slug: 'aviation',
    description: 'Aviation and aerospace industry projects'
  },
  {
    id: 4,
    name: 'Crypto',
    icon: '/images/icons/crypto.svg',
    slug: 'crypto',
    description: 'Cryptocurrency and blockchain projects'
  },
  {
    id: 5,
    name: 'Agriculture',
    icon: '/images/icons/agriculture.svg',
    slug: 'agriculture',
    description: 'Agriculture and farming projects'
  },
  {
    id: 6,
    name: 'Technology',
    icon: '/images/icons/technology.svg',
    slug: 'technology',
    description: 'Technology and software projects'
  },
  {
    id: 7,
    name: 'Mining',
    icon: '/images/icons/mining.svg',
    slug: 'mining',
    description: 'Mining and mineral extraction projects'
  },
  {
    id: 8,
    name: 'Pharmaceuticals',
    icon: '/images/icons/pharmaceuticals.svg',
    slug: 'pharmaceuticals',
    description: 'Pharmaceutical and healthcare projects'
  },
  {
    id: 9,
    name: 'Beverages',
    icon: '/images/icons/beverages.svg',
    slug: 'beverages',
    description: 'Beverage and drink industry projects'
  }
]

// Featured projects data
const featuredProjects = [
  {
    slug: 'rtx',
    title: 'RTX',
    symbol: 'RTX',
    featured_image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
    category: 'Technology',
    description: 'The ultimate AI-powered medical cannabis dispensary network experience.',
    nft_price: '$1,500',
    status: 'active'
  },
  {
    slug: 'solj',
    title: 'SOLJ',
    symbol: 'SOLJ',
    featured_image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=200&fit=crop',
    category: 'Aviation',
    description: 'Private aviation economics token backed by real aircraft assets.',
    nft_price: '$12,500',
    status: 'active'
  },
  {
    slug: 'blrk',
    title: 'BLRK',
    symbol: 'BLRK',
    featured_image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop',
    category: 'Real Estate',
    description: 'Black Rock Mountain Resort tokenization for luxury hospitality.',
    nft_price: '$7,500',
    status: 'active'
  }
]

// All projects data
const allProjects = [
  {
    slug: 'bgld',
    title: 'BGLD',
    symbol: 'BGLD',
    featured_image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=200&fit=crop',
    category: 'Mining',
    description: 'Blockchain gold mining project with verified reserves.',
    nft_price: '$1,500',
    status: 'active'
  },
  {
    slug: 'grow',
    title: 'GROW',
    symbol: 'GROW',
    featured_image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=200&fit=crop',
    category: 'Agriculture',
    description: 'Sustainable agriculture technology platform.',
    nft_price: '$900',
    status: 'active'
  },
  {
    slug: 'rev',
    title: 'REV',
    symbol: 'REV',
    featured_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
    category: 'Technology',
    description: 'Revolutionary blockchain energy distribution network.',
    nft_price: '$2,200',
    status: 'active'
  },
  {
    slug: 'dla',
    title: 'DLA',
    symbol: 'DLA',
    featured_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop',
    category: 'Mining',
    description: 'Decentralized lithium acquisition and processing.',
    nft_price: '$3,100',
    status: 'coming-soon'
  },
  {
    slug: 'blox',
    title: 'BLOX',
    symbol: 'BLOX',
    featured_image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop',
    category: 'Real Estate',
    description: 'Blockchain-based real estate development platform.',
    nft_price: '$5,000',
    status: 'active'
  },
  {
    slug: 'chip',
    title: 'CHIP',
    symbol: 'CHIP',
    featured_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop',
    category: 'Technology',
    description: 'Semiconductor supply chain optimization token.',
    nft_price: '$4,500',
    status: 'active'
  },
  {
    slug: 'dcm',
    title: 'DCM',
    symbol: 'DCM',
    featured_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop',
    category: 'Real Estate',
    description: 'Data center management and infrastructure tokenization.',
    nft_price: '$8,750',
    status: 'active'
  },
  {
    slug: 'xplr',
    title: 'XPLR',
    symbol: 'XPLR',
    featured_image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=200&fit=crop',
    category: 'Agriculture',
    description: 'Space agriculture research and development platform.',
    nft_price: '$3,800',
    status: 'active'
  },
  {
    slug: 'alum',
    title: 'ALUM',
    symbol: 'ALUM',
    featured_image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=200&fit=crop',
    category: 'Mining',
    description: 'Aluminum extraction and processing tokenization.',
    nft_price: '$2,900',
    status: 'coming-soon'
  },
  {
    slug: 'rev2',
    title: 'REV',
    symbol: 'REV',
    featured_image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=200&fit=crop',
    category: 'Technology',
    description: 'Automotive revolution through blockchain technology.',
    nft_price: '$6,200',
    status: 'active'
  },
  {
    slug: 'debt',
    title: 'DEBT',
    symbol: 'DEBT',
    featured_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    category: 'Technology',
    description: 'Decentralized debt management and optimization platform.',
    nft_price: '$1,750',
    status: 'active'
  },
  {
    slug: 'nato',
    title: 'NATO',
    symbol: 'NATO',
    featured_image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=200&fit=crop',
    category: 'Natural Gas',
    description: 'Natural gas trading optimization network.',
    nft_price: '$4,100',
    status: 'coming-soon'
  }
]

// Project Card Component
const ProjectCard = ({ project }: { project: any }) => (
  <Link href={`/projects/${project.slug}`} className="block no-underline">
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.featured_image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Status indicator */}
        <div className="absolute top-3 right-3">
          <div className={`w-3 h-3 rounded-full ${
            project.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
          }`}></div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{project.symbol}</h3>
          <span className="text-xs text-gray-500">{project.category}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-height-relaxed">
          {project.description.length > 80 
            ? project.description.substring(0, 80) + '...' 
            : project.description
          }
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">NFT Price</span>
            <p className="text-sm font-semibold text-gray-900">{project.nft_price}</p>
          </div>
          <div className={`w-4 h-4 rounded-full ${
            project.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
          }`}></div>
        </div>
      </div>
    </div>
  </Link>
)

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProjects = selectedCategory 
    ? allProjects.filter(project => project.category === selectedCategory)
    : allProjects

  return (
    <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
      {/* Only show header when scrolled */}
      {isScrolled && <Header />}
      
      <div className="max-w-6xl mx-auto px-4 pt-6">
        
        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start min-h-[600px]">
          
          {/* Left Column - Navigation + Text Content + Category Filters */}
          <div className="py-6 pr-8">
            {/* Navigation within left column */}
            {!isScrolled && (
              <div className="flex items-center gap-12 mb-20">
                <Link href="/" className="flex items-center no-underline">
                  <img 
                    src="/images/lemon-chain-logo.svg"
                    alt="LEMON CHAIN"
                    className="h-8 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.outerHTML = '<span class="text-xl font-bold text-gray-900">LEMON<span class="text-lemon-400">CHAIN</span></span>';
                    }}
                  />
                </Link>
                
                <nav className="flex items-center gap-8">
                  <Link 
                    href="/connect" 
                    className="text-gray-700 text-base font-medium no-underline transition-colors duration-200 hover:text-gray-900"
                  >
                    Connect
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-gray-700 text-base font-medium no-underline transition-colors duration-200 hover:text-gray-900"
                  >
                    About
                  </Link>
                  <Link 
                    href="/launch" 
                    className="text-gray-700 text-base font-medium no-underline transition-colors duration-200 hover:text-gray-900"
                  >
                    Launch
                  </Link>
                </nav>
              </div>
            )}
            
            <div className="mt-32">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
                Launch & Support<br />Real World Projects
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg text-left">
                Explore all of the amazing projects that are part of the D.E.B.T. Ecosystem that are 
                supported by real world economic drivers.
              </p>
              
              <button className="bg-black text-white rounded-full text-base font-semibold border-none cursor-pointer inline-flex items-center mb-10 h-16 overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <span className="px-6 flex items-center h-full">
                  Get Started
                </span>
                <div className="border-l-2 border-black h-full w-0.5"></div>
                <div className="bg-white w-14 h-14 rounded-r-full flex items-center justify-center mr-1">
                  <img 
                    src="/images/icons/arrow-right.svg"
                    alt="Arrow right"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.outerHTML = '<span class="text-black text-2xl font-black">→</span>';
                    }}
                  />
                </div>
              </button>

              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-5 text-gray-900 flex items-center gap-2">
                  <img 
                    src="/images/icons/star-sparkle.svg"
                    alt="Star icon"
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.outerHTML = '<span class="text-base">✨</span>';
                    }}
                  />
                  Launch projects of any category
                </h3>
                <div className="flex flex-wrap gap-3 max-w-lg">
                  {categoriesCollection.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                      className={`flex items-center py-3.5 pl-2 pr-4 rounded-full border-none cursor-pointer transition-all duration-200 h-12 min-w-fit ${
                        selectedCategory === category.name 
                          ? 'bg-gray-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {/* Icon in white circle */}
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                        <img 
                          src={category.icon} 
                          alt={`${category.name} icon`}
                          className="w-4.5 h-4.5 object-contain"
                          onError={(e) => {
                            const fallbackIcons: { [key: string]: string } = {
                              'Real Estate': '🏠',
                              'Natural Gas': '🔥',
                              'Aviation': '✈️',
                              'Crypto': '₿',
                              'Agriculture': '🌾',
                              'Technology': '💻',
                              'Mining': '⛏️',
                              'Pharmaceuticals': '💊',
                              'Beverages': '🥤'
                            };
                            e.currentTarget.outerHTML = `<span class="text-base">${fallbackIcons[category.name] || '📦'}</span>`;
                          }}
                        />
                      </div>
                      
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image that extends upward with padding and rounded corners */}
          <div className="flex items-center justify-center h-full p-6">
            <div className="bg-black rounded-3xl w-full flex flex-col items-center justify-center text-white relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
              {/* Decorative dots */}
              <div className="absolute top-20 left-16 w-2 h-2 bg-gray-400 rounded-full opacity-60"></div>
              <div className="absolute top-12 right-20 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-70"></div>
              <div className="absolute top-32 right-12 w-1 h-1 bg-gray-500 rounded-full opacity-50"></div>
              <div className="absolute bottom-40 left-12 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-60 right-24 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>
              
              {/* Main text content */}
              <span className="text-4xl mb-4 font-bold">600×900</span>
              <span className="text-2xl mb-2">1200×900</span>
              <span className="text-lg">full size</span>
            </div>
          </div>
          
        </div>

        {/* Sections with proper spacing */}
        <div className="py-6">

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            All Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-10 px-5 text-gray-600">
              <p>No projects found in this category.</p>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mt-3 text-blue-500 bg-transparent border-none text-sm cursor-pointer hover:underline"
              >
                Show all projects
              </button>
            </div>
          )}
        </div>

        {/* FAQ Section Placeholder */}
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">FAQ section coming soon...</p>
        </div>
        
      </div>
      
    </div>
    </div>
  )
}