import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Image from 'next/image';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change your content game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/4 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Image src="/template.svg" width={60} height={60} alt='free ai content generator'></Image>
              <div className={tw(`ml-4 text-xl`)}>10+ templates</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Generate content faster using templates tailored to your most important projects.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/4 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Image src="/customize.svg" width={40} height={40} alt='free ai content generator'></Image>
              <div className={tw(`ml-4 text-xl`)}>Highly customizable</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Enjoy as much flexibility as you desire. Customize and extend your approach to content creation.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/4 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Image src="/free.svg" width={40} height={40} alt='free ai content generator'></Image>
              <div className={tw(`ml-4 text-xl`)}>Start free</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Generate 1000s of words with our 100% free plan and get enough value on your projects.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/4 lg:border-l lg:border-r-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Image src="/support.svg" width={40} height={40} alt='free ai content generator'></Image>
              <div className={tw(`ml-4 text-xl`)}>24/7 Support</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Get in touch with us 24 hours a day, 7 days a week and resolve your queries in minutes!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
