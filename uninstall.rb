require 'fileutils'

js_files = ['js_runit.js', 'js_tests_example.js']
control_files = ['js_runit_controller.rb']
view_files = ['index.erb']

javascript_path = '/../../../public/javascripts/'
controller_path = '/../../../public/javascripts/'
view_path = '/../../../app/controllers/'

def delete(path, files, msg)
  h_f = "--------------------------------------"

  puts "Deleting " + msg + " . . ."
  puts "         " + h_f

  for file in files
    puts "         " + file
    FileUtils.remove_file(Dir[File.dirname(__FILE__) + path + file])
  end

  puts "         " + h_f
  puts ". . . Done"
  puts ""

end

delete(javascript_path, js_files, "Javascript")
delete(controller_path, control_files, "Controller")
delete(view_path, view_files, "View")

puts "Deleting view directory for js_runit . . ."
#TODO delete_view_dir
FileUtils.remove_file(view_path + 'js_runit')
puts ". . . Done"
