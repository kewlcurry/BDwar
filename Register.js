import React from "react";
function Register(){
    return (

<div class="register container"  style={{backgroundColor:"white"}}>
        <div class="text-center">
            <h2 class="display-2">REGISTER</h2>
        </div>
        <div class="card mx-auto" style={{width:"50%"}}>
            <div class="card-body">
                <form action="/action_page.php" method="get">
                    <div className="d-flex">
                    <div class="mb- 3 me-5" style={{textAlign:"left"}}>
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder=""  required/>
                    </div>
                    <div class="mb-3 ms-3"  style={{textAlign:"left"}}>
                        <label for="last">Last Name</label>
                        <input type="text" id="last"  placeholder="" required/>
                    </div>
                    </div>
                    
                    <div class="mb-3 me-4"  style={{textAlign:"left"}}>
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob"  placeholder=""/>
                   
                    <div class="mb-3 "  style={{textAlign:"left"}}>
                        <label for="user">Login Id</label>
                        <input type="text" id="user"  placeholder="" required/>
                    </div>
                    </div>
                   
                    <div class="mb-3 "  style={{textAlign:"left"}}>
                        <label for="password">Password</label>
                        <input type="password" id="password" maxlength="8" placeholder="" required/>
                    </div>
                    <div class="mb-3 " style={{textAlign:"left"}}>
                        <label for="repassword">Confirm password</label>
                        <input type="password" id="repassword" maxlength="8" placeholder="" required/>
                    </div>
                    
                    <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="click mb-0 me-2"></p>
                        <a href="registerbutton" class="btn">
                            Submit
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <br/>
        <br/>
    </div>
    );
}
export default Register;