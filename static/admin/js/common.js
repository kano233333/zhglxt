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

function setTable(addUrl,editUrl,cols,data,editSuc,editEnd){
  layui.use(['jquery','table'], function() {
    var $ = layui.jquery;
    var table = layui.table;
    tableRender(cols,data);
    $('.addBtn').click(function () {
      layer.open({
        type: 2,
        area: ['700px', '550px'],
        maxmin: true,
        content: addUrl
      })
    });

    var editUserData;
    var checkNum = 0;
    table.on('checkbox(test)', function (obj) {
      if (obj.checked) {
        editUserData = obj.data;
        checkNum++;
      } else {
        checkNum--;
      }
    });

    $('#edit').click(function () {
      if (checkNum > 1) {
        layer.msg('一次只能编辑一行')
      } else if (checkNum <= 0) {
        layer.msg('请勾选要编辑的那一行');
      } else if (checkNum === 1) {
        layer.open({
          type: 2,
          area: ['700px', '450px'],
          maxmin: true,
          content: editUrl,
          success:function(layero, index){
            editSuc(layero, index) || '';
          },
          end:function(){
            editEnd() || '';
          }
        })
      }
    })
  })
}
