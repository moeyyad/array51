// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)

const courseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    program: z.string().optional(),
    courseCode: z.string(),
    title: z.string(),
    description: z.string(),
    prerequisites: z.array(z.string()).optional(),
    corequisites: z.array(z.string()).optional(),
    courseHours: z.number().optional(),
    courseType: z.string().optional(),
    deliveryMode: z.array(z.string()).optional(),
    sortOrder: z.number()
  }),
});


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'courses': courseCollection
};