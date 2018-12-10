layui.config({
	base: '../../static/admin/js/module/'
}).extend({
	dialog: 'dialog',
	// xlsx:'xlsx'
});

layui.use(['form', 'jquery', 'laydate', 'layer', 'laypage', 'dialog','element'], function() {
	var form = layui.form,
		layer = layui.layer,
		$ = layui.jquery,
		dialog = layui.dialog;
	//获取当前iframe的name值
	var iframeObj = $(window.frameElement).attr('name');
	//全选
	form.on('checkbox(allChoose)', function(data) {
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
		child.each(function(index, item) {
			item.checked = data.elem.checked;
		});
		form.render('checkbox');
	});
	//渲染表单
	form.render();

	//顶部批量删除
	$('.delBtn').click(function() {
		var url=$(this).attr('data-url');
		dialog.confirm({
			message:'您确定要删除选中项',
			success:function(){
				layer.msg('删除了')
			},
			cancel:function(){
				layer.msg('取消了')
			}
		})
		return false;

	}).mouseenter(function() {

		dialog.tips('批量删除', '.delBtn');

	})	
	//列表添加
	$('#table-list').on('click', '.add-btn', function() {
		var url=$(this).attr('data-url');
		//将iframeObj传递给父级窗口
		parent.page("菜单添加", url, iframeObj, w = "700px", h = "620px");
		return false;
	})
	//列表删除
	$('#table-list').on('click', '.del-btn', function() {
		var url=$(this).attr('data-url');
		var id = $(this).attr('data-id');
		dialog.confirm({
			message:'您确定要进行删除吗？',
			success:function(){
				layer.msg('确定了')
			},
			cancel:function(){
				layer.msg('取消了')
			}
		})
		return false;
	})
	//列表跳转
	$('#table-list,.tool-btn').on('click', '.go-btn', function() {
		var url=$(this).attr('data-url');
		var id = $(this).attr('data-id');
		window.location.href=url+"?id="+id;
		return false;
	})
	//编辑栏目
	$('#table-list').on('click', '.edit-btn', function() {
		var That = $(this);
		var id = That.attr('data-id');
		var url=That.attr('data-url');
		//将iframeObj传递给父级窗口
		parent.page("菜单编辑", url + "?id=" + id, iframeObj, w = "700px", h = "620px");
		return false;
	})
});

/**
 * 控制iframe窗口的刷新操作
 */
var iframeObjName;

//父级弹出页面
function page(title, url, obj, w, h) {
	if(title == null || title == '') {
		title = false;
	};
	if(url == null || url == '') {
		url = "404.html";
	};
	if(w == null || w == '') {
		w = '700px';
	};
	if(h == null || h == '') {
		h = '350px';
	};
	iframeObjName = obj;
	//如果手机端，全屏显示
	if(window.innerWidth <= 768) {
		var index = layer.open({
			type: 2,
			title: title,
			area: [320, h],
			fixed: false, //不固定
			content: url
		});
		layer.full(index);
	} else {
		var index = layer.open({
			type: 2,
			title: title,
			area: [w, h],
			fixed: false, //不固定
			content: url
		});
	}
}

/**
 * 刷新子页,关闭弹窗
 */
function refresh() {
	//根据传递的name值，获取子iframe窗口，执行刷新
	if(window.frames[iframeObjName]) {
		window.frames[iframeObjName].location.reload();

	} else {
		window.location.reload();
	}

	layer.closeAll();
}


function tableRender(cols,data) {
  layui.use(['table'], function() {
    var table = layui.table;
    table.render({
      elem: '#demo'
      , height: 520
      , url: '' //数据接口
      , data: data
      , title: '用户表'
      , page: true //开启分页
      , loading: true
      , toolbar: '#toolBar' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
      , cols: [cols]
    });
  })
}

