module Api::V1
  class GreetingsController < ApplicationController
    def index
      render json: { message: 'Hello Rails React' }
    end
  end
end
