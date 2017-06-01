require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do
  describe '#index' do
    it 'shows the static page on an http GET request' do
      get :index
      expect(response).to have_http_status :success
    end
  end

end
