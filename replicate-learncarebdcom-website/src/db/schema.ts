import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // spoken | ielts | grammar | vocabulary
  level: text("level").notNull(),
  price: integer("price").notNull(),
  oldPrice: integer("old_price"),
  durationWeeks: integer("duration_weeks").notNull(),
  lessons: integer("lessons").notNull(),
  rating: integer("rating").notNull().default(48), // stored x10 (4.8)
  students: integer("students").notNull().default(0),
  instructor: text("instructor").notNull(),
  image: text("image").notNull(),
  highlights: jsonb("highlights").$type<string[]>().notNull().default([]),
  curriculum: jsonb("curriculum")
    .$type<{ module: string; title: string; lessons: number; hours: string }[]>()
    .notNull()
    .default([]),
  isFeatured: boolean("is_featured").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tools = pgTable("tools", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  titleBn: text("title_bn"),
  description: text("description").notNull(),
  category: text("category").notNull(), // spoken | ielts
  badge: text("badge").notNull().default("100% Free"),
  icon: text("icon").notNull().default("📘"),
  href: text("href").notNull(),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  courseId: integer("course_id").notNull(),
  note: text("note"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Course = typeof courses.$inferSelect;
export type Tool = typeof tools.$inferSelect;
