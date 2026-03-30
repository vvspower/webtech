import mongoose, { type Model } from "mongoose";


import { Student } from "./Student.ts";
import { Grade } from "./Grade.ts";
import { Head } from "./Head.ts";
import { Mark } from "./Mark.ts";


import type {
    Student as StudentType,
    Mark as MarkType,
    Grade as GradeType,
    Head as HeadType
} from "../types.ts";

const mongoUri = "mongodb://localhost:27017/recapsheet?directConnection=true";

// /---------------------Singleton Connection----------------------/ 

let connectionPromise: Promise<typeof mongoose> | null = null;

async function ensureConnection() {
    if (!connectionPromise) {
        connectionPromise = mongoose.connect(mongoUri);
    }
    return connectionPromise;
}

await ensureConnection();

// /---------------------------------------------------------------/ 

export const db = {
    Student,
    Grade,
    Head,
    Mark
} satisfies {
    Student: Model<StudentType>,
    Grade: Model<GradeType>,
    Head: Model<HeadType>,
    Mark: Model<MarkType>
} 