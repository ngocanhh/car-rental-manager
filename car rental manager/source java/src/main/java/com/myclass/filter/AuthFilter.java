package com.myclass.filter;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import io.jsonwebtoken.Jwts;

public class AuthFilter extends BasicAuthenticationFilter{
	
	private UserDetailsService userDetailsService;
	
	public AuthFilter(AuthenticationManager authenticationManager, UserDetailsService userDetailsService) {
		super(authenticationManager);
		this.userDetailsService = userDetailsService;
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// nếu url là login thì cho qua ko phải lấy token
		if(request.getServletPath().equals("/api/admin/login")) {
			chain.doFilter(request, response);
			return;
		}
		// Lấy token
		String authorizationHerder = request.getHeader("Authorization");
		if(authorizationHerder != null && !authorizationHerder.isEmpty()) {
			String token = authorizationHerder.replace("Bearer ", "");
			// giải mã token
			String email = Jwts.parser()
					.setSigningKey("17520253")
					.parseClaimsJws(token)
					.getBody()
					.getSubject();
			UserDetails user = userDetailsService.loadUserByUsername(email);
			Authentication authentication = new UsernamePasswordAuthenticationToken(user, null,
					user.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		chain.doFilter(request, response);
	}
	
}