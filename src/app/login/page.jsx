import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "تسجيل الدخول - كوبونات بلس",
  description:
    "تسجيل الدخول إلى حسابك في كوبونات بلس للوصول إلى أفضل العروض والخصومات",
};

export default function LoginPage() {
  return (
    <div className="d-container py-12">
      <div className="max-w-md mx-auto">
        <LoginForm />
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ليس لديك حساب؟{" "}
            <Link href="/register" className="text-accent hover:text-primary">
              إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
