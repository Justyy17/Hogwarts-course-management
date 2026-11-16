import * as z from "zod";

const updateTeacherDto = z.object({
  id: z.int(),
  name: z.string(),
  house_id: z.int(),
});

export default updateTeacherDto;
