export default function TermsOfServicePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
        <h1 className="text-4xl font-heading font-bold text-slate-800 mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last Updated: March 24, 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            By accessing or using the MyMentor platform ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, including the mandatory arbitration provision, you may not access or use the Platform. MyMentor connects college and graduate-level students ("Students") with qualified peer tutors ("Tutors").
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">2. Eligibility</h2>
          <p className="text-slate-700 leading-relaxed">
            The Platform is intended strictly for individuals who are 18 years of age or older, and currently enrolled in or recently graduated from a post-secondary or tertiary educational institution. By using this service, you represent and warrant that you meet all eligibility requirements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">3. User Conduct & Academic Integrity</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MyMentor is an educational tool designed to facilitate learning and comprehension. All users must maintain strict adherence to academic integrity policies.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Tutors may not complete assignments, write papers, or take exams on behalf of Students.</li>
            <li>Students may not use the Platform to solicit cheating or academic dishonesty.</li>
            <li>Users must communicate respectfully at all times. Harassment, hate speech, or inappropriate conduct will result in immediate account termination.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">4. Tutoring Sessions and Payments</h2>
          <p className="text-slate-700 leading-relaxed">
            All payments for tutoring services must be processed securely through the Platform via our third-party payment providers (e.g., Stripe).
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
            <li><strong>Rates:</strong> Tutors set their own hourly rates within platform guidelines. The total cost, including any service fees, will be displayed before booking.</li>
            <li><strong>Cancellations:</strong> Students may cancel a session up to 24 hours in advance for a full refund. Cancellations made within 24 hours of the scheduled session may be subject to a cancellation fee up to the full cost of the session.</li>
            <li><strong>No-Shows:</strong> If a Student fails to attend a scheduled session without prior notice, the Tutor is entitled to the full payment for that session. If a Tutor fails to attend, the Student will be fully refunded and the Tutor's account may be penalized.</li>
            <li><strong>Payouts:</strong> Tutors will receive their earnings minus applicable platform service fees. Payouts are typically processed according to the timeline stated in the Tutor Dashboard.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">5. Disclaimers and Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed">
            MyMentor acts solely as a marketplace to connect Students and Tutors. We do not guarantee any specific academic outcomes, grades, or test scores. The Platform is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. To the fullest extent permitted by law, MyMentor shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">6. Account Termination</h2>
          <p className="text-slate-700 leading-relaxed">
            We reserve the right to suspend or terminate your account and your access to the Platform at any time, for any reason, without notice or liability. This specifically includes, but is not limited to, violations of the User Conduct & Academic Integrity policies. You may delete your account at any time through your Profile Settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">7. Changes to Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            MyMentor reserves the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on the Platform and updating the "Last Updated" date. Your continued use of the Platform after such changes constitutes your acceptance of the new Terms.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4 font-bold">
            Contact Us: If you have any questions about these Terms, please contact us at support@mymentor.edu.
          </p>
        </section>

      </div>
    </div>
  );
}
