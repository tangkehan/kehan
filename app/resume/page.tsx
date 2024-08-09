import { Resume, allResumes } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import ResumeLayout from '@/layouts/ResumeLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function ResumePage() {
  const resume = allResumes.find((p) => p.title === 'My Resume')
  // Handle case where resume is not found
  if (!resume) {
    return <div>Resume not found</div>
  }
  const mainContent = coreContent(resume)

  return (
    <ResumeLayout content={mainContent}>
      <MDXLayoutRenderer code={resume.body.code} />
    </ResumeLayout>
  )
}
