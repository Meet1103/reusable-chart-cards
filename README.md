In this project, I've mainly focus on code reusability and interactivity.

Let me help you to go through to entire codebase and how one can reuse the components.

Card Component -> Card component consist of title, desc and content. It recieves three arguments title, desc and content. Thus it can be reuseable accross codebase via passing different data based on requirements.

Chart Component -> Chart component consist of different charts i.e PieChart, BarChart and so on. I've tried to make it as close as the figma design. Also added few interactivity effects such as hover effects. It recieves one argument i.e. chartData. Thus making charts reusable accross codebase via passing different data based on requirements

Utils -> Utilities consist of chart data based on which chart need to be built. Suppose in future we need one more PieChart with much larger dataset. WE can simply create one more data file and reuse piechart component in our application
