import { useEffect } from "react";
import { Link } from "react-router-dom";
import { applyLocale } from "@/lib/locale";

export default function PrivacyPageAr() {
  useEffect(() => {
    applyLocale("ar");
    document.title = "سياسة الخصوصية — ستيم بلس ذ.م.م.";
  }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-400">
      <div className="max-w-3xl mx-auto px-6 py-20 leading-relaxed tracking-wide text-[15px]">
        <Link to="/ar" className="text-xs uppercase tracking-wider text-slate-500 hover:text-[#02C39A] transition-colors">
          ← العودة إلى الصفحة الرئيسية
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-slate-100">سياسة الخصوصية</h1>
        <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">آخر تحديث: 2026</p>

        <section className="mt-10 space-y-5">
          <p>
            تحترم شركة ستيم بلس ذ.م.م. ("نحن"، "لنا") خصوصيتك وتلتزم بحماية المعلومات
            الشخصية والطبية التي تشاركها معنا. توضح سياسة الخصوصية هذه المعلومات التي
            نجمعها، وكيفية استخدامها، والخيارات المتاحة لك.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">1. المعلومات التي نجمعها</h2>
          <p>
            نجمع المعلومات التي تقدمها طواعية من خلال نماذج الاستشارة لدينا، بما في ذلك
            اسمك، وبريدك الإلكتروني، ورقم الاتصال، ومجال القلق الأساسي، والجدول الزمني
            للعلاج، والتشخيص السريري الرسمي، وملاحظات الحالة. قد نجمع أيضًا بيانات تقنية
            مثل عنوان IP، ونوع المتصفح، والصفحات التي تمت زيارتها لأغراض التحليل والأمان.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">2. كيف نستخدم معلوماتك</h2>
          <p>
            تُستخدم المعلومات فقط لتقييم استفسارك، وجدولة الاستشارات، وتقديم الخدمات
            السريرية المطلوبة، والتواصل معك بشأن رعايتك، والامتثال للالتزامات القانونية،
            وتحسين موقعنا الإلكتروني. نحن لا نبيع البيانات الشخصية.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">3. المشاركة</h2>
          <p>
            نشارك المعلومات فقط مع طاقمنا السريري، ومزود جدولتنا (Zoho Bookings)،
            ومقدمي الخدمات الموثوقين بموجب التزامات السرية، أو عندما يقتضي القانون ذلك.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">4. أمن البيانات</h2>
          <p>
            نطبق ضمانات إدارية وتقنية ومادية لحماية بياناتك. ومع ذلك، لا يوجد نقل عبر
            الإنترنت آمن بشكل كامل، ولا يمكننا ضمان الأمان المطلق.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">5. حقوقك</h2>
          <p>
            وفقًا للقانون المعمول به، يمكنك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو
            حذفها أو تقييدها عن طريق التواصل معنا على stemplusclinic@gmail.com.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">6. عمليات النقل الدولية</h2>
          <p>
            يقع مقرنا الرئيسي في تبليسي، جورجيا. إذا تواصلت معنا من خارج جورجيا، فسيتم
            نقل بياناتك ومعالجتها في جورجيا وفقًا للضمانات المعمول بها.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">7. الاتصال</h2>
          <p>
            ستيم بلس ذ.م.م.، 21 نودار بوخوا آي لين، تبليسي 0159، جورجيا.{" "}
            <a href="mailto:stemplusclinic@gmail.com" className="text-slate-300 hover:text-[#02C39A] transition-colors">
              stemplusclinic@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
