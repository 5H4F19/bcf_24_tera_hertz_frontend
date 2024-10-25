import { useRouter } from "next/navigation";

export function useAuthentication() {
  const token = localStorage.getItem("@token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

export function useRedirectIsAuthOrNot() {
  const router = useRouter();
  const isAuth = useAuthentication();
  if (isAuth) {
    router.replace("/dashboard");
  } else {
    router.replace("/login");
  }
}
