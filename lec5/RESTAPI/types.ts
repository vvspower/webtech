import { studentSchema } from "./models/Student.ts";
import { gradeSchema } from "./models/Grade.ts";
import { headSchema } from "./models/Head.ts";
import { markSchema } from "./models/Mark.ts";
import { InferSchemaType } from "mongoose";

export type Student = InferSchemaType<typeof studentSchema>;
export type Grade = InferSchemaType<typeof gradeSchema>;
export type Head = InferSchemaType<typeof headSchema>;
export type Mark = InferSchemaType<typeof markSchema>;