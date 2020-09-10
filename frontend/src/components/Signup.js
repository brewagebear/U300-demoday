import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <form action="./signup.php" method="post" onsubmit="return signupsubmit()" class="positionT-50">
				<div class="member_sub_area_box">
			<div class="member_title"><h1>회원가입<span>다양한 우리가 모여 함께 더 나은 세상을 만듭니다.</span></h1></div>
			<form action="./signup.php" method="post" onsubmit="return signupsubmit()" class="positionT-50">
                {/*<!-- 기본정보 입력 -->*/}
				<div class="memberinput_box">
					<div class="memberinput marRight40">
						<div class="m_input_title">이름</div>
						<span id="" class="alerttxt"></span>
						<div class="m_input">
							<input type="text" name="" id="" class="m_bar" placeholder="성함을 입력해 주세요." maxlength="10"/>
						</div>
					</div>
					<div class="memberinput">
						<div class="m_input_title">이메일</div>
						<span id="" class="alerttxt"></span>
						<div class="m_input">	
							<input type="text" name="" id="" class="m_bar" placeholder="이메일을 입력해 주세요." autocomplete="new-password" maxlength="15"/>
						</div>
					</div>
				</div>	
				
				<div class="memberinput_box">
					<div class="memberinput marRight40">
						<div class="m_input_title">비밀번호</div>
						<span id="" class="alerttxt"></span>
						<div class="m_input">	
							<input type="password" name="" id="" class="m_bar" placeholder="비밀번호는 영문, 숫자를 포함하여 6~8자리를 입력해 주세요." autocomplete="new-password" maxlength="15"/>
						</div>
					</div>
					<div class="memberinput">
						<div class="m_input_title">비밀번호확인</div>
						<span id="" class="alerttxt"></span>
						<div class="m_input">
							<input type="password" name="" id="" class="m_bar" placeholder="비밀번호를 한번 더 입력해 주세요." autocomplete="new-password" maxlength="15"/>
						</div>
					</div>
				</div>	
				
				<div class="memberinput_box">
					<div class="memberinput marRight40">
						<div class="m_input_title">연락처</div>
						<span id="" class="alerttxt"></span>
						<div class="m_input">
							<input type="text" name="smartphone" id="smartphone" class="m_bar" placeholder="'-'를 생략한 휴대폰번호를 입력해 주세요." onkeyup="only_number('smartphone')" maxlength="13"/>
						</div>
					</div>
					
				</div>	
				<div class="spacearea1"></div>
				
				{/*<!-- 체크박스 -->*/}
				<div class="check_box_wrap">
					<div class="check_line">
						<div class="check_box_area">
							<div class="checkbox-container c_add_position">
								<span id="law_serviceusealert" class="alerttxt"></span>
								<input type="checkbox" class="cb member_check" id="law_serviceuse"/>
								<label for="law_serviceuse" class="cbt">서비스 이용약관</label>
							</div>
							<div class="check_text_box" >
								<div class="check_text">
									<div class="ctext">이 약관은 TOPING이 제공하는 서비스 이용조건 및 절차에 대한 사항과 기타 필요한 사항을 관련법령이 정하는 대로 준수하고 규정함을 목적으로 합니다. </div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
									<div class="ctext"><span>제 1조 목적</span>00000000000000000000000000000</div>
								</div>
							</div>
						</div>
					</div>	

					<div class="check_line">
						<div class="check_box_area">
							<div class="checkbox-container c_add_position">
								<span id="law_privatedataalert" class="alerttxt"></span>
								<input type="checkbox" id="law_privatedata" class="member_check cb"/>
								<label for="law_privatedata" class="cbt">개인정보처리방침</label>
							</div>
							<div class="check_text_box">
								<div class="check_text">
									<div class="ctext">TOPING은 이용자의 개인정보 보호를 매우 중요하게 생각하고 있으며, 이용자가 TOPING이 제공하는 서비스를 이용함에 있어서 TOPING에게 제공한 개인정보를 보호하기 위하여 최선을 다하고 있습니다. 이에 따라, TOPING은 통신비밀보호법, 전기통신사업법, 정보통신망이용촉진및정보보호등에관한법률 등 정보통신 서비스 제공자가 준수하여야 할 관련 법규를 준수하고 있습니다.</div>
									<div class="ctext">본 개인정보처리방침은 관련법령 및 정부의 지침 변경이나 병원의 내부방침 변경 등으로 인하여 수시로 변경될 수 있으며, 변경사항이 있을 경우 즉시 관련 내용을 홈페이지 초기 화면에 게시된 개인정보처리방침에 반영하고 있습니다. 본 개인정보처리방침을 통하여 이용자는 수집된 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 어떻게 안전하게 보호되고 있는지 이해하실 수 있을 것입니다.</div>
									<div class="ctext">이 개인정보처리방침의 순서는 다음과 같습니다.</div>
									<div class="ctext">01.수집하는 개인정보의 항목 및 수집방법<br/>02.개인정보 수집 및 이용목적<br/>03.개인정보 보유 및 이용기간<br/>04.개인정보 파기절차 및 그 방법<br/>05.개인정보 제공 및 공유<br/>06.이용자 및 법정대리인의 권리와 그 행사방법<br/>07.동의철회 / 회원탈퇴 방법<br/>08.개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한 사항<br/>09.개인정보관리책임자<br/>10.개인정보의 안전성 확보조치<br/>11.정책 변경에 따른 공지의무<br/>12.개인정보의 취급위탁</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="ctext"><span>01. 수집하는 개인정보 항목 및 수집방법</span>00000000000000000000</div>
									<div class="privacy_table">
										<table>
											
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="bottom_line_img"></div>
																			
					<div class="checkbox-container">
						<input type="checkbox" id="law_all" class="check-all"/>
						<label for="law_all" class="cbt">위 내용에 모두 동의 합니다.</label>
					</div>
				</div>
				
				


				<div class="btnarea">
					<button type="submit" class="member_btn marR20" id="ad_become">회원가입
						<div class="pline">
							<div class="p_top1">
							</div>
							<div class="p_bottomr">
							</div>
						</div>
					</button>
					<button type="button" class="member_btn" onclick="location.href='index.html'">홈으로
						<div class="pline">
							<div class="p_top1">
							</div>
							<div class="p_bottomr">
							</div>
						</div>
					</button>
				</div>
			</form>
		</div>
    </form>
          );
        };

            export default Signup;