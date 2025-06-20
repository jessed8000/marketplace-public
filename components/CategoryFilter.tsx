interface CategoryFilterProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  categories: string[]
}

export default function CategoryFilter({ 
  selectedCategory, 
  onCategoryChange, 
  categories 
}: CategoryFilterProps) {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Real Estate': '🏠',
      'Natural Gas': '🔥',
      'Crypto Clouds': '☁️',
      'Digital Art': '🎨',
      'Weed': '🌿',
      'Technology': '💻'
    }
    return icons[category] || '📦'
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Launch projects of any category</h3>
      <div className="grid grid-cols-2 gap-3 max-w-md">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(selectedCategory === category ? null : category)}
            className={`flex items-center p-3 rounded-lg border text-left transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-yellow-50 border-yellow-300 shadow-md'
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <span className="mr-3 text-xl">
              {getCategoryIcon(category)}
            </span>
            <span className="text-sm font-medium text-gray-700">{category}</span>
          </button>
        ))}
      </div>
    </div>
  )
}