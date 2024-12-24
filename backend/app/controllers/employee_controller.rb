class EmployeeController < Sinatra::Base
    set :views, File.expand_path('../../views/employees', __FILE__)
  
    # Route để hiển thị danh sách nhân viên
    get '/' do
      @employees = Employee.all
      slim :index
    end
  
    # Route để hiển thị form thêm nhân viên mới
    get '/new' do
      slim :new
    end
  
    # Route xử lý việc thêm nhân viên vào cơ sở dữ liệu
    post '/' do
      Employee.create(params[:employee])
      redirect '/'
    end
  
    # Route để hiển thị form chỉnh sửa thông tin nhân viên
    get '/:id/edit' do
      @employee = Employee.find(params[:id])
      slim :edit
    end
  
    # Route xử lý cập nhật thông tin nhân viên
    put '/:id' do
      employee = Employee.find(params[:id])
      employee.update(params[:employee])
      redirect '/'
    end
  
    # Route để xóa nhân viên
    delete '/:id' do
      Employee.find(params[:id]).destroy
      redirect '/'
    end
  end
  