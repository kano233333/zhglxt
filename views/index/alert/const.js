const ys = {
  "id": "ID",
  "area": "所属区域",
  "status": "状态",
  "grid": "所属网格",
  "time": "时间",
  "title": "标题",
  "level": "程度",
  "type": "类型",
  "organizer": "发起人",
  "rank":"评分",
  "img_path":'图片',
  "resource":'来源',
  "content":"内容",
  "gridman":"网格人",
  "is_duban":"是否督办",
  "latitude":"经度",
  "longitude":"维度",
  "address":"地址",
  "log_name":'日志名称',
  "grid_admin":'网格管理员',
  "log_type":'类型',
  "edit_time":'编辑时间'
};

const level = {
  0:"紧急",
  1:"一般"
};

const dealStatus = {
  0:"未处理",
  1:"处理中",
  2:"已结办"
};

const scoreXX = {
  1:"差",
  2:'中',
  3:"良",
  4:'优'
};

const allow = {
  'username':'用户名',
  'realname':'真实姓名',
  'scope':"所在区域",
  'phone':"常用电话",
  "name":{title:'角色名称',option:['社区居民','管理员','网格管理员']},
  "priv_id":{title:'权限',option:[1,2,3,4,5,6,7]},
  "title":"标题",
  "type":{title:'事件类型',option:['民事纠纷','市政环卫','物业管理','隐患排查','其他']},
  "level":{title:'事件级别',option:['紧急','一般']},
  "content":"事件内容",
  "grid":"所属网格",
  "area":"所属区域",
  "log_name":"日志名称",
  "log_type":{title:'类型',option:['巡查','走访 ','宣传','处理','重点人员寻访']}
};

const optionAdd = ['name','priv_id','role_id','level','is_duban','supervise','type','log_type','mission_level','mission_type'];
const optionAddIndex = ['name'];
const postFile = ['file','img_src','img_path'];
const optionPostValue = ['mission_level','mission_type'];
const postTime = ['not_before'];
const checkoutAdd = ['mission_people'];

const eventType = {
  0:'民事纠纷',
  1:"市政环卫",
  2:"物业管理",
  3:"隐患排查",
  4:"其他"
};

const eventResource = {
  0:'群众发现',
  1:"自己发现",
  2:"上级安排"
};

const yesNo = {
  0:'否',
  1:'是'
};

const globalUrl = "http://web.cqupt.store/public/index.php/index/";
const otherUrl = {
  User:['User/registerForWeb','User/login'],
  Work:[
    ['Work/missionList','Work/missionAdd','Work/missionDelete','Work/missionResult'],
    [],
    ['Work/dailyWorkList','Work/dailyWorkAdd','Work/dailyWorkDelete','/Work/dailyWorkEdit']
  ]
};

const logType = {
  1:'巡查',
  2:'走访',
  3:'宣传',
  4:'处理',
  5:'重点人员寻访'
};

const indexOne = ['role_id','log_type'];
