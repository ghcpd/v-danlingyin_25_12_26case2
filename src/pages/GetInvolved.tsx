import { FormEvent, useMemo, useState } from 'react';

interface FormState {
  name: string;
  email: string;
  interest: string;
}

const interests = ['Climate', 'Wildlife', 'Ocean', 'Recycling', 'Education'];

export const GetInvolved = (): JSX.Element => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const isValidEmail = useMemo(() => /\S+@\S+\.\S+/, []);

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    if (form.email && !isValidEmail.test(form.email)) nextErrors.email = 'Enter a valid email';
    if (!form.interest) nextErrors.interest = 'Select an area of interest';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (key: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <div className="container-responsive space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-dusk">Get Involved</h1>
        <p className="text-dusk/75 max-w-2xl">
          Join volunteers, students, and partners taking climate-smart actions. Sign up to receive project invites and
          training opportunities tailored to your interests.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2">
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

          <label className="space-y-2">
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
        </div>

        <label className="space-y-2 block">
          <span className="block text-sm font-semibold text-dusk">Area of interest</span>
          <select
            className="w-full rounded-xl border-white/60 bg-white/80 px-4 py-3 focus:border-leaf focus:ring-leaf"
            name="interest"
            value={form.interest}
            onChange={(e) => handleChange('interest', e.target.value)}
            required
            aria-invalid={Boolean(errors.interest)}
          >
            <option value="">Select an area</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
          {errors.interest && <p className="text-sm text-red-600">{errors.interest}</p>}
        </label>

        <button
          type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-leaf px-6 py-3 font-semibold text-white shadow-lg shadow-leaf/20 hover:bg-dusk transition-colors"
        >
          Submit
        </button>

        {submitted && (
          <div className="rounded-xl bg-leaf/10 border border-leaf/30 px-4 py-3 text-leaf font-semibold" role="status">
            Thanks for joining! We will follow up with opportunities that match your interests.
          </div>
        )}
      </form>
    </div>
  );
};
