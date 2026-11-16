import * as z from "zod";

const updateCourseDto = z.object({
  id: z.int(),
  name: z.string(),
  teacher_id: z.int(),
  type: z.enum("core", "elective", "extra-curricular"),
  level: z.enum("OWL", "NEWT"),
  school_year: z.int(),
});

export default updateCourseDto;
