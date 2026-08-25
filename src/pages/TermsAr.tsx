import { useEffect } from "react";
import { Link } from "react-router-dom";
import { applyLocale } from "@/lib/locale";

export default function TermsPageAr() {
  useEffect(() => {
    applyLocale("ar");
    document.title = "شروط الخدمة — ستيم بلس ذ.م.م.";
  }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-400">
      <div className="max-w-3xl mx-auto px-6 py-20 leading-relaxed tracking-wide text-[15px]">
        <Link to="/ar" className="text-xs uppercase tracking-wider text-slate-500 hover:text-[#02C39A] transition-colors">
          ← العودة إلى الصفحة الرئيسية
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-slate-100">شروط الخدمة</h1>
        <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">آخر تحديث: 2026</p>

        <section className="mt-10 space-y-5">
          <p>
            تحكم شروط الخدمة هذه ("الشروط") وصولك إلى واستخدامك للموقع الإلكتروني
            والخدمات التي تقدمها شركة ستيم بلس ذ.م.م. ("نحن"، "لنا"). باستخدامك لموقعنا
            الإلكتروني أو تقديم طلب استشارة، فإنك توافق على هذه الشروط.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">1. الأهلية</h2>
          <p>
            يجب أن يكون عمرك 18 عامًا على الأقل، أو أن تحصل على موافقة أحد الوالدين أو
            الوصي القانوني، لتقديم المعلومات من خلال هذا الموقع.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">2. استخدام الموقع الإلكتروني</h2>
          <p>
            توافق على استخدام الموقع فقط للأغراض المشروعة وتقديم معلومات دقيقة وحديثة
            وكاملة عند التواصل معنا. يجب ألا تتدخل في تشغيل الموقع أو تحاول الوصول غير
            المصرح به.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">3. الاستشارات والجدولة</h2>
          <p>
            تقديم طلب استشارة لا ينشئ علاقة طبيب-مريض. لا تُنشأ العلاقة الرسمية إلا بعد
            قبولنا لطلبك، وتأكيد موعد مجدول، وإكمال أي إجراءات استقبال مطلوبة.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">4. الملكية الفكرية</h2>
          <p>
            جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات
            والشعارات، هي ملك لشركة ستيم بلس ذ.م.م. أو مرخصيها ومحمية بموجب قوانين
            الملكية الفكرية.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">5. تحديد المسؤولية</h2>
          <p>
            إلى أقصى حد يسمح به القانون، لن تكون شركة ستيم بلس ذ.م.م. مسؤولة عن أي
            أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن استخدامك للموقع.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">6. القانون الحاكم</h2>
          <p>
            تخضع هذه الشروط لقوانين جورجيا. سيتم حل أي نزاعات في محاكم تبليسي، جورجيا.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8" id="medical-disclaimer">
            7. إخلاء المسؤولية الطبية
          </h2>
          <p>
            المحتوى الموجود على هذا الموقع الإلكتروني مقدم لأغراض إعلامية عامة فقط وليس
            بديلاً عن المشورة الطبية المهنية أو التشخيص أو العلاج. اطلب دائمًا مشورة
            مقدم رعاية صحية مؤهل بشأن أي أسئلة قد تكون لديك حول حالة طبية. لا تتجاهل
            أبدًا المشورة الطبية المهنية أو تؤخر طلبها بسبب شيء قرأته على هذا الموقع.
            تختلف نتائج العلاجات التجديدية والمتعلقة بالخلايا الجذعية بين الأفراد؛ ولا
            تُضمن أي نتيجة محددة. في حالة الطوارئ الطبية، تواصل فورًا مع خدمات الطوارئ
            المحلية لديك.
          </p>

          <h2 className="text-slate-100 text-xl font-semibold mt-8">8. الاتصال</h2>
          <p>
            ستيم بلس 21 نودار بوخوا آي لين، تبليسي 0159، جورجيا.{" "}
            <a href="mailto:stemplusclinic@gmail.com" className="text-slate-300 hover:text-[#02C39A] transition-colors">
              stemplusclinic@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
