import React, { useState, useEffect } from "react";
import faqBg from "../../../assets/faq-bg.png";
import faqImg from "../../../assets/faq-left.png";
import { CaretDown } from "@phosphor-icons/react";
import { getFaqs } from "../../../Api/Api"; // ✅ import API

const FAQ = () => {
    const [active, setActive] = useState(0);
    const [faqs, setFaqs] = useState([]); // ✅ dynamic data

    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };

    // ✅ FETCH DATA
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await getFaqs();
                setFaqs(data);
            } catch (error) {
                console.error("FAQ fetch error:", error);
            }
        };

        fetchFaqs();
    }, []);

    return (
        <section
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${faqBg})` }}
        >
            {/* FULL WIDTH GRID */}
            <div className="w-full grid lg:grid-cols-2">

                {/* LEFT IMAGE (FULL STRETCH) */}
                <div className="w-full h-full min-h-[400px] lg:min-h-[600px]">
                    <img
                        src={faqImg}
                        alt="faq"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex items-center">
                    <div className="w-full max-w-[720px] px-[20px] md:px-[40px] xl:px-[72px] py-[60px] lg:py-[80px]">

                        {/* TOP */}
                        <div className="space-y-2 mb-[30px]">
                            <span className="relative inline-block text-[#FFAC00] italic text-xl md:text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500">
                                Frequently Asked Questions
                            </span>

                            <h2 className="font-display font-bold text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] text-[#1F2937]">
                                Have any Question?
                            </h2>
                        </div>

                        {/* FAQ */}
                        <div className="space-y-[15px]">
                            {faqs.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-[6px] shadow-md overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left px-5 py-4"
                                    >
                                        <h3 className="font-display text-[18px] md:text-[24px] font-semibold text-[#1F2937]">
                                            {index + 1}. {item.title.rendered}
                                        </h3>

                                        {/* ARROW */}
                                        <span
                                            className={`transition-transform duration-300 ${
                                                active === index ? "rotate-180" : ""
                                            }`}
                                        >
                                            <CaretDown size={20} weight="bold" className="text-[#1F2937]" />
                                        </span>
                                    </button>

                                    {active === index && (
                                        <div className="px-5 pb-4">
                                            <p
                                                className="text-[16px] text-[#434242]"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.content.rendered,
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;