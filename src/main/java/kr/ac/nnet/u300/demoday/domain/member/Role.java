package kr.ac.nnet.u300.demoday.domain.member;

import lombok.Getter;

@Getter
public enum Role {

    MEMBER("ROLE_MEMBER"),
    ARTIST("ROLE_ARTIST"),
    EXHIBITOR("ROLE_EXHIBITOR"),
    ADMIN("ROLE_ADMIN");
    
    private String value;

    Role(String value) {
        this.value = value;
    }
}
