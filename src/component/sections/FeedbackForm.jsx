import React, { useState } from 'react';

export const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 min-h-[500px]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-2">
                    HỎI ĐÁP & GÓP Ý
                </h2>
                <p className="text-blue-50 mb-8">
                    Vui lòng gửi cho chúng tôi mọi ý kiến đóng góp, thắc mắc của bạn!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ và Tên *"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Địa chỉ"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Nội dung tin nhắn..."
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow resize-none"
                    />

                    <div className="text-center mt-2">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                        >
                            GỬI THÔNG TIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
