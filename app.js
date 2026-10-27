import express from "express";
const app = express();
const port = 3000;
import housesRoutes from "./routes/houses.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import studentRoutes from "./routes/students.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

app.use(express.json()); // For at kunne læse json i req body

app.use("/houses", housesRoutes);
app.use("/teachers", teachersRoutes);
app.use("/students", studentRoutes);
app.use("/courses", coursesRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
