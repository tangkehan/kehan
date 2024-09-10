import React from 'react'

export default function ResumeLayout({ children, content }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My professional career, experiences, and skills.
          </p>
        </div>
        {/* <div className="border-l border-gray-300 hidden md:block" />
        <div className="text-gray-900 leading-6 space-y-5 prose prose-slate grow table-auto border-collapse">
            {children}
        </div> */}

        {/* <div className="prose max-w-none pb-8 pt-8 text-xl dark:prose-invert xl:col-span-2 table-auto">{children}</div>
      </div> */}

        <div className="border border-t border-gray-200 dark:border-gray-700" />
        <div className="mx-auto my-12 max-w-screen-xl gap-12 space-y-12 rounded-md bg-gray-100 p-3 dark:bg-gray-800 md:flex md:space-y-0 md:p-8">
          <div className="prose max-w-none grow table-auto border-collapse pb-8 pt-8  text-xl dark:prose-invert xl:col-span-2 ">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
