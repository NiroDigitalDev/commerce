'use client';

import { Reveal } from '@/components/animations';
import ButtonLink from 'components/button-link';
import Image from 'next/image';
import aboutBgImage from '../assets/hin-bong-yeung-jF946mh5QrA-unsplash.jpg';

const ServicesV2 = () => {

  const features = [
    'Build and launch effortlessly, no coding skills needed.',
    'Dive right into action and elevate your sales.',
    'We accelerate growth with cutting-edge digital solutions.',
    'We grasp the unique requirements of your business.',
  ];

  return (
    <section className="section-spacing">
      <Reveal delay={0.2}>
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative z-10 min-h-[300px] rounded-[20px] overflow-hidden flex items-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
              <Image
                src={aboutBgImage}
                alt="about bg"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Dark overlay to dim the background */}
              <div className="absolute inset-0 bg-black/50" />
              {/* Vignette effect */}
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.6) 100%)'
                }} 
              />
            </div>
            <div className="w-full py-8 px-6 md:px-11 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-5 relative z-10">
              <div className="max-w-[500px] mx-auto lg:mx-0 text-center lg:text-left">
                <h5 className="text-white mb-6 text-lg md:text-xl font-semibold">
                  Develop a fully functional website that includes engaging content and visuals.
                </h5>
                <ButtonLink href="/shop" variant="accent" size="lg" className="w-full md:w-auto">
                  Get started
                </ButtonLink>
              </div>
              <div>
                <ul className="space-y-3 md:space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <path
                            d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                            fill="currentColor"
                            fillOpacity="0.17"
                            className="text-white"
                          />
                          <path
                            d="M14.125 7.375L8.875 12.6248L6.25 10"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-white"
                          />
                        </svg>
                      </div>
                      <span className="text-white font-medium text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ServicesV2;

