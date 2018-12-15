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
  "edit_time":'编辑时间',
  "created_at":"创建时间",
  "not_before":"截至时间",
  "mission_type":"事件类型",
  "mission_level":"任务等级",
  "score":"任务得分",
  "source":"事件来源",
  "operator":"任务发布人"
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
  // "type":{title:'事件类型',option:['民事纠纷','市政环卫','物业管理','隐患排查','其他']},
  "type":"类型",
  "level":{title:'事件级别',option:['紧急','一般']},
  "content":"内容",
  "grid":"所属网格",
  "area":"所属区域",
  "log_name":"日志名称",
  "log_type":{title:'类型',option:['巡查','走访 ','宣传','处理','重点人员寻访']},
  "not_before":"截至时间",
  "mission_title":"任务标题",
  "mission_level":{title:"任务等级",option:['一级','二级','三级']},
  "mission_people":{title:'任务人数',checkout:['1','2','3']},
  "mission_type":{title:'任务类型',option:['群体活动','宣传活动 ','寻访活动','工作例会','通知']}
};

const optionAdd = ['name','priv_id','role_id','level','is_duban','supervise','log_type','mission_level','mission_type'];
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
    ['Work/missionList','Work/missionAdd','Work/missionDelete','Work/missionResult','Work/missionEdit','Work/missionAvailablePeople'],
    ['Work/missionAdmitList'],
    ['Work/dailyWorkList','Work/dailyWorkAdd','Work/dailyWorkDelete','/Work/dailyWorkEdit'],
    ['Work/emergencyList','Work/emergencyAdd'],
    ['Work/transferredEmergencyList']
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

const timeID = ['time','time2'];

const xxx = [
  {0:'org_id',1:''},
  {0:'grid_id',1:''},
  {0:'building_id',1:''},
  {0:'grid_admin_id',1:''},
  {0:'unit_id',1:''},
  {0:'housing_property',1:''},
  {0:'city',1:'所在城市'},
  {0:'self_name',1:''},
  {0:'resident_district',1:''},
  {0:'resident_province',1:''},
  {0:'resident_address',1:''},
  {0:'edit_time',1:'录入时间'},
  {0:'state',1:''},
  {0:'properties',1:''},
  {0:'edit_people_id',1:''}
];

var sdlrData = [
  [
    {0:'id',1:'ID'},
    {0:'area',1:'所属区域'},
    {0:'population_type',1:'人口类型'},
    {0:'username',1:'姓名'},
    {0:'sex',1:{title:'性别',option:['男','女']}},
    {0:'native_place',1:'籍贯'},
    {0:'aga',1:'年龄'},
    {0:'ethnicity',1:'民族'},
    {0:'id_number',1:'身份证'},
    {0:'birth_data',1:'出生日期'},
    {0:'is_insured',1:{title:'是否参保',option:['否','是']}},
    {0:'is_renthouse',1:{title:'是否为出租房',option:['否','是']}},
    {0:'marriage',1:{title:'婚姻状况',option:['未婚','已婚']}},
    {0:'phone',1:'联系电话'},
    {0:'political_status',1:{title:'政治面貌',option:['党员','预备党员','团员','民革党员','民盟盟员','民建会员','民进会员','农工党党员','致公党党员','九三学社社员','台盟盟员','无党派人士','群众']}},
    {0:'education',1:{title:'文化程度',option:['博士','硕士','本科','大专','中专/中技','高中','初中','小学','其他']}},
    {0:'occupation',1:'职业'},
    {0:'work_place',1:'工作地点'},
    {0:'pic',1:'上传照片'},
    {0:'address',1:'现居住地'},
    {0:'car_info',1:'汽车信息'},
    {0:'living_reason',1:'居住事由'},
    {0:'floating_reason',1:'流动原因'},
    {0:'in_date',1:'来本市日期'},
    {0:'has_jycard',1:{title:'是否办理缙云卡',option:['否','是']}},
    {0:'out_date',1:'流出时间'},
    {0:'out_province',1:'流出到省'},
    {0:'out_city',1:'流出到市'},
    {0:'out_district',1:'流出到区（县）'},
    {0:'out_address',1:'流往地详址'},
    {0:'enterprise_name',1:'工作单位'},
    {0:'enterprise_type',1:'企业性质'},
    {0:'enterprise_contact',1:'组织关系'},
    {0:'enterprise_address',1:'单位地址'}
  ],
  [
    {0:'relation_with_host',1:'与房主关系'},
    {0:'house_code',1:'房号'}
  ],
  [
    {0:'agent_name',1:'代理人姓名'},
    {0:'agent_address',1:'代理人地址'},
    {0:'agent_enterprise_address',1:'代理单位地址'},
    {0:'agent_enterprise_name',1:'代理单位名称'},
    {0:'agent_enterprise_contact',1:'代理单位联系人'}
  ],
  [
    {0:'comment',1:'备注'}
  ]
];

const sdlvTime = ['birth_data','in_date','out_date'];
const sdlrOption = ['sex','is_insured','is_renthouse','marriage','political_status','education','has_jycard'];
