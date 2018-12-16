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
  "operator":"任务发布人",
  "communication_phone":'联系电话',
  'office_phone':'办公电话',
  "service_area":'服务区域',
  'father_code':'',

};

const level = {
  0:"",
  1:"一级",
  2:"二级",
  3:'三级'
};

const dealStatus = {
  0:"未处理未转派",
  1:"已转派未受理",
  2:"已受理",
  3:'已办结'
};

const scoreXX = {
  1:"差",
  2:'中',
  3:"良",
  4:'优'
};

const allow = {
  'name':'姓名',
  'scope':"所在区域",
  'phone':"常用电话",
  "identity":'身份',
  "priv_id":{title:'权限',option:[1,2,3,4,5,6,7]},
  "title":"标题",
  "type":"类型",
  "level":{title:'事件级别',option:['一级','二级','三级']},
  "content":"内容",
  "grid":"所属网格",
  "area":"所属区域",
  "log_name":"日志名称",
  "log_type":{title:'类型',option:['巡查','走访 ','宣传','处理','重点人员寻访']},
  "not_before":"截至时间",
  "mission_title":"任务标题",
  "mission_level":{title:"任务等级",option:['一级','二级','三级']},
  "mission_type":{title:'任务类型',option:['群体活动','宣传活动 ','寻访活动','工作例会','通知']},
  "is_important":{title:'是否重点事件',option:['否','是']},
  "emergency_level":{title:'事件等级',option:['一级','二级','三级']},
  'emergency_source':"事件来源",
  "emergency_type":"事件类型",
  "password":'密码',
  "user_state":{title:'用户状态',option:[0,1]},
  "communicate_phone":"联系电话",
  'office_phone':'办公电话',

};

const optionAdd = ['priv_id','role_id','level','is_duban','supervise','log_type','mission_level','mission_type','is_important','emergency_level','user_state'];
const postFile = ['file','img_src','img_path','pic'];
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
    ['Work/emergencyList','Work/emergencyAdd','Work/emergencyDelete','Work/emergencyEdit'],
    ['Work/transferredEmergencyList']
  ],
  System:['System/userManager','System/userEdit','System/powerList']
};

const logType = {
  1:'巡查',
  2:'走访',
  3:'宣传',
  4:'处理',
  5:'重点人员寻访'
};

const indexOne = ['role_id','log_type','emergency_level'];

const timeID = ['time','time2'];

const xxx = [
  {0:'state',1:''},
  {0:'edit_people_id',1:''}
];

const aaa = [
  {0:'no',1:'序号'},
  {0:'community_id',1:'所属小区'},
  {0:'username',1:'姓名'},
  {0:'sex',1:{title:'性别',option:['男','女']}},
  {0:'age',1:'年龄'},
  {0:'resident_province',1:'户籍省'},
  {0:'resident_district',1:'户籍市'},
  {0:'city',1:'户籍县(区)'},
  {0:'resident_address',1:'户籍详址'},
  {0:'living_reason',1:'居住事由'},
  {0:'native_place',1:'籍贯'},
  {0:'ethnicity',1:'民族'},
  {0:'id_number',1:'身份证号'},
  {0:'birth_data',1:'出生日期'},
  {0:'org_id',1:'组织关系'},
  {0:'grid',1:'所属网格'},
  {0:'building_id',1:'所属楼栋'},
  {0:'unit_id',1:'所属单元'},
  {0:'is_insured',1:{title:'是否参保',option:['否','是']}},
  {0:'marriage',1:{title:'婚姻状况',option:['未婚','已婚']}},
  {0:'political_status',1:{title:'政治面貌',option:['党员','预备党员','团员','民革党员','民盟盟员','民建会员','民进会员','农工党党员','致公党党员','九三学社社员','台盟盟员','无党派人士','群众']}},
  {0:'phone',1:'联系电话'},
  {0:'education',1:{title:'文化程度',option:['博士','硕士','本科','大专','中专/中技','高中','初中','小学','其他']}},
  {0:'occupation',1:'职业'},
  {0:'enterprise_type',1:'企业性质'},
  {0:'work_place',1:'工作地点'},
  {0:'housing_property',1:'房屋性质'},
  {0:'address',1:'街路巷（组）'},
  {0:'house_code',1:'门牌号'},
  {0:'is_renthouse',1:{title:'是否为出租房',option:['否','是']}},
  {0:'room_code',1:'房号'},
  {0:'self_name',1:'(个人产权)姓名'},
  {0:'enterprise_name',1:'(单位产权)单位名称'},
  {0:'enterprise_address',1:'(单位产权)单位地址'},
  {0:'agent_name',1:'(代理人信息)姓名'},
  {0:'agent_address',1:'(代理人信息)联系地址'},
  {0:'agent_enterprise_address',1:'(代理单位信息)单位地址'},
  {0:'agent_enterprise_name',1:'(代理单位信息)单位名称'},
  {0:'agent_enterprise_contact',1:'(代理单位信息)联系人'},
  {0:'population_type',1:'人口类型'},
  {0:'floating_reason',1:'流动原因'},
  {0:'relation_with_host',1:'与户主关系'},
  {0:'in_data',1:'来本市日期'},
  {0:'has_jycard',1:{title:'是否办理缙云卡',option:['否','是']}},
  {0:'out_data',1:'流出到省'},
  {0:'out_province',1:'流出到市'},
  {0:'out_city',1:'流出到区（县）'},
  {0:'out_district',1:'流往地详址'},
  {0:'edit_people',1:'录入人'},
  {0:'comment',1:'注释'},
  {0:'pic',1:'图片网址'}
];

const bbb = [
  {0:'is_single_old',1:'独居老人'},
  {0:'mental_disease',1:'精神障碍'},
  {0:'is_correctional',1:'社区矫正人员'},
  {0:'is_released',1:'刑满释放人员'},
  {0:'is_xj',1:'XJ人员'},
  {0:'is_xd',1:'XD人员'},
  {0:'is_special_care',1:'优抚对象'},
  {0:'is_disabled',1:'残疾人'},
  {0:'is_leftover_children',1:'留守儿童'},
  {0:'has_critical_disease',1:'重疾人员'},
  {0:'is_empty_nester',1:'空巢老人'},
  {0:'is_poor',1:'经济困难人员'},
  {0:'is_veteran',1:'退伍军人'},
  {0:'is_single_parent',1:'单亲家庭'},
  {0:'is_jobless',1:'下岗职工'},
  {0:'is_sanwu',1:'三无人员'},
  {0:'is_dibao',1:'低保人员'},
  {0:'is_overseas_student',1:'留学人员'},
  {0:'is_overseas_chinese',1:'归国华侨'},
  {0:'is_cflac_member',1:'文联会员'},
  {0:'is_ftu_member',1:'工会会员'}
];

const sdlvTime = ['birth_data','in_date','out_date'];
const sdlrOption = ['sex','is_insured','is_renthouse','marriage','political_status','education','has_jycard'];


const sexIndex = {0:'男',1:'女'};
const dataYesNo = ['has_jycard','is_renthouse','is_insured','sex'];