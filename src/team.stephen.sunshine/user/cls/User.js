class userItem {
    constructor(item){
        this.info = {};
        this.info.userName = item.info.userName;
        this.info.userNo = item.info.userNo;
        this.info.userTitle = item.info.userTitle;
        this.key = ++userItem.key;
    }

}
userItem.key = 0;

export default class User {
    constructor(){
        this.allStaff = [
            new userItem(User.rawData[0]),
            new userItem(User.rawData[1]),
            new userItem(User.rawData[2]),
            new userItem(User.rawData[3]),
            new userItem(User.rawData[4]),
            new userItem(User.rawData[5]),
            new userItem(User.rawData[6]),
            new userItem(User.rawData[7]),
            new userItem(User.rawData[8]),
            new userItem(User.rawData[9]),
            new userItem(User.rawData[10])
        ];
        this.staff = this.allStaff;
        this.word=""
    }
    deleteStaff(userNo){
        this.staff=this.allStaff;
        this.staff=this.staff.filter(item=>{
            return item.info.userNo!=userNo
        })
        this.allStaff=this.staff;
        return this
    }
    searchStaff(word){
        this.word = word;
        this.staff = this.allStaff;
        //在staff中搜索
        console.log(this)

        this.staff = this.staff.filter(item => {
            return item.info.userName.includes(word)
        });
        return this;
    }
}

User.rawData = [{ info: {userTitle:'我是一匹来自远方的狼。', sex: '男', userNo: 20, userName: '张三', id: '主任'}},
    { info: {userTitle:'我是一匹来自远方的狼。', sex: '女', userNo: 21, userName: '赵静', id: '学生'}},
    { info: {userTitle:'我是一匹来自远方的狼。', sex: '女', userNo: 22, userName: '王二麻', id: '学生'}},
    { info: {userTitle:'我是一匹来自远方的狼。', sex: '女', userNo: 24, userName: '李晓婷', id: '实习'}},
    { info: {userTitle:'我是一匹来自远方的狼。', sex: '男', userNo: 23, userName: '张春田', id: '实习'}},
    { info: {userTitle:'我是一匹来自远方的狼。', sex: '男', userNo: 22, userName: '刘建国', id: '学生'}},
    { info: {userTitle:'我是一匹来自远方的狼。', sex: '男', userNo: 24, userName: '张八', id: '主任'}},
    { info: {userTitle:'我是一匹来自远方的狗。', sex: '男', userNo: 35, userName: '李四', id: '老师'}},
    { info: {userTitle:'我是一匹来自远方的猪。', sex: '男', userNo: 42, userName: '王五', id: '学生'}},
    { info: {userTitle:'我是一匹来自远方的牛。', sex: '男', userNo: 50, userName: '赵六', id: '实习'}},
    { info: {userTitle:'我是一匹来自远方的马。', sex: '男', userNo: 60, userName: '孙七', id: '实习'}}];