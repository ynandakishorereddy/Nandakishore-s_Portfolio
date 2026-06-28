'use client';

import SectionHeading from '@/components/ui/section-heading';
import { FadeIn, SlideIn } from '@/components/ui/motion-wrapper';
import { personalInfo } from '@/data/portfolio-data';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '96653a79-a120-4848-bb86-37c0f2257de5');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <SectionHeading title="Get In Touch" subtitle="Let's Connect" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let's talk about your next project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I'm currently available for full-time roles and freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </FadeIn>

            <div className="space-y-6">
              <SlideIn delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800/50">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800/50">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </SlideIn>
            </div>

            <FadeIn delay={0.3} className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect on Socials</h4>
              <div className="flex gap-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <GithubIcon size={24} />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.4}>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none">
                {isSubmitted ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-800/50">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-900 dark:text-white">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
                        placeholder="Job Opportunity / Project Inquiry"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none text-slate-900 dark:text-white"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
