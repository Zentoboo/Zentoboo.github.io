export default function ImageCard({ image, onClick }) {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden border border-gray-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-medium text-sm mb-1">{image.title}</h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
            image.category === 'work' 
              ? 'bg-blue-500 text-white'
              : 'bg-green-500 text-white'
          }`}>
            {image.category}
          </span>
        </div>
      </div>
    </div>
  );
}