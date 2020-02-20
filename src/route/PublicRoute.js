import React from "react";

// 퍼블릭 라우트와 privateAuth를 표햔
export default function PublicRoute() {
  const PublicRoute = {
    isAuthenticated: false,
    authenticate(cb) {
      PublicRoute.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      PublicRoute.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
}