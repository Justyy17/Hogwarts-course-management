import * as z from "zod";

const examDto = z.object({
  course_id: z.int(),
  student_id: z.int(),
  grade: z.string(),
});

export default examDto;
