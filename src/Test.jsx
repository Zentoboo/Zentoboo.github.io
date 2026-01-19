import CursorGrid from "./CursorGrid";

export default function Test({ isDarkMode }) {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <CursorGrid isDarkMode={isDarkMode} />
            </div>

            <div className="relative z-10 max-w-4xl px-12 mx-auto py-16">
                <h1 className="text-4xl font-bold mb-4">Test Page</h1>
                <p className="text-gray-600 dark:text-zinc-400">
                    This is a test page... I am here to test stuffs. Ignore this.
                </p>
            </div>
        </div>
    );
}