import { GetStaticProps } from 'next'
import Header from '../components/Layout/Header'
import { getPageContent } from '../lib/cms'

interface AboutProps {
  content: {
    title: string
    body: string
  }
}

export default function About({ content }: AboutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{content.title}</h1>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content.body }}
          />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getPageContent('about')
  
  return {
    props: {
      content
    }
  }
}
