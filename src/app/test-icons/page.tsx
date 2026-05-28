//TODO: ALL 128 ICONS LINK => http://localhost:3000/test-icons

export default function TestIconsPage() {
  return (
    <div className="min-h-screen bg-white p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-black">Icon Library</h1>
        <p className="mb-10 text-center text-gray-500">
          Total: 128 Icons (ns-shape-1 to ns-shape-128)
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {Array.from({ length: 128 }, (_, i) => {
            const iconName = `ns-shape-${i + 1}`;
            return (
              <div
                key={i}
                className="group flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all hover:shadow-lg"
              >
                <i
                  className={`${iconName} text-4xl text-slate-800 transition-colors group-hover:text-blue-600`}
                />

                <span className="mt-3 rounded border border-gray-100 bg-white px-2 py-1 font-mono text-[10px] text-gray-400">
                  {iconName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
