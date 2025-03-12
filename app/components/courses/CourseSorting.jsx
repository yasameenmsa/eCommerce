export default function CourseSorting({ sortBy, setSortBy }) {
  return (
    <div className="flex items-center">
      <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="popularity">Most Popular</option>
        <option value="rating">Highest Rated</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
}