<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="echarts.min.js"></script>
    <script src="jquery.min.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 初始化两个数组，盛装从数据库中获取到的数据
        var clothess=[], saless=[];
        function TestAjax(){
             $.ajax({
                  type:"post",
                  async:false,
                  url:"sql.php",
                  data:{},
                  dataType:"json",
                  success:function(result){
                    if (result) {
                      for (var i = 0; i < result.length; i++) {
                        //   console.log(result[i].place);
                          clothess.push(result[i].clothes);
                          saless.push(result[i].sales);
                      }
                    }
                  }
                })
            return clothess, saless;
        }
 
        //执行异步请求
        TestAjax();
 
        // 指定图表的配置项和数据
        var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['销量']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : clothess
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"销量",
                            "type":"pie",
                            "data": saless
                        }
                    ]
                };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
</body>
</html>