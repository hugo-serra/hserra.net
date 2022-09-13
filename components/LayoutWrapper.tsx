import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <div className="typewriter">
                    <h1 className="text-2xl font-extrabold">
                      <span className="font-black tracking-tighter text-red-500">{'</> '}</span>
                      hserra
                    </h1>
                  </div>
                </div>
                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold xl:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <>
                  <Link
                    key={link.title}
                    href={link.href}
                    className={
                      'p-1 font-medium sm:p-4' +
                      (router.pathname === link.href
                        ? ' font-semibold text-red-500 underline underline-offset-4'
                        : ' text-gray-900 dark:text-gray-100')
                    }
                  >
                    {link.title}
                  </Link>
                  <span>/</span>
                </>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
