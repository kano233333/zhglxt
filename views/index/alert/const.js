const ys = {
  "id": "ID",
  "status": "状态",
  "grid": "所属网格",
  "time": "时间",
  "title": "标题",
  "level": "程度",
  "type": "类型",
  "organizer": "发起人",
  "rank":"评分",
  "img_path":'图片',
  'pic':'图片',
  "resource":'来源',
  "content":"内容",
  "gridman":"网格人",
  "is_duban":"是否督办",
  "latitude":"经度",
  "longitude":"维度",
  "log_name":'日志名称',
  "grid_admin":'网格管理员',
  "log_type":'类型',
  "edit_time":'编辑时间',
  "created_at":"创建时间",
  "not_before":"截至时间",
  "mission_type":"事件类型",
  "mission_level":"任务等级",
  "source":"事件来源",
  "operator":"任务发布人",
  "communication_phone":'联系电话',
  'office_phone':'办公电话',
  "service_area":'服务区域',
  'father_code':'父级代码',
  'spell':'行政区划简拼',
  "code":'行政区划代码',
  'area_level':'行政区划级别',
  
  "name":'网格名称',
  "score":"评分情况",
  "score_content":"评分备注",
  //人口表部分
  'no':'序号',
  'community_id':'所属小区',
  'username':'姓名',
  'sex':'性别',
  'age':'年龄',
  'resident_province':'户籍省',
  'resident_district':'户籍市',
  'city':'户籍县(区)',
  'resident_address':'户籍详址',
  'living_reason':'居住事由',
  'native_place':'籍贯',
  'ethnicity':'民族',
  'id_number':'身份证号',
  'grid':'所属网格',
  'building_id':'所属楼栋',
  'marriage':'婚姻状况',
  'political_status':'政治面貌',
  'phone':'联系电话',
  'education':'文化程度',
  'housing_property':'房屋性质',
  'address':'住址',
  'house_code':'门牌号',
  'is_renthouse':'是否为出租房',
  'room_code':'房号',
  'self_name':'(个人产权)姓名',
  'population_type':'人口类型',
  'relation_with_host':'与户主关系',
  // 暂时不用的数据
  // 'birth_date':'出生日期',
  // 'org_id':'组织关系',
  // 'unit_id':'所属单元',
  // 'is_insured':'是否参保',
  // 'occupation':'职业',
  // 'enterprise_type':'企业性质',
  // 'work_place':'工作地点',
  // 'enterprise_name':'(单位产权)单位名称',
  // 'enterprise_address':'(单位产权)单位地址',
  // 'agent_name':'(代理人信息)姓名',
  // 'agent_address':'(代理人信息)联系地址',
  // 'agent_enterprise_address':'(代理单位信息)单位地址',
  // 'agent_enterprise_name':'(代理单位信息)单位名称',
  // 'agent_enterprise_contact':'(代理单位信息)联系人',
  // 'floating_reason':'流动原因',
  // 'in_data':'来本市日期',
  // 'has_jycard':'是否办理缙云卡',
  // 'out_data':'流出时间',
  // 'out_province':'流出到省',
  // 'out_city':'流出到市',
  // 'out_district':'流往地详址',
  'edit_people':'录入人',
  'comment':'注释',
  'pic':'图片网址',
  /*%%%%%%%%%%%%%%%%%%%%  zhouyang  %%%%%%%%%%%%%%%%%%%%*/
  'courtName':     '小区名称',
  'propertyName':  '物业公司',
  'courtArea':     '小区面积',
  'editCourtDate': '编辑时间',
  'blockCount':    '楼栋总数',
  'editCourtName': '编辑人',
  'courtPic':      '小区地址',
  'courtAudit':         '审核状态',

  'block_name':         '楼栋名称',
  'court_id':           '所属小区',
  'grid_id':            '所属网格',
  //'block_admintor':     '网格管理员',
  'unit_count':         '总单元数',
  'block_audit':              '审核状态',
  'block_admintor':     '楼 栋 长',
  'block_admintor_tel': '联系电话',
  'edit_block_name':     '编 辑 人',
  'edit_block_date':    '编辑时间',

  'facility_type': '公共设施类别',
  'facility_name': '公共设施名称',
  'facility_site': '公共设施地址',
  'facility_status':         '状态',

  'area':     '所属区域',
  //'level':    '道路等级',
  'road_name':     '道路名称',
  'length':   '长度',
  'width':    '宽度',
  'lane':     '车道数',
  'one_lane': '单车道',
  'road_audit':    '状态',

  'store_name':   '商铺名称',
  'store_holder': '商铺店主',
  'store_area':   '商铺面积',
  'store_audit':  '状态',
  'store_address': '商铺地址',
  'holder_tel':'店主电话',
  'sale_area':'经营范围',
  /*%%%%%%%%%%%%%%%%%%%%  zhouyang  %%%%%%%%%%%%%%%%%%%%*/
  //房屋（户主)
  'house_num': '门牌号',
  'block': '所属楼栋',
  'unit': '所属单元',
  'house_area': '房屋面积',
  'house_audit': '审核状态',
  'house_type': '房屋户型',
  'house_status': '房屋状态',
  'edit_house_name': '编辑人',
  'edit_house_date': '编辑时间',
  'house_site': '房屋地址',
  'house_holder': '房主姓名',
  'people_number': '居住人数',
  'holder_tel': '房主电话',
  'house_site2': '户籍地址'

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

const optionAdd = ['priv_id','role_id','level','is_duban','supervise','log_type','mission_level','mission_type','is_important','emergency_level','user_state','sex','userStatusOption',
                    'house_status','house_type','facility_type','road_level','one_lane','industry','property','company_size','one_lane','area','grid',
                    'is_single_parent','is_single_old','metal_disease','metal_disease','is_correctional','is_released','is_xj','is_xd','is_special_care','is_disabled','is_leftover_children','has_critical_disease','is_empty_nester','is_poor','is_veteran','is_jobless','is_sanwu','is_dibao','is_overseas_student','is_overseas_chinese','is_cflac_member','is_ftu_member','has_jycard'];
const postFile = ['file','img_src','img_path','pic'];
const optionPostValue = ['house_type','house_status','house_type','facility_type','road_level','one_lane','industry','property','company_size','one_lane'];
const postTime = ['not_before'];
const checkoutAdd = ['mission_people'];
const passwd = ['password'];
const checkOne = [];
const postTimeYear = ['in_date','edit_time','birth_date'];  //年月日
const postTimeNor = [];


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

const globalUrl = "http://58.144.34.96:5000/web_manager/public/index.php/index/";
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

const indexOne = ['role_id','log_type','emergency_level','grid','sex'];

const timeID = ['time','time2'];

const xxx = [
  {0:'state',1:''},
  {0:'edit_people_id',1:''}
];

const aaa = [
  // {0:'no',1:'序号'},
  {0:"area",1:{title:'所属区域',option:['天府镇']}},
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
  // {0:'birth_data',1:'出生日期'},
  // {0:'org_id',1:'组织关系'},
  {0:"grid",1:{title:'网格',option:{
    0:"代家沟组",
    1:"自生桥组",
    2:"三才生组",
    3:"土地垭组",
  }}},
  {0:'building_id',1:'所属楼栋'},
  // {0:'unit_id',1:'所属单元'},
  // {0:'is_insured',1:{title:'是否参保',option:['否','是']}},
  {0:'marriage',1:{title:'婚姻状况',option:['未婚','已婚']}},
  {0:'political_status',1:{title:'政治面貌',option:['党员','预备党员','团员','民革党员','民盟盟员','民建会员','民进会员','农工党党员','致公党党员','九三学社社员','台盟盟员','无党派人士','群众']}},
  {0:'phone',1:'联系电话'},
  {0:'education',1:{title:'文化程度',option:['博士','硕士','本科','大专','中专/中技','高中','初中','小学','其他']}},
  // {0:'occupation',1:'职业'},
  // {0:'enterprise_type',1:'企业性质'},
  // {0:'work_place',1:'工作地点'},
  {0:'housing_property',1:'房屋性质'},
  {0:'address',1:'街路巷（组）'},
  {0:'house_code',1:'门牌号'},
  {0:'is_renthouse',1:{title:'是否为出租房',option:['否','是']}},
  {0:'room_code',1:'房号'},
  {0:'self_name',1:'(个人产权)姓名'},
  // {0:'enterprise_name',1:'(单位产权)单位名称'},
  // {0:'enterprise_address',1:'(单位产权)单位地址'},
  // {0:'agent_name',1:'(代理人信息)姓名'},
  // {0:'agent_address',1:'(代理人信息)联系地址'},
  // {0:'agent_enterprise_address',1:'(代理单位信息)单位地址'},
  // {0:'agent_enterprise_name',1:'(代理单位信息)单位名称'},
  // {0:'agent_enterprise_contact',1:'(代理单位信息)联系人'},
  {0:'population_type',1:'人口类型'},
  // {0:'floating_reason',1:'流动原因'},
  {0:'relation_with_host',1:'与户主关系'},
  // {0:'in_data',1:'来本市日期'},
  // {0:'has_jycard',1:{title:'是否办理缙云卡',option:['否','是']}},
  // {0:'out_data',1:'流出时间'},
  // {0:'out_province',1:'流出到省'},
  // {0:'out_city',1:'流出到到市'},
  // {0:'out_district',1:'流往地详址'},
  {0:'edit_people',1:'录入人'},
  {0:'comment',1:'注释'},
  // {0:'pic',1:'图片网址'}
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
const sdlrOption = ['area','grid','sex','is_insured','is_renthouse','marriage','political_status','education','has_jycard'];


const sexIndex = {0:'男',1:'女','男性':'男','女性':'女'};
const sexOption = ['男','女'];

const dataYesNo = ['has_jycard','is_renthouse','is_insured','sex'];

const areaOption = {0:'天府镇'};

const userStatusOption = ['未启用','已启用'];

const houseStatusOption = ['出租','空置','自住','其他'];

const houseTypeOption = {0:'一室一厅',1:'二室一厅',2:'三室一厅',3:'四室一厅',4:'其他'};

const facilityTypeOption = {
  0:'行政办公类',
  1:'商业金融类',
  2:'文化娱乐类',
  3:'体育类',
  4:'医疗卫生类',
  5:'大专院校科研设计类',
  6:'文物古迹类',
  7:'其他'
}

const roadLevelOption = {
  0:'主干道',
  1:'次干道',
  2:'文化娱乐类',
  3:'其他',
}

const oneLane = {
  0:'是',
  1:'否',
}

const industryOption = {
  0:'机构组织',
  1:'农林牧渔',
  2:'医药卫生',
  3:'建筑建材',
  4:'冶金矿产',
  5:'石油化工',
  6:'水利水电',
  7:'交通运输',
  8:'信息产业',
  9:'机械机电',
  10:'轻工食品',
  11:'服装纺织',
  12:'专业服务',
  13:'安全防护',
  14:'环保绿化',
  15:'旅游休闲',
  16:'办公文教',
  17:'电子电工',
  18:'玩具礼品',
  19:'家居用品',
  20:'物质',
  21:'包装',
  22:'体育',
  23:'办公',
  24:'物质',
  25:'教育培训',
  26:'其他'
}

const propertyOption = {
  0:'国有企业',
  1:'政府机关',
  2:'事业单位',
  3:'非盈利机构',
  4:'民营企业',
  5:'合资企业',
  6:'外资企业',
  7:'其他民办非企业',
  8:'居委会',
  9:'社会团体',
  10:'基金会',
  11:'其他'
}

const companySizeOption = {
  0:'50人以下',
  1:'51-100人',
  2:'101-500人',
  3:'501-1000人',
  4:'1000以上',
}

const userStatus = {
  0:"未启用",
  1:"已启用"
};

const otherStatus = {
  0:"未审核",
  1:"已审核"
};

const gridStatus = {
  0:"未通过",
  1:"已通过"
};

const gridTestOption = {
  0:"",
  1:"代家沟组",
  2:"自生桥组",
  3:"三才生组",
  4:"土地垭组",
}