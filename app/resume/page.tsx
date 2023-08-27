import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeTimeline from '@/components/resume/ResumeTimeline'
import ResumeEducation from '@/components/resume/ResumeEducation'
import ResumeProjects from '@/components/resume/ResumeProjects'
import ResumeQuote from '@/components/resume/ResumeQuote'
import ResumeSummary from '@/components/resume/ResumeSummary'
import ResumeSkills2 from '@/components/resume/ResumeSkills2'
import ResumePublications from '@/components/resume/ResumePublications'
import ResumeLanguages from '@/components/resume/ResumeLanguages'

import { genPageMetadata } from 'app/seo'
import ContactForm from '@/components/ContactMe'

export const metadata = genPageMetadata({ title: 'Resume' })

async function getResume() {
  const res = await fetch('https://gitconnected.com/v1/portfolio/hugo-serra', { cache: 'no-store' })
  return await res.json()
}

export default async function Resume() {
  const resume = await getResume()

  return (
    <>
      <div className="grid grid-cols-1 gap-y-8 p-5 print:grid-cols-4 print:gap-x-5 print:gap-y-1">
        <div className="col-span-1 print:col-span-4 print:mb-0">
          <ResumeHeader resume={resume} />
        </div>
        <div className="col-span-1 print:col-span-4 print:mb-0">
          <ResumeQuote text={resume.basics.headline} />
          <ResumeSummary summary={resume.basics.summary} />
        </div>
        <div className="col-span-1 print:col-span-4 print:mb-0">
          <ResumeLanguages languagesData={resume.languages} />
          <ResumeSkills2 skills={resume.skills} />
          <ResumeTimeline resume={resume} />
          <ResumeEducation educationData={resume.education} />
          {/* <ResumeProjects /> */}
          <ResumePublications publications={resume.publications} />
        </div>
      </div>
    </>
  )
}
