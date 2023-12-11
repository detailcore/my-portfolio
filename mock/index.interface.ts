interface IImages {
  folder: string
  files: string[]
}
interface IStack {
  backend: string[]
  frontend: string[]
  add: string[]
}

export interface INavLinks {
  name: string
  link: string
}

export interface IGreeting {
  title: string
  short_description: string
}

export interface IWork {
  id: number
  date: string
  cover: string
  images: IImages
  title: string
  subtitle: string
  links: string[]
  stack: IStack
  competencies: string[]
  competencies_description: string
  short_description: string
}

export interface IPost {
  id: number
  title: string
  tags: string[]
  date: string
  short_description: string
  description: string
}
