import { NextResponse, type NextRequest } from "next/server";

// Middleware de cookies
export function middleware(request:NextRequest){
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if(!themePreference){
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value");

    return response;
}





// Version estados condicionales

// export function middleware(request:NextRequest){
//     if(request.nextUrl.pathname === "/profile"){
//         return NextResponse.redirect(new URL("/hello", request.url));

        // return NextResponse.rewrite(new URL("/hello", request.url)); 
        // con rewrite la URL sigue siendo http://localhost:3000/profile
        // pero se redirige a la vista http://localhost:3000/hello
    // }
// }




// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = { matcher: '/profile' };