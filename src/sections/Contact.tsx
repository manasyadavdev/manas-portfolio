import { useState, type FormEvent } from 'react';
import { Mail, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      e.message = 'Please enter a message';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="section-pad border-t border-subtle-c">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading + info */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something"
                subtitle="Have a project, role or collaboration in mind? Send a message and I'll get back to you."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="glass group flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl accent-soft-bg">
                    <Mail className="h-5 w-5 accent-c" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-c">Email</p>
                    <p className="text-sm font-medium text-primary-c">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl accent-soft-bg">
                    <Github className="h-5 w-5 accent-c" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-c">GitHub</p>
                    <p className="text-sm font-medium text-primary-c">@manasyadavdev</p>
                  </div>
                </a>

                <div className="glass flex items-center gap-4 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl accent-soft-bg">
                    <span className="text-sm font-bold accent-c">{personalInfo.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-c">Name</p>
                    <p className="text-sm font-medium text-primary-c">{personalInfo.name}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="glass-strong p-6 sm:p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full accent-soft-bg">
                      <CheckCircle2 className="h-8 w-8 accent-c" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-primary-c">Email opened</h3>
                    <p className="mt-2 max-w-sm text-sm text-secondary-c" style={{ lineHeight: 1.6 }}>
                      Your email client should have opened with your message pre-filled. If it
                      didn't, email me directly at {personalInfo.email}.
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({ name: '', email: '', message: '' });
                      }}
                      className="btn-ghost mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="label-text">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your name"
                        className="input-field"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="error-text" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="label-text">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="your@email.com"
                        className="input-field"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="error-text" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="label-text">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Tell me about your project, role or collaboration..."
                        className="input-field resize-none"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="error-text" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn-primary group w-full">
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      Send Message
                    </button>

                    {/* Fallback note */}
                    <div className="flex items-start gap-2 rounded-lg border border-subtle-c bg-sunken-c p-3">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-c" />
                      <p className="text-xs text-muted-c" style={{ lineHeight: 1.5 }}>
                        This form opens your email client with the message pre-filled. Your
                        information is not stored on a server.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
