import type { Metadata } from 'next';
import { BUSINESS_NAME, PHONE_1 } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: `הצהרת נגישות של ${BUSINESS_NAME} - מחויבות לתקן WCAG 2.1 AA`,
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black text-light">הצהרת נגישות</h1>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-primary/90 space-y-8">
            <p>
              {BUSINESS_NAME} מחויבת להנגיש את האתר לאנשים עם מוגבלויות, בהתאם לתקן הנגישות הישראלי (ת&quot;י 5568) ולהנחיות WCAG 2.1 ברמת AA.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">מחויבותנו לנגישות</h2>
              <p>
                אנו מאמינים כי לכל אדם יש זכות לגישה שוויונית למידע ולשירותים באינטרנט. לכן, אנו משקיעים מאמצים רבים בהנגשת האתר ותכניו עבור כלל המשתמשים.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">פעולות שבוצעו להנגשה</h2>
              <ul className="mr-6 list-disc space-y-2">
                <li>התאמה לתקן WCAG 2.1 ברמת AA</li>
                <li>שמירה על יחס ניגודיות מינימלי של 4.5:1</li>
                <li>הוספת טקסט חלופי (alt text) לכל התמונות</li>
                <li>תמיכה מלאה בניווט מקלדת</li>
                <li>שימוש בתגיות ARIA להנגשת תוכן דינמי</li>
                <li>מבנה כותרות היררכי ולוגי</li>
                <li>קישור &quot;דלג לתוכן&quot; בתחילת כל עמוד</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">רכיבי נגישות באתר</h2>
              <ul className="mr-6 list-disc space-y-2">
                <li>כפתור נגישות קבוע המאפשר הגדלה והקטנה של גופנים</li>
                <li>מצב ניגודיות גבוהה</li>
                <li>סימון מצב פוקוס ברור ונראה (focus indicators)</li>
                <li>טפסים מתויגים עם labels מתאימים</li>
                <li>תמיכה מלאה ב-RTL (ימין לשמאל)</li>
                <li>עיצוב רספונסיבי המותאם לכל גודל מסך</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-primary">דרכי יצירת קשר לבעיות נגישות</h2>
              <p>
                אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור, נשמח לשמוע מכם:
              </p>
              <p className="mt-2">
                <strong>{BUSINESS_NAME}</strong>
                <br />
                טלפון: {PHONE_1}
              </p>
              <p className="mt-2">
                אנו מתחייבים לטפל בכל פנייה בנושא נגישות תוך 5 ימי עסקים.
              </p>
            </div>

            <p className="text-sm text-primary/50">תאריך עדכון: מרץ 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
