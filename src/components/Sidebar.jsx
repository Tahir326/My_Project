

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 border-l">
      <h3 className="text-xl mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Category</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
     
          >
            <option value="">Select Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">Price Range</label>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full"
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
