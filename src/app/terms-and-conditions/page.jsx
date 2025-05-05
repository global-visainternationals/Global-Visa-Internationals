import react from 'react';
import Styles from './terms-and-conditions.module.css'
export default function TermsAndConditions(){
    return(
        <>
        <section className={Styles.TermsAndConditions}>
            <h1 className={Styles.Title}>Terms & Conditions – Consultancy Undertaking Agreement</h1>
            <p>Global Visa Internationals, headquartered in Bangalore, India, is a trusted consultancy firm offering expert guidance on immigration and visa processes. Our services include:</p>
            <ul>
                <li>Immigration and visa consultancy</li>
                <li>Profile assessment and documentation support</li>
                <li>Evaluation of qualifications and eligibility</li>
                <li>Guidance for application lodgment</li>
                <li>Country-specific settlement and documentation advice</li>
                <li>Assistance with visa interview preparation</li>
            </ul>
            <h2 className={Styles.subTitle}>Agreement Overview</h2>
            <p>This agreement outlines the terms of engagement between the client (referred to as “Client”, “I”, or “We”) and Global Visa Internationals (referred to as “Company”, “We”, or “Us”) for consultancy services related to immigration and visa applications.</p>
            <p>By availing our services, the Client agrees to the terms below.</p>
            <ol>
                <li><h2 className={Styles.subTitle}>Authorization & Responsibilities</h2>
                <ul>
                    <li>The Client authorizes Global Visa Internationals to assist in the preparation, review, and submission of documents required for immigration or visa applications.</li>
                    <li>The Client is responsible for submitting all necessary documents within the stipulated time frame (generally 7 to 30 days). Delays or failure in submission may impact the process and are the sole responsibility of the Client.</li>
                </ul></li>
                <li><h2 className={Styles.subTitle}>Client Acknowledgments</h2>
                <ul>
                    <li>The Client confirms that all documents provided are authentic and complete.</li>
                    <li>The Client understands that Global Visa Internationals:
                        <ul>
                            <li>The Client understands that Global Visa Internationals:</li>
                            <li>Does not guarantee visa approval</li>
                            <li>Does not arrange accommodation or travel</li>
                        </ul>
                    </li>
                    <li>Our services are limited to consultancy, documentation guidance, and, where applicable, support in profile promotion through recognized channels.</li>
                </ul></li>
                <li><h2 className={Styles.subTitle}>Consultation Fee Policy</h2><ul>
                    <li>All fees charged for consultancy services are considered administrative and professional fees.</li>
                    <li>Fees are strictly non-refundable under all circumstances, including (but not limited to):
                        <ul>
                            <li>Withdrawal by the Client</li>
                            <li>Non-compliance with document requirements</li>
                            <li>Ineligibility due to medical, financial, or legal issues</li>
                            <li>Visa rejection due to external factors</li>
                            <li>Changes in immigration rules or country-specific quotas</li>
                            <li>Delayed or incomplete submissions</li>
                        </ul>
                    </li>
                </ul></li>
                <li><h2 className={Styles.subTitle}>Reapplication Support</h2>
                In case of visa refusal, the Client may be eligible for reapplication support under revised terms. This is subject to the discretion of Global Visa Internationals and applies only when the reapplication is handled through our consultancy.
                </li>
                <li><h2 className={Styles.subTitle}>Additional Charges</h2>
                The Client agrees to bear costs not included in our consultancy fees, such as:
                <ul>
                    <li>Official visa application charges</li>
                    <li>Courier or mailing costs</li>
                    <li>Notarization or translation fees</li>
                    <li>Government or embassy-related payments</li>
                </ul></li>
                <li><h2 className={Styles.subTitle}>Consent & Compliance</h2>
                By accepting these terms, the Client affirms that:
                <ul>
                    <li>They are engaging voluntarily and are fully informed about the services</li>
                    <li>They have no disqualifying medical or criminal records</li>
                    <li>They will meet language proficiency and other eligibility criteria as required</li>
                    <li>They will comply with all submission and documentation deadlines</li>
                </ul></li>
                <li><h2 className={Styles.subTitle}>Processing Timeline</h2><ul>
                    <li>Global Visa Internationals will provide initial documentation templates and checklists promptly after onboarding.</li>
                    <li>The Client is expected to complete and submit documents for final processing within 30 days.</li>
                    <li>Immigration policies and timelines are subject to change and are not controlled by Global Visa Internationals.</li>
                </ul></li>
                <li><h2 className={Styles.subTitle}>Validity of Agreement</h2>This agreement remains valid for one year from the date of engagement. If the process is not completed within this period, additional service charges may apply to continue support.</li>
                <li><h2 className={Styles.subTitle}>Postponement or Deferment</h2>Clients wishing to defer or pause their process must notify the Company via official email. We will accommodate deferment requests to the best of our ability within the initial validity period.</li>
                <li><h2 className={Styles.subTitle}>Disclaimer</h2>Global Visa Internationals provides consultancy services only. We do not claim affiliation with any immigration authority or government. No guarantees are provided regarding visa success, job opportunities, or travel outcomes.</li>
            </ol>
        </section>
        </>
    )
}