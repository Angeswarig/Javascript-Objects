var user={
    FirstName:"Angeswari",
    LastName:"G",
    Role:"Admin",
    LoginCount:10,
    EmailLoggedIn:true,
    courseList:[],
    //"method" is used to perform function in an object.
    // function name is used as key and value as method.
    buyCourse:function(courseName){
        this.courseList.push(courseName);//"this" refers function in same object.
    },
    getCourseCount:function(){
        return `${this.FirstName} is enrolled to the total number of courses are ${this.courseList.length}`;
    },
    getUserInfo:function(){
        return `
         userFirstName:${this.FirstName},
         userLastName: ${this.LastName},
         userRole: ${this.Role},
         userLoginCount:${this.LoginCount},
         userEmailLoggedIn:${this.EmailLoggedIn},
         usercourseList:${this.courseList.length}
        `
    }
   
};
var courseList=true;
console.log(user.FirstName);
user.buyCourse("React js");
user.buyCourse("Node js");
console.log(user.getCourseCount());
//console.log(user.courseList);
console.log(user.getUserInfo());
console.table(user);
