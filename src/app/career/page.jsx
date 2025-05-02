'use client';
import { useState } from 'react';
import styles from './JobForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';



export default function CareerPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    if (!executeRecaptcha) {
      alert("❌ reCAPTCHA not ready");
      return;
    }

    const resumeFile = form.resume.files[0];
    if (resumeFile && resumeFile.size > 2 * 1024 * 1024) {
      alert("Resume file must be under 2MB");
      return;
    }

    const token = await executeRecaptcha("job_posting");
    formData.append("recaptchaToken", token);

    setIsSubmitting(true);

    fetch("/api/job-posting", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.success) {
          form.reset();
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 4000);
        } else {
          alert("❌ Email sending failed.");
        }
      })
      .catch((err) => {
        alert("❌ Something went wrong.");
        console.error(err);
      })
      .finally(() => setIsSubmitting(false));
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Visa Consultant – Immigration Services",
    "description": "Join Global Visa Internationals in Bengaluru as a Visa Consultant. Help clients with immigration for Canada, Australia, UK, and more. Ideal for those passionate about guiding people globally.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Global Visa Internationals",
      "value": "GVIC-VC-2025"
    },
    "datePosted": "2025-04-25",
    "validThrough": "2025-06-30T23:59",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Global Visa Internationals",
      "sameAs": "https://www.globalvisainternationals.com",
      "logo": "https://www.globalvisainternationals.com/gvilogo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "GF-9, Business Point, Brigade Road",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560025",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 300000,
        "unitText": "YEAR"
      }
    },
    "industry": "Immigration and Visa Services",
    "qualifications": "Graduate in any stream, experience in visa/immigration consulting preferred.",
    "responsibilities": "Client consultation, documentation review, visa application handling, post-approval support.",
    "skills": "Communication, detail orientation, visa process knowledge, sales experience a plus",
    "workHours": "Mon to Sat, 10:00 AM - 6:00 PM",
    "incentiveCompensation": "Yes",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    },
    "url": "https://www.globalvisainternationals.com/career"
  };


  return (
    <>

<head>
      <title>Careers at Global Visa Internationals | Join Our Immigration Consulting Team</title>
      <meta
        name="description"
        content="Explore career opportunities at Global Visa Internationals. Join our team as a Visa Consultant in Bengaluru and shape global journeys through expert immigration guidance."
      />
      <meta
        name="keywords"
        content="visa consultant job Bangalore, careers in immigration consultancy, visa jobs India, join global visa internationals, visa consultant openings, immigration services career, jobs at visa company"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.globalvisainternationals.com/career" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Careers at Global Visa Internationals | Visa Consultant Openings" />
      <meta property="og:description" content="Apply for Visa Consultant roles at Global Visa Internationals. Help clients with Australia, UK, Canada immigration processes. Bengaluru-based openings." />
      <meta property="og:url" content="https://www.globalvisainternationals.com/career" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.globalvisainternationals.com/images/career-visa-consultant.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Visa Consultant Careers | Global Visa Internationals" />
      <meta name="twitter:description" content="Looking for a career in immigration services? Apply now to join Global Visa Internationals in Bangalore as a Visa Consultant." />
      <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/career-visa-consultant.png" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="ICBM" content="12.9716,77.5946" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </head>



    <div className={styles.JobSec}>
      <div className={styles.JobData}>
        <h2 className={styles.Title}>Job Title: Documentation Executive</h2>
        <p><strong>Job Overview:</strong> This role involves assisting clients with documentation related to their visa applications. Success in this role comes from clear communication, attention to detail, and the ability to guide clients effectively.</p>

        <h3 className={styles.subTitle}>Responsibilities and Duties:</h3>
        <ul>
          <li>Assist clients in preparing and organizing visa-related documents.</li>
          <li>Clarify client queries and guide them through the documentation process.</li>
          <li>Ensure all forms and supporting materials meet visa application standards.</li>
          <li>Coordinate with internal teams for document verification when required.</li>
          <li>Update clients on missing paperwork and progress.</li>
        </ul>

        <h3 className={styles.subTitle}>Qualifications:</h3>
        <ul>
          <li>Education: PUC or Diploma minimum; Bachelor’s preferred.</li>
          <li>Experience: 0–2 years in documentation or client service preferred.</li>
          <li>Skills: Strong communication, basic computer , multitasking.</li>
          <li>Traits: Patient, organized, eager to learn.</li>
        </ul>

        <h2 className={styles.Title}>Job Title: Sales Executive</h2>
        <p><strong>Job Overview:</strong> The Sales Executive will be responsible for converting leads, handling inquiries, and assisting potential clients throughout their visa consulting journey. The ideal candidate is target-driven with excellent interpersonal skills.</p>

        <h3 className={styles.subTitle}>Responsibilities and Duties:</h3>
        <ul>
          <li>Engage with inbound leads and provide accurate visa consulting info.</li>
          <li>Convert inquiries to successful applications.</li>
          <li>Maintain CRM and follow-up consistently with prospects.</li>
          <li>Coordinate with documentation and operations teams.</li>
        </ul>

        <h3 className={styles.subTitle}>Qualifications:</h3>
        <ul>
          <li>Education: Any degree.</li>
          <li>Experience: 0–3 years in sales, preferably in education/immigration sectors.</li>
          <li>Skills: Communication, persuasion, CRM tools, time management.</li>
        </ul>
      </div>

      <div className={styles.formSection}>
  <h2>Application Form</h2>
  <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data">
    
    {/* Full Name & Phone */}
    <div className={styles.row}>
      <div>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone Number (10 digits)"
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
          required
        />
      </div>
    </div>

    {/* Experience & DOB */}
    <div className={styles.row}>
      <div>
        <select className={styles.select} name="experience" required>
          <option value="" disabled selected hidden>Select Experience</option>
          <option value="0 years">Fresher (0 years)</option>
          <option value="0-1 years">0–1 years</option>
          <option value="1-3 years">1–3 years</option>
          <option value="3-5 years">3–5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>
      <div>
        <input
          className={styles.input}
          type="date"
          name="dob"
          required
          max={new Date().toISOString().split("T")[0]}
          title="Select your date of birth"
        >D.O.B</input>
      </div>
    </div>

    {/* Qualification & Email */}
    <div className={styles.row}>
      <div>
        <select className={styles.select} name="education" required>
          <option value="" disabled selected hidden>Select Qualification</option>
          {["PUC", "Diploma", "Bachelor's", "Master's", "Other"].map((edu) => (
            <option key={edu} value={edu}>{edu}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>
    </div>

    {/* Resume Upload & Job Role */}
    <div className={styles.row}>
      <div>
        <input
          className={styles.input}
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
        />
      </div>
      <div>
        <select className={styles.select} name="jobTitle" required>
          <option value="" disabled selected hidden>Applying For Job</option>
          <option value="Documentation Executive">Documentation Executive</option>
          <option value="Sales Executive">Sales Executive</option>
        </select>
      </div>
    </div>

    <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit Application"}
    </button>
  </form>

  {showPopup && (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <p>✅ Your application has been submitted successfully!</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  )}
</div>

    </div></>
  );
}
