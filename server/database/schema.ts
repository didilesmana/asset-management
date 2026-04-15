import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  department: text('department'),
  location: text('location'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  type: text('type').notNull(), // 'asset', 'accessory', 'consumable', 'component'
});

export const statusLabels = sqliteTable('status_labels', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  color: text('color').notNull().$default(() => '#000000'),
  type: text('type').notNull(), // 'deployable', 'pending', 'archived', 'broken'
});

export const assets = sqliteTable('assets', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  assetTag: text('asset_tag').notNull().unique(),
  model: text('model'),
  serial: text('serial'),
  statusId: integer('status_id').references(() => statusLabels.id),
  categoryId: integer('category_id').references(() => categories.id),
  location: text('location'),
  checkedOutToUserId: integer('checked_out_to_user_id').references(() => users.id),
  checkedOutAt: integer('checked_out_at', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});
