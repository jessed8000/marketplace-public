// pages/projects/[slug].tsx - Mobile Project Detail Page
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Header from '../../components/Layout/Header'

// Mock project data - later this will come from CMS
const mockProjects = {
  'blrk': {
    slug: 'blrk',
    title: 'BLRK',
    symbol: 'BLRK',
    company: 'Black Rock Mountain Resort',
    launch_date: 'August 2023',
    featured_image: '/images/black-rock-resort.jpg',
    logo: '/images/black-rock-logo.png',
    description: 'Black Rock Mountain Resort is the perfect place to put your feet up after running them across the area\'s ski resorts. Sundance, restaurants and outdoor adventure options...',
    nft_price: '$7,500 USD',
    amount_raised: '—',
    nfts_available: '6.42K',
    visibility_number: '$80M',
    nft_holders: '—',
    amount_raising: '$120M',
    status: 'Active'
  }
}

interface ProjectDetailProps {
  project: any
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '24px 16px' }}>
        
        {/* BLRK Card - Mobile Project Detail */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px'
        }}>
          
          {/* Image container with light shadow */}
          <div style={{ 
            position: 'relative', 
            height: '200px', 
            width: '90%',
            borderRadius: '20px',
            overflow: 'visible',
            border: '2px solid #ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <img
              src={project.featured_image}
              alt={project.company}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block',
                borderRadius: '20px'
              }}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=200&fit=crop";
              }}
            />

            {/* Logo overlay */}
            <img 
              src={project.logo} 
              alt={`${project.company} logo`} 
              style={{ 
                position: 'absolute',
                bottom: '-32px',
                left: '16px',
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '12px',
                border: '1px solid white',
                zIndex: 10
              }}
              onError={(e) => {
                e.currentTarget.outerHTML = '<div style="position: absolute; bottom: -32px; left: 16px; width: 80px; height: 80px; backgroundColor: black; borderRadius: 12px; border: 1px solid white; zIndex: 10; display: flex; alignItems: center; justifyContent: center; color: white; fontSize: 12px; fontWeight: bold; textAlign: center; lineHeight: 1.2;"><div>BLACK<br>ROCK</div></div>';
              }}
            />
          </div>
          
          {/* Card Content - Adjusted for logo positioning */}
          <div style={{ padding: '56px 16px 16px 16px' }}>
            
            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>{project.symbol}</h1>
              {project.status === 'Active' && <span style={{ marginLeft: '8px', color: '#3b82f6', fontSize: '14px' }}>✓</span>}
            </div>
            
            {/* Company info */}
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>
              By {project.company}
            </p>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 12px 0' }}>
              Launching {project.launch_date}
            </p>
            
            {/* Description */}
            <p style={{ fontSize: '12px', color: '#374151', margin: '0 0 16px 0', lineHeight: '1.4' }}>
              {project.description}
            </p>
            
            {/* Show More */}
            <button style={{ 
              fontSize: '12px', 
              color: '#3b82f6', 
              background: 'none', 
              border: 'none', 
              padding: '0',
              marginBottom: '16px',
              cursor: 'pointer'
            }}>Show More</button>
            
            {/* Project Website Button */}
            <button style={{
              width: '100%',
              backgroundColor: 'white',
              border: '1px solid #d1d5db',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '12px',
              color: '#374151',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              cursor: 'pointer'
            }}>
              <span>Project Website</span>
              <span>→</span>
            </button>
            
            {/* Stats - Black Boxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>NFT Symbol</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.symbol}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>NFT Price</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.nft_price}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>Amount Raised</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.amount_raised}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>NFTs Available</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.nfts_available}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>Visibility Number</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.visibility_number}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>NFT Holders</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.nft_holders}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>Amount Raising</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.amount_raising}</span>
              </div>
              
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px' }}>Launch Date</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{project.launch_date}</span>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // In production, this would fetch all project slugs from your CMS
  const paths = Object.keys(mockProjects).map(slug => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const project = mockProjects[slug as keyof typeof mockProjects]

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    }
  }
}