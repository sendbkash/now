import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { courses, enrollments, inquiries, tools } from "@/db/schema";
import { ensureSeed } from "@/db/seed";

export async function getCourses(category?: string, featuredOnly = false) {
  await ensureSeed();
  const rows = await db.select().from(courses).orderBy(desc(courses.isFeatured), desc(courses.students));
  return rows.filter(
    (c) => (!category || category === "all" || c.category === category) && (!featuredOnly || c.isFeatured),
  );
}

export async function getCourseBySlug(slug: string) {
  await ensureSeed();
  const rows = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
  return rows[0] ?? null;
}

export async function getTools(category?: string) {
  await ensureSeed();
  const rows = await db.select().from(tools).orderBy(tools.sortOrder);
  return rows.filter((t) => !category || category === "all" || t.category === category);
}

export async function createEnrollment(input: {
  name: string;
  phone: string;
  email?: string;
  courseId: number;
  note?: string;
}) {
  const rows = await db.insert(enrollments).values(input).returning({ id: enrollments.id });
  return rows[0];
}

export async function createInquiry(input: {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}) {
  const rows = await db.insert(inquiries).values(input).returning({ id: inquiries.id });
  return rows[0];
}
