import React, {useState} from "react";
import "./Login.css";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl
} from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [show, setshow] = useState(false)

const emailHandler=(e)=>{
  setemail(e.target.value)
}

const passwordHandler=(e)=>{
  setpassword(e.target.value)
}
const loginHandler=()=>{

}

  return (
    <div className="row m-0">
      <div
        className="col-6 page"
        style={{
          height: "100vh"
        }}
      >
      </div>
      <div className="col-6">

        <div className="Login"> LOG IN</div>

        <div class="input-group">
          <label> Enter Email Address </label> 
          <input type="text" placeholder="abc@gmail.com" value={email} onChange={(e)=>emailHandler(e)}/>
        </div>
        <div class="input-group">
          <label>Enter Password </label> 
          <input type={show?"text":"password"} placeholder="Enter password" value={password} onChange={(e)=>passwordHandler(e)}/>
        </div>

        <FormControl component="fieldset" style={{marginTop:"-5px"}}>
                  <FormGroup row>
                    
                    <FormControlLabel
                      value="showpassword"
                      control={
                        <Checkbox
                          onClick={() => {setshow(!show)}}
                          color="primary"
                          size="small"
                          style={{ marginLeft: "50px" }}
                        />
                      }
                      label="Show password"
                      labelPlacement="end"
                      style={{ marginRight: "0px", width:"400px"}}
                    />
                  </FormGroup>
                </FormControl>
        <button type="button" className="loginBtn" onClick={()=>loginHandler}>Login <span style={{marginLeft:"10px"}}><ArrowRightAltIcon /></span></button>
      </div>
    </div>
  );
}

export default Login;
