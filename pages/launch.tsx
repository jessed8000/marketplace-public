import Header from '../components/Layout/Header'

export default function Launch() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Launch Your Project</h1>
          <p className="text-gray-600 mb-8">
            Ready to tokenize your real-world assets? Get started with LEMON CHAIN.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}