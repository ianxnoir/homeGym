import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('goal',(table)=>{
        table.increments()
        table.string('goal').notNullable()
    })

    await knex.schema.createTable('frequency',(table)=>{
        table.increments()
        table.string('frequency').notNullable()
    })

    await knex.schema.createTable('focus',(table)=>{
        table.increments()
        table.string('focus').notNullable()
    })


    await knex.schema.createTable('user',(table)=>{
        table.increments()
        table.string('displayname').notNullable()
        // table.string('firstName').notNullable()
        // table.string('lastName').notNullable()
        table.string('email').notNullable()
        table.string('password')
        table.integer('height')
        table.integer('weight')
        table.timestamp('DOB')
     
        table.integer('quota').notNullable().defaultTo(0)

        table.string("gender"),
        table.string("role"),
        table.integer('goal_id'),
        table.integer('frequency_id'),
        table.integer('focus_id'),

        table.timestamps(false, true)
        table.foreign("goal_id").references("goal.id")
        table.foreign("frequency_id").references("frequency.id")
        table.foreign("focus_id").references("focus.id")
    })


    await knex.schema.createTable('pt',(table)=>{
        table.increments()

        table.jsonb("qualification")
        table.jsonb("speciality")
        table.text("intro")
        table.string("preview_filepath")
        table.integer("user_id")

        table.foreign("user_id").references("user.id")
    })

    await knex.schema.createTable('category',(table)=>{
        table.increments()
        table.string('category')
    })

    await knex.schema.createTable('package',(table)=>{
        table.increments()
        table.string("package_name").notNullable()
        table.integer("price").notNullable()
        table.integer("credit").notNullable()
        table.jsonb("description").notNullable()
    })

    await knex.schema.createTable('transaction',(table)=>{
        table.increments()
        table.integer("package_id")
        table.integer("user_id")
        table.timestamps(false, true)

        table.foreign('package_id').references("package.id")
        table.foreign('user_id').references("user.id")
        
    })

    await knex.schema.createTable('course',(table)=>{
        table.increments()
        table.integer("pt_id")
        table.integer("category_id1")
        table.integer("category_id2")
        table.string("course_name").notNullable()
        table.integer("seat").notNullable().defaultTo(3)
        table.text("detail").notNullable()

        table.foreign('pt_id').references("pt.id")
        table.foreign('category_id1').references("category.id")
        table.foreign('category_id2').references("category.id")
    })


    await knex.schema.createTable('timeslot',(table)=>{
        table.increments()
        table.integer("course_id")
        table.timestamp("start").notNullable()
        table.timestamp("end").notNullable()
        table.string("zoomlink").notNullable()

        table.foreign('course_id').references("course.id")
    })

    await knex.schema.createTable('registered_timeslot',(table)=>{
        table.increments()
        table.integer("timeslot_id")
        table.integer("user_id")

        table.foreign('timeslot_id').references("timeslot.id")
        table.foreign('user_id').references("user.id")
    })

    await knex.schema.createTable('notification',(table)=>{
        table.increments()
        table.integer("user_id")
        table.text("content")
        table.timestamps(false, true)
     
        table.boolean("is_read").notNullable().defaultTo(false)
        table.foreign("user_id").references("user.id")
    
    })


    await knex.schema.createTable('rating',(table)=>{
        table.increments()
        table.integer("user_id")
        table.integer("pt_id")
        table.text("content").nullable()
        table.integer("score").nullable()
        table.timestamps(false, true);


        table.foreign("user_id").references("user.id")
        table.foreign("pt_id").references("pt.id")
    })

    await knex.schema.createTable('bookmarked_pt',(table)=>{
        table.increments()
        table.integer("user_id")
        table.integer("pt_id")

        table.foreign("user_id").references("user.id")
        table.foreign("pt_id").references("pt.id")

    })

    await knex.schema.createTable('pt_file',(table)=>{
        table.increments()
        table.string("filepath")
        table.integer("pt_id")
        table.boolean("isVideo").notNullable().defaultTo(false)
        table.foreign("pt_id").references("pt.id")
    })


}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("pt_file");
    await knex.schema.dropTableIfExists("bookmarked_pt");
    await knex.schema.dropTableIfExists("rating");
    await knex.schema.dropTableIfExists("notification");
    await knex.schema.dropTableIfExists("registered_timeslot");
    await knex.schema.dropTableIfExists("timeslot");
    await knex.schema.dropTableIfExists("course");
    await knex.schema.dropTableIfExists("transaction");
    await knex.schema.dropTableIfExists("package");
    await knex.schema.dropTableIfExists("category");
    await knex.schema.dropTableIfExists("pt");
    await knex.schema.dropTableIfExists("user");
    await knex.schema.dropTableIfExists("goal");
    await knex.schema.dropTableIfExists("frequency");
    await knex.schema.dropTableIfExists("focus");
}