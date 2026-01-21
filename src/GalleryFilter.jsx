export default function GalleryFilter({ filters, onFilterChange }) {
  const handleWorkChange = () => {
    onFilterChange({
      ...filters,
      work: !filters.work
    });
  };

  const handlePersonalChange = () => {
    onFilterChange({
      ...filters,
      personal: !filters.personal
    });
  };

  return (
    <div className="max-w-4xl px-12 mx-auto">
      <div className="border border-gray-200 dark:border-zinc-800 mb-8 bg-white dark:bg-zinc-900">

        <div className="flex items-center gap-6 text-md justify-center m-4">
          <span className="font-medium text-gray-700 dark:text-zinc-300">Filter:</span>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.work}
                onChange={handleWorkChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-zinc-300">Work</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.personal}
                onChange={handlePersonalChange}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-zinc-300">Personal</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}