import { z } from 'zod';

// Schema for validating the object that is sent with requests
export const issueSchema = z.object({
  title: z.string().min(1, 'A title is required.').max(255),
  description: z.string().min(1, 'A description is required.')
})