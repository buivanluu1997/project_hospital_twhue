import { CalendarIcon } from '@heroicons/react/24/solid'

export const CardClinic = () => {
    return (
        <div className="container max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                    "Đặt lịch hẹn khám",
                    "Đặt khám tại bệnh viện",
                    "Gói khám sức khỏe",
                    "Đặt lịch xét nghiệm",
                ].map((text, index) => (
                    <div
                        key={index}
                        className="w-[160px] h-[160px] p-4 bg-white border border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-all"
                    >
                        <CalendarIcon aria-hidden="true" className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                        <div className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
