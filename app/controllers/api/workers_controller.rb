class Api::WorkersController < ApplicationController
	#  no new and edit because that is in the front end now
	# only the crud action
	# new or the edit is no longer here
	# index, show, create, update, destroy 
	# we are no longer redirecting because this is only the back end.
	# we will now only be returning data
	# json is a good object notation for passing data from react to rails and rials to react
	def index
		render json: Worker.all
	end

	def show
		@worker = Worker.find(params[:id])
		render json: @worker
	end

	def create
		@worker = Worker.new(worker_params)
		if @worker.save
			render json: @worker
		else
			render json: { errors: @worker.errors }, status: :unprocessable_entity
	end
end

	def update
		@worker = Worker.find(params[:id])
		if @worker.update(worker_params)
			render json: @worker
		else
			render json: { errors: @worker.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		Worker.find(params[:id]).destroy
		render json: { message: 'Worker Deleted'}

	end
	private
		# { worker: {title: "", complete: false}} we need to keep this in mind because we need to pass that format when we are doing a create
		def worker_params
			params.require(:worker).permit(:name, :speciality, :phone)
		end
end


# slacked out at 7:23 pm