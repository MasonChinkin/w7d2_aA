# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

t1 = {
    title: 'wash car',
    body: 'with soap',
    done: false
  }
  
t2 = {
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }

Todo.create(t1)
Todo.create(t2)