import * as z from "zod";

const courseTeacherDto = z.object({
  id: z.int(),
  teacher_id: z.int(),
});

export default courseTeacherDto;
