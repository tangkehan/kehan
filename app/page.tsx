
import Link from 'next/link'
import ProfileCard from '@/components/ProfileCard'


export default async function Page() {
  const headingColorClass =
  'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-purple-400 dark:to-pink-300'
  return (
  <>
   <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
    <div className="md:my-4 md:pt-6 md:pb-8 space-y-2 md:space-y-5 xl:grid xl:grid-cols-3">
      <div className="xl:col-span-2 md:pr-8">
        <p
          className={`mb-8 text-4xl leading-[60px] font-extrabold tracking-tight text-transparent bg-clip-text ${headingColorClass} md:text-7xl md:leading-[86px]`}
        >
          Welcome!
        </p>

      <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
        <h1 className="text-neutral-900 dark:text-neutral-200">
          I'm <span className="font-medium">Kehan</span> - I will be a{' '}
          <span className="font-medium">Software Engineer</span>{' '}
        </h1>
        <p className="mt-4 mb-8">
          I started my coding journey since 2021.
          <br />
          Back then I was study in computational material science.
          <br />
          wait...
          <br />
          Now I am a master student concentrating in computer software engineering.
          <br />
        </p>
       
        <div className="flex flex-col space-y-1">
          <div className="flex items-center">
            <span className="emoji">🛠</span>
            <Link href="/projects" className="hover:underline">
              <span className="ml-2">What have I built?</span>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="emoji">📝</span>
            <Link href="/projects" className="hover:underline">
              <span className="ml-2">My Resume</span>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="emoji">💫</span>
            <Link href="/about" className="hover:underline">
              <span className="ml-2">More about me and myself</span>
            </Link>
          </div>
        </div>
        <p className="my-8">
          Happy reading 🍻
        </p>
      </div>
    </div>
    <div className="hidden xl:block">
            <ProfileCard />
    </div>
  </div>   
  </div>
</>)}
