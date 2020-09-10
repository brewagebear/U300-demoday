import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    
    <div class="member_sub_area_box">
    <div class="member_title"><h1>로그인<span>다양한 우리가 모여 함께 더 나은 세상을 만듭니다.</span></h1></div>
    
    <form name="flogin" action="<?php echo $login_action_url ?>" onsubmit="return flogin_submit(this);" method="post">
        <input type="hidden" name="url" value="<?php echo $login_url ?>"/>	
        <fieldset id="login_fs">	
            <div class="p_pop_loginItem marB16">
                <p>아이디</p>
                <div class="soram_loginInput">
                    <input type="text"value={name} onChange={onChangeName}  name="mb_id" id="login_id" required="" class="frm_input required" size="20" maxlength="20" placeholder="아이디"/>
                </div>
            </div>
            <div class="p_pop_loginItem">
                <p>비밀번호</p>
                <div class="soram_loginInput">
                    <input type="password" name="mb_password" id="login_pw" required="" class="frm_input required" size="20" maxlength="20" placeholder="비밀번호"/>
                </div>
            </div>
            <div id="signinfailmsg" class="msgarea"></div>
            <button type="submit" class="pop_btn">로그인</button>
            <div class="pop_another_list">
                <div class="checkbox-container login_add_position">
                    <span id="law_serviceusealert" class="alerttxt"></span>
                        <input type="checkbox" class="cb member_check" id="law_serviceuse"/>
                        <label for="law_serviceuse" class="cbt">자동로그인</label>
                </div>
                <div class="another_list"><a href="signup.html" class="">회원가입</a></div>
                <div class="another_list"><a href="">아이디/비밀번호 찾기</a></div>
            </div>
        </fieldset> 	
    </form>
</div>
            
            );
};
export default Login;