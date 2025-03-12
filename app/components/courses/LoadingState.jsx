export default function LoadingState() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Course Header Skeleton */}
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-2">
            {/* Image placeholder */}
            <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
            {/* Title placeholder */}
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            {/* Description placeholder */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
          
          <div className="col-span-1">
            {/* Price card placeholder */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-10 bg-gray-200 rounded mb-4"></div>
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs placeholder */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-4">
            {[1, 2, 3].map((tab) => (
              <div key={tab} className="h-10 w-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Content placeholder */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}