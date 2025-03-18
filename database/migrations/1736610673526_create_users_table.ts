import { Role } from '#enums/roles'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('role_id')
        .notNullable()
        .defaultTo(Role.USER)
        .references('id')
        .inTable('roles')
        .onDelete('RESTRICT')
        .index()
      table.string('full_name').nullable()
      table.string('username').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('avatar_url').nullable()
      table.string('provider').nullable()
      table.string('provider_id').nullable()
      table.boolean('is_email_verified').notNullable().defaultTo(false)
      table.timestamp('email_verified_at').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
