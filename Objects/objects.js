var user={
    FirstName:"Angeswari",
    LastName:"G",
    Role:"Admin",
    LoginCount:10,
    EmailLoggedIn:true,
};
console.log(user.FirstName);
console.log(user["Role"]);
user.LoginCount=12;//update the value;
console.log(user.LoginCount);
console.table(user);//gives output in table format;

// var mobileDetails={
//     Brand:"iphone",
//     Model:"12Pro",
//     Color:"RoseGold",
//     Pixel:{Front:15,Rear:12},
//     RAM:"6GB RAM",
//     Processor:"quqlcomm processor"
// }
// mobileDetails.Model="12proMax";
// console.log(mobileDetails);
