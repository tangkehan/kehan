import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import ProfileCard from '@/components/ProfileCard'
import HobbyCard from '@/components/HobbyCard'
import HobbyData from '@/data/HobbyData'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            More about me and myself
          </p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <ProfileCard />
          </div>
          <div className="prose max-w-none pb-8 pt-8 text-xl dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
        <div className="divide-y">
          <div className="container mx-auto max-w-screen-xl py-12">
            <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Behind The Code 🫧
            </h3>
            <div className="flex w-full flex-col  gap-4">
              {HobbyData.map((hobby) => (
                <HobbyCard
                  key={hobby.title}
                  title={hobby.title}
                  imgSrcs={hobby.imgSrcs}
                  info={hobby.info}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
