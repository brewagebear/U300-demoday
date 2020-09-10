package kr.ac.nnet.u300.demoday.member;

import kr.ac.nnet.u300.demoday.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);
    Member findByUsername(String username);
}
