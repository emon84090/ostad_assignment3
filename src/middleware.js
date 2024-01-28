import { NextResponse } from "next/server";
import { VerifyToken } from "./utils/JWTtokenhelper";

export async function middleware(req, res) {
  try {
    let token = req.cookies.get("token");

    let payload = await VerifyToken(token["value"]);

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    requestHeader.set("id", payload["id"]);
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (e) {
    return NextResponse.json(
      { status: "fail", data: "Unauthorized" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/user/profile/:path*", "/api/dashboard/:path*"],
};
