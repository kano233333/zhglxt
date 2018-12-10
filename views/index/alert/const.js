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
  "address":"地址"
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
  "content":"事件内容"
};

const optionAdd = ['name','priv_id','role_id','level','is_duban','supervise','type'];
const optionAddIndex = ['name'];
const postFile = ['file','img_src','img_path'];

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
}