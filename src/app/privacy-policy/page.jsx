import React from 'react'
import Styles from './privacy-policy.module.css'

export default function privacyPolicy(){
  return (
    <>
    <section  className={Styles.PrivacyPolicy}>
    <h1 className={Styles.Title}>Privacy Policy</h1>
   
   <p>At Global Visa Internationals, we are committed to safeguarding the personal information of our clients. This Privacy Policy outlines how we collect, use, disclose, and protect your data in compliance with applicable data protection laws and regulations.</p>
   <ol>
       <li><h2 className={Styles.subTitle}>Information We Collect</h2> 
       <p>We collect personal information to provide and improve our visa consultancy services. This includes:
           <ul>
               <li><b className={Styles.subTitle}>Personal Identification Details:</b> Full name, date of birth, passport number, and nationality.</li>
               <li><b className={Styles.subTitle}>Contact Information: </b>Email address, phone number, and residential address.</li>
               <li><b className={Styles.subTitle}>Travel and Visa Details:</b> Travel history, visa application information, and related documents.</li>
               <li><b className={Styles.subTitle}>Educational and Employment Information:</b> Academic qualifications and employment history, if relevant to your visa application.</li>
               <li><b className={Styles.subTitle}>Payment Information: </b>Billing details and transaction history.</li>
           </ul></p></li>
       <li><h2 className={Styles.subTitle}>How We Use Your Information</h2>
       Your personal information is used to:
       <ul>
           <li>Facilitate visa application processes and related services.</li>
           <li>Communicate with you regarding your application status and updates.</li>
           <li>Comply with legal and regulatory requirements.</li>
           <li>Enhance our services and customer experience.</li>
           
       </ul></li>
       <li><h2 className={Styles.subTitle}>Data Sharing and Disclosure</h2>
       We do not sell or rent your personal information. However, we may share your data with:
       <ul>
           <li><b className={Styles.subTitle}>Government Authorities:</b> Embassies, consulates, and immigration departments as required for visa processing.</li>
           <li><b className={Styles.subTitle}>Service Providers:</b> Trusted third-party vendors assisting in application processing and related services, bound by confidentiality agreements.</li>
           <li><b className={Styles.subTitle}>Legal Obligations:</b> When required by law or to protect our rights and safety.</li>
       </ul></li>
       <li><h2 className={Styles.subTitle}>Data Security Measures</h2>
       We implement robust security measures to protect your data, including:
       <ul>
           <li><b className={Styles.subTitle}>Encryption:</b> All sensitive data is encrypted during transmission and storage.</li>
           <li><b className={Styles.subTitle}>Access Controls:</b> Restricted access to personal data based on role and necessity.</li>
           <li><b className={Styles.subTitle}>Regular Audits:</b> Periodic security assessments to identify and mitigate risks.</li>
           <li><b className={Styles.subTitle}>Employee Training:</b> Ongoing training programs to ensure staff are aware of data protection protocols.</li>
       </ul></li>
       <li> <h2 className={Styles.subTitle}>Data Retention</h2>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once data is no longer needed, it is securely deleted or anonymized. </li>
       <li><h2 className={Styles.subTitle}>Your Rights</h2>
       You have the right to:
       <ul>
           <li><b className={Styles.subTitle}>Access:</b> Request a copy of the personal data we hold about you.</li>
           <li><b className={Styles.subTitle}>Correction:</b> Request corrections to any inaccurate or incomplete data.</li>
           <li><b className={Styles.subTitle}>Deletion:</b> Request the deletion of your personal data, subject to legal obligations.</li>
           <li><b className={Styles.subTitle}>Objection: </b>Object to the processing of your data under certain circumstances.</li>
       </ul>To exercise these rights, please contact us at operations@globalvisa-internationals.com.</li>
       <li><h2 className={Styles.subTitle}>Cookies and Tracking Technologies</h2>Our website may use cookies to enhance user experience. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some parts of the website may not function properly without cookies.</li>
       <li><h2 className={Styles.subTitle}>Third-Party Links</h2>Our website may contain links to external sites. We are not responsible for the privacy practices or content of these sites. We encourage you to read their privacy policies before providing any personal information.</li>
       <li><h2 className={Styles.subTitle}>Changes to This Privacy Policy</h2>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly to stay informed about how we are protecting your information.</li>
       <li><h2 className={Styles.subTitle}>Contact Us</h2>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:Global Visa Internationals
MG Road, Bangalore, 560025
Email: operations@globalvisa-internationals.com</li>
   </ol>
    </section>
    </>
  )
}
