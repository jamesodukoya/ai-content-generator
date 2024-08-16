import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto pt-12 pb-5 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Ludwig Content Generator
      </h1>
      <div className={tw(`max-w-full mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-2xl`)}>
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Link href="/dashboard"><Button primary>Get started</Button></Link>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-2 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Generate stellar content for</p>
        <div className={tw(`flex items-center justify-center gap-12 mt-5 mx-auto flex-wrap`)}>
          <Image src='/youtube.svg' alt='youtube content generator' width={120} height={60} />
          <Image src='/instagram.svg' alt='instagram content generator' width={120} height={60}/>
          <Image src='/blog.svg' alt='blog content generator' width={120} height={60} />
          <Image src='/email.svg' alt='email content generator' width={120} height={60} />
          <Image src='/ecommerce.svg' alt='ecommerce content generator' width={120} height={60}/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
