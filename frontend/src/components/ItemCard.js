import React, { useState } from "react";

const Card = () => {

    const [value, setValue] = useState(0);
    const [title, setTitle] = useState("[음식물쓰레기냉장고]");
    const [desc, setDesc] = useState("부패,악취, 해충문제 끝! 세워지는 뚜껑 디테일");

    return (
        <div className="rf_present_fundBox" onClick="location.href='sub-page.html'">
            <div className="rf_pf_wrap">
                <div className="rf_pf_imgBox">
                    <img src="public/img/01_main_01_blue_18.jpg">
                </div>
                <div className="rf_pf_TextBox">
                    <div className="rf_pf_title">
                        <span>{ title }</span>
                        { desc }
                    </div>
                    <div className="rf_persentBox">
                        <div className="rf_persent_Bar">
                            <div className="rf_progressBar rf_p_wid25"></div>
                        </div>
                        <div className="rf_pertextBox">
                            <div className="rf_lp_text">25 %</div>
                            <div className="rf_rp_text">100 %</div>
                        </div>
                    </div>
                    <div className="rf_day_wonBox">
                        <div className="rf_dayText"><img src="public/img/01_main_01_blue_44.png">
                            <span>20</span>일 남음
                        </div>
                        <div className="rf_wonText"><span>1,320,200</span> 원</div>
                    </div>
                </div>
            </div>
        </div>
    );
};