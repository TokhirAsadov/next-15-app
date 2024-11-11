import {defineQuery} from "groq";

export const STARTUP_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
    title, 
    slug, 
    _createdAt, 
    author -> {
       _id, 
      name, 
      username, 
      image, 
      bio 
    }, 
    views, 
    description, 
    category, 
    pitch,
    image
}`)