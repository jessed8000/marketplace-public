import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'content/projects')
const futureProjectsDirectory = path.join(process.cwd(), 'content/future-projects')
const pagesDirectory = path.join(process.cwd(), 'content/pages')

export function getAllProjects() {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        ...matterResult.data,
        content: matterResult.content
      }
    })

    return allProjectsData.sort((a: any, b: any) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.launch_date).getTime() - new Date(a.launch_date).getTime()
    })
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

export function getProjectBySlug(slug: string) {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      ...matterResult.data,
      content: matterResult.content
    }
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export function getAllFutureProjects() {
  try {
    const fileNames = fs.readdirSync(futureProjectsDirectory)
    const allFutureProjectsData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(futureProjectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        ...matterResult.data,
        content: matterResult.content
      }
    })

    return allFutureProjectsData
  } catch (error) {
    console.error('Error reading future projects:', error)
    return []
  }
}

export function getPageContent(page: string) {
  try {
    const fullPath = path.join(pagesDirectory, `${page}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      ...matterResult.data,
      body: matterResult.content
    }
  } catch (error) {
    console.error(`Error reading page ${page}:`, error)
    return {
      title: 'Page Not Found',
      body: 'This page could not be loaded.'
    }
  }
}