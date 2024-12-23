import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { value: 4, label: 'LOREM LOREM' },
    { value: 10, label: 'LOREM' },
    { value: 610, label: 'LOREM LOREM' },
    { value: 18, label: 'LOREM' },
];

function StatsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="relative text-center pt-10 pb-20 px-[50px] bg-cover bg-center" ref={ref}>
            <div className="flex justify-center items-center gap-12 py-12 bg-black">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center relative text-justify z-10 max-w-[65rem] mx-auto px-[50px]">
                        <p className="text-4xl font-light text-white text-[50px] leading-[2.5rem]">
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={stat.value}
                                    duration={2}
                                    suffix={stat.value === 4 || stat.value === 10 || stat.value === 610 ? '+' : ''}
                                />
                            ) : (
                                0
                            )}
                        </p>
                        <p className="text-[20px] font-semibold text-red-600 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;
