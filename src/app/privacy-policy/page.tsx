import type { Metadata } from 'next';
import { BUSINESS_NAME, PHONE_1 } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: `מדיניות פרטיות של ${BUSINESS_NAME}`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black text-light">מדיניות פרטיות</h1>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-primary/90 space-y-8">
            <p>
              מדיניות פרטיות זו מתארת כיצד {BUSINESS_NAME} (&quot;אנחנו&quot;, &quot;שלנו&quot;) אוסף, משתמש ומגן על מידע אישי שנאסף באתר שלנו.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">1. מידע שנאסף</h2>
              <p>אנו עשויים לאסוף את המידע הבא:</p>
              <ul className="mr-6 list-disc space-y-1">
                <li>פרטי התקשרות: שם, מספר טלפון, כתובת דוא&quot;ל</li>
                <li>נתוני גלישה: כתובת IP, סוג דפדפן, עמודים שנצפו</li>
                <li>מידע מ-Cookies ומטכנולוגיות מעקב דומות</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">2. מטרות השימוש במידע</h2>
              <ul className="mr-6 list-disc space-y-1">
                <li>מתן שירות ומענה לפניות לקוחות</li>
                <li>שיפור חוויית המשתמש באתר</li>
                <li>שליחת עדכונים ומבצעים (בהסכמת המשתמש)</li>
                <li>ניתוח סטטיסטי של שימוש באתר</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">3. שיתוף מידע עם צדדים שלישיים</h2>
              <p>
                אנו לא מוכרים, סוחרים או מעבירים את המידע האישי שלכם לצדדים שלישיים, למעט ספקי שירות הנדרשים לתפעול האתר (כגון שירותי אחסון ואנליטיקה), אשר מחויבים לשמור על סודיות המידע.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">4. אבטחת מידע</h2>
              <p>
                אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה בלתי מורשית, שינוי, חשיפה או השמדה.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">5. Cookies</h2>
              <p>
                האתר משתמש ב-Cookies לשיפור חוויית הגלישה, לניתוח תנועה ולהתאמה אישית של תוכן. ניתן לנהל את הגדרות ה-Cookies דרך הדפדפן שלכם.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">6. זכויות המשתמש</h2>
              <p>בהתאם לחוק הגנת הפרטיות, יש לכם זכות:</p>
              <ul className="mr-6 list-disc space-y-1">
                <li>לעיין במידע האישי שנאסף אודותיכם</li>
                <li>לבקש תיקון מידע שגוי</li>
                <li>לבקש מחיקת המידע האישי שלכם</li>
                <li>להתנגד לעיבוד המידע לצרכי שיווק</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">7. עדכוני מדיניות</h2>
              <p>
                אנו שומרים על הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר. המשך השימוש באתר לאחר שינוי המדיניות מהווה הסכמה למדיניות המעודכנת.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">8. יצירת קשר</h2>
              <p>
                לשאלות או בקשות הנוגעות למדיניות הפרטיות, ניתן לפנות אלינו:
              </p>
              <p className="mt-2">
                <strong>{BUSINESS_NAME}</strong>
                <br />
                טלפון: {PHONE_1}
              </p>
            </div>

            <p className="text-sm text-primary/50">עדכון אחרון: מרץ 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
