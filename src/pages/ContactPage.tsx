import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { CATEGORIES, DEMO_CONTACT_INFO } from '../data/catalog';

interface FormValues {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  division: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  division?: string;
  message?: string;
}

const BUSINESS_DIVISIONS = [
  {
    division: 'Food & Grocery Items',
    title: 'Wholesale Food & Catering Supply',
    description: 'Bulk grains, cooking oils, lentils, spices, beverages, and chilled/frozen proteins.',
  },
  {
    division: 'Building Materials',
    title: 'Construction & Contracting Materials',
    description: 'Structural cement, steel rebar, aggregates, MEP supplies, paints, and finishes.',
  },
  {
    division: 'Transportation',
    title: 'Commercial Freight & Fleet Tyres',
    description: 'Road haulage contracts, cargo logistics, radial truck tyres, and OTR heavy tyres.',
  },
  {
    division: 'Cleaning Items',
    title: 'Institutional Hygiene & Janitorial Supply',
    description: 'Concentrated sanitation chemicals, tissue systems, tools, and cleaning machinery.',
  },
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    division: initialCategory || CATEGORIES[0].name,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormValues | null>(null);

  useEffect(() => {
    const paramCat = searchParams.get('category');
    if (paramCat) {
      setValues((prev) => ({
        ...prev,
        division: paramCat,
      }));
    }
  }, [searchParams]);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid business email address.';
    }

    const digitsOnly = form.phone.replace(/[^\d+]/g, '');
    if (form.phone.trim() && digitsOnly.length < 7) {
      nextErrors.phone = 'Please enter a valid contact phone number (at least 7 digits) or leave blank.';
    }

    if (!form.division) {
      nextErrors.division = 'Please select a relevant business division.';
    }

    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message = 'Please enter your message (at least 15 characters).';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSelectDivision = (divisionName: string) => {
    setValues((prev) => ({ ...prev, division: divisionName }));
    setSubmittedSummary(null);
    const formElement = document.getElementById('contact-form-card');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedSummary({ ...values });
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setErrors({});
    setValues({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      division: CATEGORIES[0].name,
      message: '',
    });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-[75vh]">
      {/* Page Header */}
      <section className="bg-[#0B192C] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-medium text-[#E5BD67]">Contact Us</p>
            <h1 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight text-white">
              Commercial &amp; Contracting Desk
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Reach out regarding wholesale supply, construction materials, or freight logistics using the contact form below.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Info & Business Divisions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Information Card */}
            <section
              aria-labelledby="contact-info-heading"
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5"
            >
              <div>
                <h2 id="contact-info-heading" className="text-xl font-bold text-[#0B192C]">
                  Contact Information
                </h2>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {DEMO_CONTACT_INFO.notice}
                </p>
              </div>

              <dl className="divide-y divide-slate-200 border-t border-slate-200 text-sm">
                <div className="py-3.5 space-y-1">
                  <dt className="text-xs font-medium text-slate-500">Corporate Office</dt>
                  <dd className="font-medium text-[#0B192C]">{DEMO_CONTACT_INFO.address}</dd>
                </div>
                <div className="py-3.5 space-y-1">
                  <dt className="text-xs font-medium text-slate-500">Phone Line</dt>
                  <dd className="font-medium text-[#0B192C] font-mono tabular-nums">
                    {DEMO_CONTACT_INFO.phone}
                  </dd>
                </div>
                <div className="py-3.5 space-y-1">
                  <dt className="text-xs font-medium text-slate-500">Email Address</dt>
                  <dd className="font-medium text-[#0B192C]">{DEMO_CONTACT_INFO.email}</dd>
                </div>
                <div className="py-3.5 space-y-1">
                  <dt className="text-xs font-medium text-slate-500">Operating Schedule</dt>
                  <dd className="font-medium text-[#0B192C]">{DEMO_CONTACT_INFO.hours}</dd>
                </div>
              </dl>
            </section>

            {/* Business Divisions */}
            <section
              aria-labelledby="business-divisions-heading"
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4"
            >
              <div>
                <h2 id="business-divisions-heading" className="text-lg font-bold text-[#0B192C]">
                  Business Divisions
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Select a division below to pre-select it in the contact form.
                </p>
              </div>

              <div className="space-y-2.5">
                {BUSINESS_DIVISIONS.map((track) => {
                  const isActive = values.division === track.division;
                  return (
                    <button
                      key={track.division}
                      type="button"
                      onClick={() => handleSelectDivision(track.division)}
                      className={`w-full text-left p-4 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                        isActive
                          ? 'bg-[#0B192C] text-white border-[#0B192C]'
                          : 'bg-[#F8FAFC] text-[#0B192C] border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold">{track.title}</p>
                        <ArrowRight
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? 'text-[#E5BD67]' : 'text-slate-400'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <p
                        className={`mt-1 text-xs leading-relaxed ${
                          isActive ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {track.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7">
            <section
              id="contact-form-card"
              aria-labelledby="contact-form-heading"
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8"
            >
              {submittedSummary ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-3.5 p-4 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-950">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-1 text-sm">
                      <p className="font-semibold">
                        Demo Message Validated &amp; Recorded Locally
                      </p>
                      <p className="text-emerald-900 leading-relaxed">
                        This is a frontend demonstration website with no connected backend mail server, so no message was transmitted externally. Below is a preview of the validated form submission.
                      </p>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 text-sm">
                    <div className="px-4 py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-500">Contact Name</span>
                      <span className="font-semibold text-[#0B192C]">{submittedSummary.fullName}</span>
                    </div>
                    {submittedSummary.companyName && (
                      <div className="px-4 py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="text-slate-500">Company</span>
                        <span className="font-semibold text-[#0B192C]">{submittedSummary.companyName}</span>
                      </div>
                    )}
                    <div className="px-4 py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-500">Email</span>
                      <span className="font-semibold text-[#0B192C]">{submittedSummary.email}</span>
                    </div>
                    {submittedSummary.phone && (
                      <div className="px-4 py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="text-slate-500">Phone</span>
                        <span className="font-semibold text-[#0B192C] font-mono tabular-nums">
                          {submittedSummary.phone}
                        </span>
                      </div>
                    )}
                    <div className="px-4 py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-500">Division</span>
                      <span className="font-semibold text-[#0B192C]">{submittedSummary.division}</span>
                    </div>
                    <div className="px-4 py-3 space-y-1">
                      <span className="text-slate-500 block">Message</span>
                      <p className="text-[#0B192C] leading-relaxed">{submittedSummary.message}</p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162C4A] rounded-md transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>Send Another Demo Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 id="contact-form-heading" className="text-xl font-bold text-[#0B192C]">
                      Send a Message
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      Complete the fields below to preview form validation and a demonstration confirmation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#0B192C] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={values.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className={`w-full h-11 px-3.5 text-sm rounded-md border bg-[#F8FAFC] text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 ${
                          errors.fullName
                            ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                            : 'border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-[#0B192C] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={values.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="Optional company name"
                        className="w-full h-11 px-3.5 text-sm rounded-md border border-slate-200 bg-[#F8FAFC] text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0B192C] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="name@company.example"
                        className={`w-full h-11 px-3.5 text-sm rounded-md border bg-[#F8FAFC] text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 ${
                          errors.email
                            ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                            : 'border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0B192C] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        placeholder="+000 000 0000"
                        className={`w-full h-11 px-3.5 text-sm rounded-md border bg-[#F8FAFC] text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 ${
                          errors.phone
                            ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                            : 'border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="division" className="block text-sm font-medium text-[#0B192C] mb-1.5">
                      Product Division <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="division"
                      name="division"
                      value={values.division}
                      onChange={(e) => handleChange('division', e.target.value)}
                      className="w-full h-11 px-3.5 text-sm rounded-md border border-slate-200 bg-[#F8FAFC] text-[#0B192C] focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.slug} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                      <option value="Multi-Division / General Contracting">
                        Multi-Division / General Contracting
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0B192C] mb-1.5">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Write your message here..."
                      className={`w-full p-3.5 text-sm rounded-md border bg-[#F8FAFC] text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 ${
                        errors.message
                          ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
                          : 'border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      Frontend demonstration form · Validates inputs without transmitting to a backend server.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162C4A] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
