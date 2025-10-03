// call is used to transfer execution context of one function to other function

//suppose we have a function to set a username. now there is another function which calls this function to set the username

//function to set username
function SetUsername(username){
    //complex db calculations here
    this.username = username
}

//function to create a user. This function calls above function to set username
function createUser(username, email, password){
    SetUsername.call(this, username)            //this line is used to pass value of this from set username function to create
                                            // user function because on completion of execution of set user function, value of its this 
                                                    // will disappear.
    this.email = email
    this.password = password
}

const user1 = new createUser('pankaj', 'pankaj@fb.com', '123')
console.log(user1)