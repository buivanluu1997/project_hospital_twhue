export const SearchBar = () => {
    return (
        <form className="w-full max-w-2xl mx-auto">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>

                <input
                    type="search"
                    id="search"
                    className="block w-full py-3 pl-12 pr-5 text-base text-gray-900 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-md transition-all focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tìm kiếm..."
                    required
                />
            </div>
        </form>
    );
};