function setTable(obj){
  layui.use(['jquery','table','rate'], function() {
    var $ = layui.jquery;
    var table = layui.table;
    var rate = layui.rate;
    tableRender(obj.cols,obj.data);
    $('.addBtn').click(function () {  //add
      layer.open({
        type: 2,
        area: ['700px', '550px'],
        maxmin: true,
        content: obj.addUrl,
				success:function(layero, index){
          obj.addSuc(layero, index) || '';
        },
        end:function(){
          obj.editEnd() || '';
        }
      })
    });

    var editUserData;
    table.on('checkbox(test)', function (obj) {
      editUserData = obj.data;
    });

    $('#edit').click(function () {//edit
      var checkNum = document.querySelectorAll("tbody input[type='checkbox']:checked").length;
      if (checkNum > 1) {
        layer.msg('一次只能编辑一行')
      } else if (checkNum <= 0) {
        layer.msg('请勾选要编辑的那一行');
      } else if (checkNum === 1) {
        layer.open({
          type: 2,
          area: ['700px', '450px'],
          maxmin: true,
          content: obj.editUrl,
          success:function(layero, index){
            obj.editSuc(layero, index) || '';
            var iframe = window['layui-layer-iframe' + index];
            if(obj.editOther && obj.editOther!=undefined){ //编辑没有展示的内容
              $.ajax({
                url: obj.detailGetUrl,
                data: {
                  id: editUserData.id
                },
                method: "POST",
                success(data) {
                  var _data = JSON.parse(data);
                  var toData = _data.data;
                  editUserData = toData[0];
                  console.log(editUserData)
                  iframe.getFromParent(editUserData,obj.editAjaxUrl);
                },
                error() {
                  layer.msg('错误');
                  return;
                }
              })
            }else{
              iframe.getFromParent(editUserData,obj.editAjaxUrl);
            }
          },
          end:function(){
            obj.editEnd() || '';
          }
        })
      }
    })

		$('#delete').click(function(){
		  if(document.querySelectorAll("tbody input[type='checkbox']:checked").length<=0){
		    layer.msg('请至少选中一行经行删除');
		    return;
      }
      layer.confirm('确定要进行删除？', {
        btn: ['确定','取消']
      },function(index){
        deleteCheckbox(obj.editEnd);
        layer.close(layer.index)
      });
    })

    var resetClick = function() {
      $('.detail').click(function () {
        var idX = this.parentNode.parentNode.parentNode.parentNode.children[1].getElementsByTagName('div')[0].innerText;
        layer.open({
          type: 2,
          area: ['600px', '550px'],
          maxmin: true,
          content: obj.detailUrl,
          success: function (layero, index) {
            $.ajax({
              url: obj.detailGetUrl,
              data: {
                id: idX
              },
              method: "POST",
              success(data) {
                var _data = JSON.parse(data);
                var toData = _data.data;
                var iframe = window['layui-layer-iframe' + index];
                iframe.getFromParent(toData);
              },
              error() {
                layer.msg('错误');
              }
            })
          }
        })
      })
      $('.score').click(function () {
        var idX = this.parentNode.parentNode.parentNode.parentNode.children[1].getElementsByTagName('div')[0].innerText;
        $.ajax({
          url:"http://47.106.197.31/manage/api.php?action=isRanked",
          method:"POST",
          data:{id:idX},
          success(data){
            var _data = JSON.parse(data);
              layer.open({
                title:'评分',
                type: 2,
                area: ['300px', '200px'],
                maxmin: true,
                content: obj.scoreUrl,
                success: function (layero, index) {
                  var iframe = window['layui-layer-iframe' + index];
                  iframe.getFromParent(_data,idX);
                }
              })
          }
        })
      })
    }
    //点page 重挂click 太恶心了框架
    $('.layui-table-page').click(function(){
      resetClick();
    })
    resetClick();
  })
}

function echartExcel(result){
  let arr = [];
  let obj = {};
  let xxx;
  let aaa = [];
  let flag=false;
  for(let i in result){
    if(objnum(result[i])===1){
      if(i!=0){
        obj['data'] = aaa;
        arr.push(obj);
        obj = {};
        aaa=[];
      }
      obj['title']=result[i].title;
    }else{
      xxx = {'type':result[i].title,'data':result[i].__EMPTY};
      aaa.push(xxx);
    }
    if(i==result.length-1){
      obj['data'] = aaa;
      arr.push(obj);
      obj = {};
      aaa=[];
    }
  }
  console.log(arr)
  return arr;
}

function objnum(obj){
  let i =0;
  for(let n in obj){
    i++;
  }
  return i;
}

function deleteCheckbox(editEnd){
  var idArr = [];
  layui.use(['jquery','layer'],function(){
    var $ = layui.jquery;
    var checked = document.querySelectorAll("tbody input[type='checkbox']:checked");
    for(let i=0;i<checked.length;i++){
      let tr = checked[i].parentNode.parentNode.parentNode.children[1].getElementsByTagName('div')[0].innerText;
      idArr.push(tr);
    }
    $.ajax({
      url:"http://47.106.197.31/manage/api.php?action=DeleteEvent",
      method:"POST",
      data:{id:idArr},
      success(){
        layer.msg('删除成功')
        editEnd();
      },
      error() {
        layer.msg('错误')
      }
    })
  })
}

//-----------------------------------------------------------------


function setCookie(c_name,value,expiredays){
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getCookie(c_name){
  if (document.cookie.length>0){
    c_start=document.cookie.indexOf(c_name + "=");
    if (c_start!=-1){
      c_start=c_start + c_name.length+1;
      c_end=document.cookie.indexOf(";",c_start);
      if (c_end==-1){
        c_end=document.cookie.length;
      }

      return unescape(document.cookie.substring(c_start,c_end));
    }
  }

  return "";
}