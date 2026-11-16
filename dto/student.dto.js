import * as z from "zod";

const studentDto = z.object({
  id: z.int(),
  name: z.string(),
  school_year: z.int(),
  house_id: z.int(),
  birthday: z.date(),
});

export default studentDto;
