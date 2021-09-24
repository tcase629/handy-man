5.times do
  @worker = Worker.create(
    name: Faker::FunnyName.name, 
    specialty: Faker::Job.field,
    phone: Faker::Number.number
  )

  2.times do
    Service.create(
      serv_type: Faker::Hobby.activity,
      worker_id: @worker.id
    )
  end
end
puts "Data seeded yo!"
@workers = Worker.all
@services = Service.all
p @workers
p @services