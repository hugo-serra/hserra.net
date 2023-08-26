import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { InferGetServerSidePropsType } from 'next'

export const POSTS_PER_PAGE = 5

import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeTimeline from '@/components/resume/ResumeTimeline'
import ResumeEducation from '@/components/resume/ResumeEducation'
import ResumeProjects from '@/components/resume/ResumeProjects'
import ResumeQuote from '@/components/resume/ResumeQuote'
import ResumeSummary from '@/components/resume/ResumeSummary'
import ResumeSkills2 from '@/components/resume/ResumeSkills2'
import ResumePublications from '@/components/resume/ResumePublications'
import ResumeLanguages from '@/components/resume/ResumeLanguages'

export const getServerSideProps = async () => {
  const resume = await import(`@/resume/resume.json`).then((m) => m.default)
  /* Get resume from gitconnected API */
  const remoteResume = await fetch('https://gitconnected.com/v1/portfolio/hugo-serra').then((res) =>
    res.json()
  )

  return { props: { resume: remoteResume || resume } }
}

export default function Blog({ resume }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <PageSEO title={`Resume - ${siteMetadata.author}`} description={siteMetadata.description} />
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
