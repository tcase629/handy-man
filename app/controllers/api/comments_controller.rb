class Api::CommentsController < ApplicationController
	def index
		render json: @service.comments
	end

	def show
		@comment = @service.comments.find(params[:id])
		render json: @service
	end

	def create
		@comment = @service.comments.new(comment_params)
		if @comment.save
			render json: @comment
		else
			render json: { errors: @comment.errors }, status: :unprocessable_entity
	end
end

	def update
		@comment = @service.comments.find(params[:id])
		if @comment.update(comment_params)
			render json: @comment
		else
			render json: { errors: @comment.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		@service.comments.find(params[:id]).destroy
		render json: { message: 'Comment Deleted'}

	private 
		def comment_params
		params.require(:comment).permit(:title, :body)
	end
end
