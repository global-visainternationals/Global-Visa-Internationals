'use client';
import React from "react";
import Styles from "./UAE-Career.module.css";
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
export default function UAECareer() {
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
        <title>Work in UAE – Direct Company Jobs with Free Visa Processing by Global Visa Internationals</title>
        <meta name="description" content="Explore direct job opportunities in UAE with Global Visa Internationals. Free visa processing and no hidden charges. Apply now!" />
        <meta name="keywords" content="UAE jobs, Global Visa Internationals, free visa processing, direct company jobs, construction jobs, MEP jobs" />
        <meta name="author" content="Global Visa Internationals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="UAE jobs, Global Visa Internationals, free visa processing, direct company jobs, construction jobs, MEP jobs" />
        <meta property="og:title" content="Work in UAE – Direct Company Jobs with Free Visa Processing by Global Visa Internationals" />
        <meta property="og:description" content="Explore direct job opportunities in UAE with Global Visa Internationals. Free visa processing and no hidden charges. Apply now!" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/globalvisainternationals.webp" />
        <meta property="og:url" content="https://www.globalvisainternationals.com/uae-career" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work in UAE – Direct Company Jobs with Free Visa Processing by Global Visa Internationals" />
        <meta name="twitter:description" content="Explore direct job opportunities in UAE with Global Visa Internationals. Free visa processing and no hidden charges. Apply now!" />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/globalvisainternationals.webp" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <link rel="icon" href="/globalvisainternationals.webp" type="image/webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8d7xj1z5l5e5e5e5e5e5e5e5e5e5e5e5e5" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8d7xj1z5l5e5e5e5e5e5e5e5e5e5e5e5" crossOrigin="anonymous" />
        
       </head>
        <section className={Styles.UAECareer}>
            <div className={Styles.JobData }>
                
        <h1 className={Styles.Title}>Work in UAE – Direct Company Jobs with Free Visa Processing by Global Visa Internationals</h1>
        <p>Are you looking for a secure and trusted pathway to work in the United Arab Emirates (UAE)? Global Visa Internationals is now facilitating direct recruitment for a reputed UAE-based company in the construction and technical (MEP) sectors. We handle the entire process — from interview scheduling to visa approval and departure — with zero hidden charges.</p>
        <h2 className={Styles.subTitle}>Current Job Openings – UAE Projects (Men Only)</h2>
        <p>These are verified, employer-approved vacancies with all documentation and benefits provided under UAE labor law.</p>
        <h3 className={Styles.subTitle}>Construction Sector Jobs</h3>
        <table className={Styles.table}>
            <thead>
                <th>Job Title</th>
                <th>Vacancies</th>
                <th>Monthly Salary (AED)</th>
                <th>Gender</th>
            </thead>
            <tbody>
                <tr>
                    <td>Stone Mason</td>
                    <td>100</td>
                    <td>AED 1,560</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Shuttering Carpenter	</td>
                    <td>100</td>
                    <td>AED 1,430</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Steel Fixer	</td>
                    <td>100</td>
                    <td>AED 1,430</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Civil Construction Helper	</td>
                    <td>100</td>
                    <td>AED 1,300	</td>
                    <td>Male</td>
                </tr>

            </tbody>
            </table>    
            <h2 className={Styles.subTitle}>Technical & MEP Jobs (Salary Based on Experience)</h2>

            <table className={Styles.table}>
                <thead>
                    <th>Role</th>
                    <th>Experience</th>
                    <th>Salary (AED) = Basic + Allowance</th>
                    <th>Total Salary</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Sr. Electrical / Plumber / AC Technician</td>
                        <td>11 – 20 Years	</td>
                        <td>1300 + 300	</td>
                        <td>1600</td>
                    </tr>
                    <tr>
                        <td>Electrical / Plumber / AC Technician	</td>
                        <td>5 – 10 Years	</td>
                        <td>1100 + 300	</td>
                        <td>1400</td>
                    </tr>
                    <tr>
                        <td>Assistant Technician (All MEP Trades)	</td>
                        <td>0 – 5 Years	</td>
                        <td>900 + 300	</td>
                        <td>1200
                        </td>
                    </tr>
                    <tr>
                        <td>MEP Helper	</td>
                        <td>0 – 2 Years	</td>
                        <td>700 + 300	</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
            <h2 className={Styles.subTitle}> What Global Visa Internationals Will Do for You</h2>
            <p>We are your authorized recruitment partner, and we ensure a safe and transparent process:</p>
            <ul>
                <li>Pre-Screening & Interviews: We assess your qualifications and conduct interviews on behalf of the employer.
                </li>
                <li>Visa Processing & Documentation: We manage UAE visa application, medical, Emirates ID, and insurance.
                </li>
                <li> Flight & Departure Support: We organize your ticket and final joining details directly with the employer.
                </li>
                <li> No Agent Fees / No Hidden Charges: All services are provided absolutely free to eligible candidates.</li>
                
            </ul>
            <h2 className={Styles.subTitle}>Benefits Provided by the Employer (UAE)</h2>
            <ul>
                <li>1–2 Year Employment Contract</li>
                <li>Free Food and Accommodation</li>
                <li>Medical Insurance and Safety Cover (to be arranged by the employee)</li>
                <li>Free Visa, Medical & Emirates ID</li>
                <li>10 Hours Work/Day, 6 Days/Week</li>
                <li>Recruitment Charges Apply</li>
            </ul>
            <h2 className={Styles.subTitle}> Eligibility Criteria</h2>
            <ul>
                <li>Must be an Indian Male Candidate</li>
                <li>Age between 21 and 45 years</li>
                <li>Must have relevant experience in construction or technical trades</li>
                <li>Physically fit and ready to work in UAE conditions</li>
                <li>Willing to relocate immediately upon selection</li>
                
            </ul>
            <h2 className={Styles.subTitle}>Why Choose Global Visa Internationals?</h2>
            <ul>
                <li>Trusted & Licensed Consultancy</li>
                <li>Direct Coordination with UAE Employer</li>
                <li>Secure Document Handling</li>
                <li>Complete Visa & Immigration Assistance</li>
                <li> Guidance Until You Reach UAE</li>
            </ul>
            <p>We’re not just a recruiter — we are your career partner abroad.</p>
            <h2 className={Styles.subTitle}>How to Apply?</h2>
            <ol>
                <li>Submit Your Resume via our contact form or email</li>
                <li>Screening Call from our recruitment expert</li>
                <li>Attend Interview (online or in-person)</li>
                <li>We Process Visa, Medical, & Travel</li>
                <li>Fly to UAE with full employer support</li>
            </ol>
                    <h2 className={Styles.Title}>Contact Us Today</h2>

            </div>
              <div className={Styles.formSection}>
          <h2 className={Styles.subTitle}>Application Form</h2>
          <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data">
            
            {/* Full Name & Phone */}
            <div className={Styles.row}>
              <div>
                <input
                  className={Styles.input}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  className={Styles.input}
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
            <div className={Styles.row}>
              <div>
                <select className={Styles.select} name="experience" required>
                  <option value="" disabled selected hidden>Select Experience</option>
                  {["0-2 Years", "2-5 Years", "5-10 Years", "11-20 Years","20+ Years"].map((exp) => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  className={Styles.input}
                  type="date"
                  name="dob"
                  required
                  max={new Date().toISOString().split("T")[0]}
                  title="Select your date of birth"
                />
              </div>
            </div>
        
            {/* Qualification & Email */}
            <div className={Styles.row}>
              <div>
                <select className={Styles.select} name="education" required>
                  <option value="" disabled selected hidden>Select Qualification</option>
                  {["PUC", "Diploma", "Bachelor's", "Master's", "Other"].map((edu) => (
                    <option key={edu} value={edu}>{edu}</option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  className={Styles.input}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
        
            {/* Resume Upload & Job Role */}
            <div className={Styles.row}>
              <div>
                <input
                  className={Styles.input}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <div>
                <select className={Styles.select} name="jobTitle" required>
                  <option value="" disabled selected hidden>Applying For Job</option>
                  {["Stone Mason", "Shuttering Carpenter", "Steel Fixer", "Civil Construction Helper", "Electrical Technician", "Plumber", "AC Technician"].map((job) => (
                    <option key={job} value={job}>{job}</option>
                  ))}
                </select>
              </div>
            </div>
        
            <button className={Styles.submittingBtn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        
          {showPopup && (
            <div className={Styles.popupOverlay}>
              <div className={Styles.popupContent}>
                <p>✅ Your application has been submitted successfully!</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        
        </section>
        </>
    );
}