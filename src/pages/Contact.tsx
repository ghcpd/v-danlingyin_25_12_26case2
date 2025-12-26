import { FormEvent, useMemo, useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const Contact = (): JSX.Element => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [sent, setSent] = useState(false);

  const isValidEmail = useMemo(() => /\S+@\S+\.\S+/, []);

  const validate = (): boolean => {
    const nextErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    if (form.email && !isValidEmail.test(form.email)) nextErrors.email = 'Enter a valid email';
    if (!form.message.trim()) nextErrors.message = 'Message cannot be empty';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  const handleChange = (key: keyof ContactForm, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <div className="container-responsive space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-dusk">Contact</h1>
        <p className="text-dusk/75 max-w-2xl">
          Have questions or want to partner on a project? Send us a note and we will respond within two business days.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6" noValidate>
        <label className="space-y-2 block">
          <span className="block text-sm font-semibold text-dusk">Name</span>
          <input
            className="w-full rounded-xl border-white/60 bg-white/80 px-4 py-3 focus:border-leaf focus:ring-leaf"
            name="name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </label>

        <label className="space-y-2 block">
          <span className="block text-sm font-semibold text-dusk">Email</span>
          <input
            className="w-full rounded-xl border-white/60 bg-white/80 px-4 py-3 focus:border-leaf focus:ring-leaf"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        </label>

        <label className="space-y-2 block">
          <span className="block text-sm font-semibold text-dusk">Message</span>
          <textarea
            className="w-full rounded-xl border-white/60 bg-white/80 px-4 py-3 focus:border-leaf focus:ring-leaf"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            required
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
        </label>

        <button
          type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-leaf px-6 py-3 font-semibold text-white shadow-lg shadow-leaf/20 hover:bg-dusk transition-colors"
        >
          Send message
        </button>

        {sent && (
          <div className="rounded-xl bg-leaf/10 border border-leaf/30 px-4 py-3 text-leaf font-semibold" role="status">
            Message received. We will reply soon.
          </div>
        )}
      </form>
    </div>
  );
};
