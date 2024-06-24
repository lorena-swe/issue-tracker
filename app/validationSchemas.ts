import { z } from 'zod';

// Schema for validating the object that is sent with requests
export const issueSchema = z.object({
  title: z.string().min(1, 'A title is required.').max(255),
  description: z.string().min(1, 'A description is required.').max(65535)
})

export const patchIssueSchema = z.object({
  title: z.string().min(1, 'A title is required.').max(255).optional(),
  description: z.string().min(1, 'A description is required.').max(65535).optional(),
  assignedToUserId: z.string().min(1, "AssignedToUserId is required.").max(255).optional().nullable()
})