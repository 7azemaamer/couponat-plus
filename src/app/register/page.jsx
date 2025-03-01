import RegisterForm from "@/components/Auth/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "إنشاء حساب - كوبونات بلس",
  description:
    "إنشاء حساب جديد في كوبونات بلس للوصول إلى أفضل العروض والخصومات",
};

export default function RegisterPage() {
  return (
    <div className="d-container py-12">
      <div className="max-w-md mx-auto">
        <RegisterForm />
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="text-accent hover:text-primary">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
