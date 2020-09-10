package kr.ac.nnet.u300.demoday.config.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import kr.ac.nnet.u300.demoday.domain.member.Member;
import kr.ac.nnet.u300.demoday.member.MemberPrincipal;
import kr.ac.nnet.u300.demoday.member.MemberRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.security.auth.login.LoginException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private final MemberRepository memberRepository;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, MemberRepository memberRepository) {
        super(authenticationManager);
        this.memberRepository = memberRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        
        String header = request.getHeader(JwtProperties.HEADER_STRING);
        
        if(header == null || !header.startsWith(JwtProperties.TOKEN_PREFIX)){
            chain.doFilter(request, response);
            return;
        }

        Authentication authentication = null;

        try {
            authentication = getUsernamePasswordAuthentication(request);
        } catch (LoginException e) {
            e.printStackTrace();
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);

        chain.doFilter(request, response);
    }

    private Authentication getUsernamePasswordAuthentication(HttpServletRequest request) throws LoginException {
        String token = request.getHeader(JwtProperties.HEADER_STRING);
        if(token != null){
            String username = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET.getBytes()))
                    .build()
                    .verify(token.replace(JwtProperties.TOKEN_PREFIX, ""))
                    .getSubject();

            if(username != null){
                Member member = memberRepository.findByUsername(username);
                MemberPrincipal principal = new MemberPrincipal(member);
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(username, null, principal.getAuthorities());
                return auth;
            }
        }
        throw new LoginException("잘못된 로그인 접근입니다.");
    }
}
