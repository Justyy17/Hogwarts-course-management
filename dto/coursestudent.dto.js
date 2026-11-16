import * as z from "zod";

const courseStudentDto = z.object({
  id: z.int(),
  student_id: z.int(),
});

export default courseStudentDto;
