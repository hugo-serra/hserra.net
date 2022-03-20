const fs = require('fs')
const path = require('path')
const { exit } = require('process')
const puppeteer = require('puppeteer')

const printPdf = async () => {
  console.log('Starting: Generating PDF Process, Kindly wait ..')
  /** Launch a headleass browser */
  const browser = await puppeteer.launch()
  /* 1- Ccreate a newPage() object. It is created in default browser context. */
  const page = await browser.newPage()
  /* 2- Will open our generated `.html` file in the new Page instance. */
  const filePath = path.resolve('./resume/resume.html')
  console.log('Opening: ', filePath)
  await page.goto('file:' + filePath, { waitUntil: 'networkidle0' })
  /* 3- Take a snapshot of the PDF */
  const pdf = await page.pdf({
    format: 'A4',
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px',
    },
  })
  /* 4- Cleanup: close browser. */
  await browser.close()
  console.log('Ending: Generating PDF Process')
  return pdf
}

const init = async () => {
  try {
    const pdf = await printPdf()
    fs.writeFileSync(path.resolve('./resume/resume.pdf'), pdf)
    console.log('Succesfully created an PDF table')
  } catch (error) {
    console.log('Error generating PDF', error)
    exit()
  }
}

init()
